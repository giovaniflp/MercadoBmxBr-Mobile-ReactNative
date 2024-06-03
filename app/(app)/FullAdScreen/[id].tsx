import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import BottomBar from "../../components/BottomBar";
import { Link } from "expo-router"
import { useLocalSearchParams } from "expo-router";
import axiosInstance from "../../server/axios";
import * as SecureStore from 'expo-secure-store';
import { ActivityIndicator, MD2Colors  } from "react-native-paper";
import {format} from 'date-fns';

export default function FullAdScreen(){
    const { id } = useLocalSearchParams()

    const [loading, setLoading] = useState(false)

    const[formatDate, setFormatDate] = useState("")
    const[formatHour, setFormatHour] = useState("")

    const getAdData = async () => {
        setLoading(true)
        try{
            const token = await SecureStore.getItemAsync('session');
            const config = {
            headers: {
                Authorization: "Bearer " + token
            }
            }
            const response = await axiosInstance.get("/api/advertisements/" + id, config).then(async(response) => {
                setFormatDate(format(new Date(response.data.dataPostagem), 'dd/MM/yyyy'))
                setFormatHour(format(new Date(response.data.dataPostagem), 'HH:mm'))
                setAdData(response.data)
                JwtDecode()
            })
        } catch(e){
            console.log(e)
        } finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        getAdData()
    },[])

    const [adData, setAdData] = useState([])
    const [favorite, setFavorite] = useState(false)
    const [idUsuario, setIdUsuario] = useState("")

    const JwtDecode = async () => {
        const token = await SecureStore.getItemAsync('session');
        const config = {
            headers: {
            Authorization: "Bearer " + token
            }
        }
        await axiosInstance.get("/api/token/jwtDecode", config).then(async(response) => {
            setIdUsuario(response.data.jti)
            verifyFavorite(response.data.jti)
        })
    }

    const verifyFavorite = async (idUsuario: string) => {
        const token = await SecureStore.getItemAsync('session');
        const config = {
        headers: {
            Authorization: "Bearer " + token
        }
        }
        await axiosInstance.get("/api/favorites/verify/" + idUsuario + "/" + id, config).then(async(response) => {
            if(response.data == true){
                setFavorite(true)
            } else {
                setFavorite(false)
            }
            console.log(response.data)
        })
    }

    const addFavorite = async () => {
        const token = await SecureStore.getItemAsync('session');
        const config = {
        headers: {
            Authorization: "Bearer " + token
        }
        }
        const dataRequest = {
            idAnuncio: id,
            idUsuario: idUsuario
        }
        await axiosInstance.post("/api/favorites/save", dataRequest ,config).then(async(response) => {
            setFavorite(true)
            alert("Anúncio adicionado aos favoritos!")
        })
    }

    const removeFavorite = async () => {
        const token = await SecureStore.getItemAsync('session');
        const config = {
        headers: {
            Authorization: "Bearer " + token
        }
        }
        await axiosInstance.delete("/api/favorites/delete/" + id, config).then(async(response) => {
            setFavorite(false)
            alert("Anúncio removido dos favoritos!")
        })
    }

    
    return(
        <View className="flex h-full bg-white">
            {loading && <ActivityIndicator className="absolute top-0 left-0 right-0 bottom-0 z-10" animating={true} color={MD2Colors.purpleA700} size={100}></ActivityIndicator>}
            <View className="bg-purple-700 p-4 flex flex-row items-center justify-between pt-12">
            <Link href="/HomeScreen" asChild>
                <TouchableOpacity>
                    <Image className="w-8 h-8" source={require('../../../public/icons/arrowBackPNG.png')}></Image>
                </TouchableOpacity>
            </Link>
            {
                favorite ? 
                <TouchableOpacity onPress={removeFavorite}>
                    <Image className="w-8 h-8" source={require('../../../public/icons/favoriteFullPNG.png')}></Image>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={addFavorite}>
                    <Image className="w-8 h-8" source={require('../../../public/icons/favoritePNG.png')}></Image>
                </TouchableOpacity>
            }
        </View>
            <ScrollView className="mb-14" showsVerticalScrollIndicator={false}>
                    <Image style={{resizeMode:"contain"}} className="w-full h-60" source={{uri:adData.imagem}}></Image>
                <View className="mx-2">
                    <View>
                    <Text className="text-xs text-gray-400">Cód. anúncio - {adData.id}</Text>
                    {adData.marca == "OUTRA MARCA" ? <Text className="text-2xl">{adData.categoria} {adData.modelo}</Text> : <Text className="text-2xl">{adData.categoria} {adData.marca} {adData.modelo}</Text>}
                        <Text className="text-lg">Preço: <Text className="text-purple-700">R${adData.preco}</Text></Text>
                        <Text>{adData.localidade} | {formatDate} às {formatHour}</Text>            
                    </View>
                    <View className="mt-4 bg-gray-200 rounded-lg p-2">
                        <Text className="mb-4 text-purple-700">Características Gerais</Text>
                        <Text className="mb-1">Estado da peça: {adData.estadoDaPeca}</Text>
                        <Text className="mb-1">Cor: {adData.cor}</Text>
                        <Text className="mb-1">Material: {adData.material}</Text>
                        <Text className="mb-1">Peso aproximado: {adData.peso}</Text>
                        <Text className="mb-1">Descrição: {adData.descricao}</Text>
                    </View>
                    <View className="mt-4 bg-gray-200 rounded-lg p-2">
                        <Text className="mb-4 text-purple-700">Características Específicas</Text>
                        {adData.abracadeiraDiametro && <Text className="mb-1">Diâmetro: {adData.abracadeiraDiametro}</Text>}
                        {adData.aroTipoFolha && <Text className="mb-1">Tipo de folha: {adData.aroTipoFolha}</Text>}
                        {adData.aroFuros && <Text className="mb-1">Quantidade de furos: {adData.aroFuros}</Text>}
                        {adData.aroGrossura && <Text className="mb-1">Grossura dos raios: {adData.aroGrossura}</Text>}
                        {adData.bancoTipo && <Text className="mb-1">Tipo do banco: {adData.bancoTipo}</Text>}
                        {adData.bancoCanoteTamanho && <Text className="mb-1">Tamanho do canote: {adData.bancoCanoteTamanho}</Text>}
                        {adData.bikeCompletaModalidade && <Text className="mb-1">Modalidade: {adData.bikeCompletaModalidade}</Text>}
                        {adData.camaraAroTamanho && <Text className="mb-1">Aro: {adData.camaraAroTamanho}</Text>}
                        {adData.camaraTipoValvula && <Text className="mb-1">Tipo de válvula: {adData.camaraTipoValvula}</Text>}
                        {adData.canoteTipo && <Text className="mb-1">Tipo de canote: {adData.canoteTipo}</Text>}
                        {adData.canoteTamanho && <Text className="mb-1">Tamanho do canote: {adData.canoteTamanho}</Text>}
                        {adData.coroaDentes && <Text className="mb-1">Quantidade de dentes: {adData.coroaDentes}</Text>}
                        {adData.coroaProtetor && <Text className="mb-1">Possui protetor: {adData.coroaProtetor}</Text>}
                        {adData.coroaAdaptador && <Text className="mb-1">Acompanha adaptador: {adData.coroaAdaptador}</Text>}
                        {adData.correnteTipoElo && <Text className="mb-1">Tipo de elo: {adData.correnteTipoElo}</Text>}
                        {adData.cuboDianteiroFuros && <Text className="mb-1">Quantidade de furos: {adData.cuboDianteiroFuros}</Text>}
                        {adData.cuboDianteiroTipoEixo && <Text className="mb-1">Tipo de eixo: {adData.cuboDianteiroTipoEixo}</Text>}
                        {adData.cuboDianteiroMaterialEixo && <Text className="mb-1">Material do eixo: {adData.cuboDianteiroMaterialEixo}</Text>}
                        {adData.cuboDianteiroMaterialParafusos && <Text className="mb-1">Material dos parafusos: {adData.cuboDianteiroMaterialParafusos}</Text>}
                        {adData.cuboDianteiroProtetor && <Text className="mb-1">Acompanha protetor: {adData.cuboDianteiroProtetor}</Text>}
                        {adData.tipoCubo && <Text className="mb-1">Tipo de Cubo: {adData.tipoCubo}</Text>}
                        {adData.cuboTraseiroTracao && <Text className="mb-1">Tração: {adData.cuboTraseiroTracao}</Text>}
                        {adData.cuboTraseiroCog && <Text className="mb-1">Tamanho do cog: {adData.cuboTraseiroCog}</Text>}
                        {adData.cuboTraseiroTravas && <Text className="mb-1">Quantidade de travas: {adData.cuboTraseiroTravas}</Text>}
                        {adData.cuboTraseiroFuros && <Text className="mb-1">Quantidade de furos: {adData.cuboTraseiroFuros}</Text>}
                        {adData.cuboTraseiroTipoEixo && <Text className="mb-1">Tipo de eixo: {adData.cuboTraseiroTipoEixo}</Text>}
                        {adData.cuboTraseiroMaterialEixo && <Text className="mb-1">Material do eixo: {adData.cuboTraseiroMaterialEixo}</Text>}
                        {adData.cuboTraseiroMaterialParafusos && <Text className="mb-1">Material dos parafusos: {adData.cuboTraseiroMaterialParafusos}</Text>}
                        {adData.cuboTraseiroProtetor && <Text className="mb-1">Acompanha protetor: {adData.cuboTraseiroProtetor}</Text>}
                        {adData.eixoCentralEstrias && <Text className="mb-1">Número de estrias: {adData.eixoCentralEstrias}</Text>}
                        {adData.eixoCentralTamanho && <Text className="mb-1">Tamanho do rolamento: {adData.eixoCentralTamanho}</Text>}
                        {adData.freioPeca && <Text className="mb-1">Peça do freio: {adData.freioPeca}</Text>}
                        {adData.garfoOffset && <Text className="mb-1">Offset: {adData.garfoOffset}</Text>}
                        {adData.garfoTampa && <Text className="mb-1">Tipo de tampa: {adData.garfoTampa}</Text>}
                        {adData.guidaoTamanho && <Text className="mb-1">Tamanho: {adData.guidaoTamanho}</Text>}
                        {adData.guidaoLargura && <Text className="mb-1">Largura: {adData.guidaoLargura}</Text>}
                        {adData.guidaoAngulo && <Text className="mb-1">Ângulo: {adData.guidaoAngulo}</Text>}
                        {adData.guidaoTipo && <Text className="mb-1">Tipo: {adData.guidaoTipo}</Text>}
                        {adData.manoplaTamanho && <Text className="mb-1">Tamanho: {adData.manoplaTamanho}</Text>}
                        {adData.manoplaBarEnds && <Text className="mb-1">Acompanha Bar Ends: {adData.manoplaBarEnds}</Text>}
                        {adData.mesaTamanho && <Text className="mb-1">Tamanho: {adData.mesaTamanho}</Text>}
                        {adData.mesaAltura && <Text className="mb-1">Altura: {adData.mesaAltura}</Text>}
                        {adData.mesaTipo && <Text className="mb-1">Tipo: {adData.mesaTipo}</Text>}
                        {adData.mesaFabricacao && <Text className="mb-1">Modo de fabricação: {adData.mesaFabricacao}</Text>}
                        {adData.movimentoCentralTipo && <Text className="mb-1">Tipo: {adData.movimentoCentralTipo}</Text>}
                        {adData.movimentoCentralRolamento && <Text className="mb-1">Tamanho do rolamento: {adData.movimentoCentralRolamento}</Text>}
                        {adData.movimentoCentralAcompanha && <Text className="mb-1">Acompanha espaçadores: {adData.movimentoCentralAcompanha}</Text>}
                        {adData.movimentoDirecaoTipo && <Text className="mb-1">Tipo: {adData.movimentoDirecaoTipo}</Text>}
                        {adData.movimentoDirecaoTampa && <Text className="mb-1">Tamanho da tampa: {adData.movimentoDirecaoTampa}</Text>}
                        {adData.movimentoDirecaoAcompanha && <Text className="mb-1">Acompanha espaçadores: {adData.movimentoDirecaoAcompanha}</Text>}
                        {adData.pedalRosca && <Text className="mb-1">Tipo de rosca: {adData.pedalRosca}</Text>}
                        {adData.pedalConstrucao && <Text className="mb-1">Construção interna: {adData.pedalConstrucao}</Text>}
                        {adData.pedaleiraQuantidade && <Text className="mb-1">Quantidade: {adData.pedaleiraQuantidade}</Text>}
                        {adData.pedaleiraEncaixe && <Text className="mb-1">tipo de encaixe: {adData.pedaleiraEncaixe}</Text>}
                        {adData.pedaleiraTamanho && <Text className="mb-1">Tamanho: {adData.pedaleiraTamanho}</Text>}
                        {adData.pedivelaTracao && <Text className="mb-1">Tração: {adData.pedivelaTracao}</Text>}
                        {adData.pedivelaTamanho && <Text className="mb-1">Tamanho dos braços: {adData.pedivelaTamanho}</Text>}
                        {adData.pedivelaRolamento && <Text className="mb-1">Tamanho do rolamento: {adData.pedivelaRolamento}</Text>}
                        {adData.pedivelaEstrias && <Text className="mb-1">Quantidade de estrias: {adData.pedivelaEstrias}</Text>}
                        {adData.pedivelaAcompanha && <Text className="mb-1">Acompanha eixo: {adData.pedivelaAcompanha}</Text>}
                        {adData.pedivelaConstrucao && <Text className="mb-1">Construção: {adData.pedivelaConstrucao}</Text>}
                        {adData.pneuAro && <Text className="mb-1">Aro: {adData.pneuAro}</Text>}
                        {adData.pneuBandaLateral && <Text className="mb-1">Banda lateral: {adData.pneuBandaLateral}</Text>}
                        {adData.pneuIndicacao && <Text className="mb-1">Indicação da modalidade: {adData.pneuIndicacao}</Text>}
                        {adData.pneuTamanho && <Text className="mb-1">Tamanho: {adData.pneuTamanho}</Text>}
                        {adData.quadroAbracadeira && <Text className="mb-1">Tipo de abraçadeira: {adData.quadroAbracadeira}</Text>}
                        {adData.quadroCentral && <Text className="mb-1">Central: {adData.quadroCentral}</Text>}
                        {adData.quadroDirecao && <Text className="mb-1">Direção: {adData.quadroDirecao}</Text>}
                        {adData.quadroEsticador && <Text className="mb-1">Possui esticador: {adData.quadroEsticador}</Text>}
                        {adData.quadroMedida && <Text className="mb-1">Medida: {adData.quadroMedida}</Text>}
                        {adData.quadroModalidade && <Text className="mb-1">Modalidade indicada: {adData.quadroModalidade}</Text>}
                        {adData.quadroPinos && <Text className="mb-1">Possui pinos de freio: {adData.quadroPinos}</Text>}
                        {adData.quadroTamanhoAro && <Text className="mb-1">Aro: {adData.quadroTamanhoAro}</Text>}
                        {adData.quadroTolerancia && <Text className="mb-1">Tolerância de Pneu: {adData.quadroTolerancia}</Text>}
                        {adData.protetorLado && <Text className="mb-1">Lado do protetor: {adData.protetorLado}</Text>}
                        {adData.raioTipo && <Text className="mb-1">Tipo do raio: {adData.raioTipo}</Text>}
                        {adData.raioTamanho && <Text className="mb-1">Tamanho: {adData.raioTamanho}</Text>}
                    </View>
                    <View className="mt-2 mb-2">
                        <Text>Anunciado por <Text className="text-yellow-500">{adData.nomeUsuario}</Text></Text>
                        <View className="flex flex-row">
                        <Text className="text-xl text-purple-700">Fale com o vendedor: </Text>
                        {adData.marca == "OUTRA MARCA" ? <Link href={"https://api.whatsapp.com/send?phone=55" + 
                        adData.whatsapp + 
                        "&text=Ol%C3%A1%20"+ adData.nomeUsuario +",%20vim%20do%20seu%20an%C3%BAncio%20no%20Mercado%20Bmx%20Br"+ 
                        "%20-%20" + 
                        adData.categoria +
                        ",%20ainda%20est%C3%A1%20dispon%C3%ADvel?" } asChild>
                            <TouchableOpacity>
                                <Image style={{resizeMode:"contain"}} className="w-8 h-8" source={require('../../../public/icons/whatsapp.png')}></Image>
                            </TouchableOpacity>
                        </Link>
                        : 
                        <Link href={"https://api.whatsapp.com/send?phone=55" + 
                        adData.whatsapp     + 
                        "&text=Ol%C3%A1%20"+ adData.nomeUsuario +",%20vim%20do%20seu%20an%C3%BAncio%20no%20Mercado%20Bmx%20Br"+ 
                        "%20-%20" + 
                        adData.categoria + 
                        "%20" +
                        adData.marca +
                        "%20" +
                        adData.modelo +
                        ",%20ainda%20est%C3%A1%20dispon%C3%ADvel?" } asChild>
                            <TouchableOpacity>
                                <Image style={{resizeMode:"contain"}} className="w-8 h-8" source={require('../../../public/icons/whatsapp.png')}></Image>
                            </TouchableOpacity>
                        </Link>
                        }
                        </View>
                        
                    </View>
                </View>
            </ScrollView>
            <BottomBar></BottomBar>
        </View>
    )
}