import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import BottomBar from "../../components/BottomBar";
import TopBar from "../../components/TopBar";
import { Link } from "expo-router"
import { useLocalSearchParams } from "expo-router";
import axiosInstance from "../../server/axios";
import * as SecureStore from 'expo-secure-store';

export default function FullAdScreen(){

    const { id } = useLocalSearchParams()

    const getAdData = async () => {
        const token = await SecureStore.getItemAsync('session');
        const config = {
          headers: {
            Authorization: "Bearer " + token
          }
        }
        const response = await axiosInstance.get("/api/advertisements/" + id, config)
        setAdData(response.data)
    }

    useEffect(()=>{
        getAdData()
    })

    const [adData, setAdData] = useState([])


    return(
        <View className="flex h-full bg-white">
            <TopBar></TopBar>
            <ScrollView className="mb-12">
                <View>
                    <Image style={{resizeMode:"contain"}} className="w-full h-60" source={{uri:adData.imagem}}></Image>
                    <View>
                    {adData.marca == "OUTRA MARCA" ? <Text>{adData.categoria} {adData.modelo}</Text> : <Text>{adData.categoria} {adData.marca} {adData.modelo}</Text>}
                        <Text>Preço: R${adData.preco}</Text>
                        <Text>{adData.localidade}</Text>
                        <Text>{adData.dataPostagem}PRECISA IMPLEMENTAR dataPostagem</Text>             
                    </View>
                    <View className="mt-4">
                        <Text className="mb-4">Características Gerais</Text>
                        <Text>{adData.estadoDaPeca}</Text>
                        <Text>{adData.cor}</Text>
                        <Text>{adData.material}</Text>
                        <Text>{adData.peso}</Text>
                        <Text>{adData.descricao}</Text>
                    </View>
                    <View className="mt-4">
                        <Text className="mb-4">Características Específicas</Text>
                        {adData.abracadeiraDiametro && <Text>Diâmetro: {adData.abracadeiraDiametro}</Text>}
                        {adData.aroTipoFolha && <Text>Tipo de folha: {adData.aroTipoFolha}</Text>}
                        {adData.aroFuros && <Text>Quantidade de furos: {adData.aroFuros}</Text>}
                        {adData.aroGrossura && <Text>Grossura dos raios: {adData.aroGrossura}</Text>}
                        {adData.bancoTipo && <Text>Tipo do banco: {adData.bancoTipo}</Text>}
                        {adData.bancoCanoteTamanho && <Text>Tamanho do canote: {adData.bancoCanoteTamanho}</Text>}
                        {adData.bikeCompletaModalidade && <Text>Modalidade: {adData.bikeCompletaModalidade}</Text>}
                        {adData.camaraAroTamanho && <Text>Aro: {adData.camaraAroTamanho}</Text>}
                        {adData.camaraTipoValvula && <Text>Tipo de válvula: {adData.camaraTipoValvula}</Text>}
                        {adData.canoteTipo && <Text>Tipo de canote: {adData.canoteTipo}</Text>}
                        {adData.canoteTamanho && <Text>Tamanho do canote: {adData.canoteTamanho}</Text>}
                        {adData.coroaDentes && <Text>Quantidade de dentes: {adData.coroaDentes}</Text>}
                        {adData.coroaProtetor && <Text>Possui protetor: {adData.coroaProtetor}</Text>}
                        {adData.coroaAdaptador && <Text>Acompanha adaptador: {adData.coroaAdaptador}</Text>}
                        {adData.correnteTipoElo && <Text>Tipo de elo: {adData.correnteTipoElo}</Text>}
                        {adData.cuboDianteiroFuros && <Text>Quantidade de furos: {adData.cuboDianteiroFuros}</Text>}
                        {adData.cuboDianteiroTipoEixo && <Text>Tipo de eixo: {adData.cuboDianteiroTipoEixo}</Text>}
                        {adData.cuboDianteiroMaterialEixo && <Text>Material do eixo: {adData.cuboDianteiroMaterialEixo}</Text>}
                        {adData.cuboDianteiroMaterialParafusos && <Text>Material dos parafusos: {adData.cuboDianteiroMaterialParafusos}</Text>}
                        {adData.cuboDianteiroProtetor && <Text>Acompanha protetor: {adData.cuboDianteiroProtetor}</Text>}
                        {adData.tipoCubo && <Text>Tipo de Cubo: {adData.tipoCubo}</Text>}
                        {adData.cuboTraseiroTracao && <Text>Tração: {adData.cuboTraseiroTracao}</Text>}
                        {adData.cuboTraseiroCog && <Text>Tamanho do cog: {adData.cuboTraseiroCog}</Text>}
                        {adData.cuboTraseiroTravas && <Text>Quantidade de travas: {adData.cuboTraseiroTravas}</Text>}
                        {adData.cuboTraseiroFuros && <Text>Quantidade de furos: {adData.cuboTraseiroFuros}</Text>}
                        {adData.cuboTraseiroTipoEixo && <Text>Tipo de eixo: {adData.cuboTraseiroTipoEixo}</Text>}
                        {adData.cuboTraseiroMaterialEixo && <Text>Material do eixo: {adData.cuboTraseiroMaterialEixo}</Text>}
                        {adData.cuboTraseiroMaterialParafusos && <Text>Material dos parafusos: {adData.cuboTraseiroMaterialParafusos}</Text>}
                        {adData.cuboTraseiroProtetor && <Text>Acompanha protetor: {adData.cuboTraseiroProtetor}</Text>}
                        {adData.eixoCentralEstrias && <Text>Número de estrias: {adData.eixoCentralEstrias}</Text>}
                        {adData.eixoCentralTamanho && <Text>Tamanho do rolamento: {adData.eixoCentralTamanho}</Text>}
                        {adData.freioPeca && <Text>Peça do freio: {adData.freioPeca}</Text>}
                        {adData.garfoOffset && <Text>Offset: {adData.garfoOffset}</Text>}
                        {adData.garfoTampa && <Text>Tipo de tampa: {adData.garfoTampa}</Text>}
                        {adData.guidaoTamanho && <Text>Tamanho: {adData.guidaoTamanho}</Text>}
                        {adData.guidaoLargura && <Text>Largura: {adData.guidaoLargura}</Text>}
                        {adData.guidaoAngulo && <Text>Ângulo: {adData.guidaoAngulo}</Text>}
                        {adData.guidaoTipo && <Text>Tipo: {adData.guidaoTipo}</Text>}
                        {adData.manoplaTamanho && <Text>Tamanho: {adData.manoplaTamanho}</Text>}
                        {adData.manoplaBarEnds && <Text>Acompanha Bar Ends: {adData.manoplaBarEnds}</Text>}
                        {adData.mesaTamanho && <Text>Tamanho: {adData.mesaTamanho}</Text>}
                        {adData.mesaAltura && <Text>Altura: {adData.mesaAltura}</Text>}
                        {adData.mesaTipo && <Text>Tipo: {adData.mesaTipo}</Text>}
                        {adData.mesaFabricacao && <Text>Modo de fabricação: {adData.mesaFabricacao}</Text>}
                        {adData.movimentoCentralTipo && <Text>Tipo: {adData.movimentoCentralTipo}</Text>}
                        {adData.movimentoCentralRolamento && <Text>Tamanho do rolamento: {adData.movimentoCentralRolamento}</Text>}
                        {adData.movimentoCentralAcompanha && <Text>Acompanha espaçadores: {adData.movimentoCentralAcompanha}</Text>}
                        {adData.movimentoDirecaoTipo && <Text>Tipo: {adData.movimentoDirecaoTipo}</Text>}
                        {adData.movimentoDirecaoTampa && <Text>Tamanho da tampa: {adData.movimentoDirecaoTampa}</Text>}
                        {adData.movimentoDirecaoAcompanha && <Text>Acompanha espaçadores: {adData.movimentoDirecaoAcompanha}</Text>}
                        {adData.pedalRosca && <Text>Tipo de rosca: {adData.pedalRosca}</Text>}
                        {adData.pedalConstrucao && <Text>Construção interna: {adData.pedalConstrucao}</Text>}
                        {adData.pedaleiraQuantidade && <Text>Quantidade: {adData.pedaleiraQuantidade}</Text>}
                        {adData.pedaleiraEncaixe && <Text>tipo de encaixe: {adData.pedaleiraEncaixe}</Text>}
                        {adData.pedaleiraTamanho && <Text>Tamanho: {adData.pedaleiraTamanho}</Text>}
                        {adData.pedivelaTracao && <Text>Tração: {adData.pedivelaTracao}</Text>}
                        {adData.pedivelaTamanho && <Text>Tamanho dos braços: {adData.pedivelaTamanho}</Text>}
                        {adData.pedivelaRolamento && <Text>Tamanho do rolamento: {adData.pedivelaRolamento}</Text>}
                        {adData.pedivelaEstrias && <Text>Quantidade de estrias: {adData.pedivelaEstrias}</Text>}
                        {adData.pedivelaAcompanha && <Text>Acompanha eixo: {adData.pedivelaAcompanha}</Text>}
                        {adData.pedivelaConstrucao && <Text>Construção: {adData.pedivelaConstrucao}</Text>}
                        {adData.pneuAro && <Text>Aro: {adData.pneuAro}</Text>}
                        {adData.pneuBandaLateral && <Text>Banda lateral: {adData.pneuBandaLateral}</Text>}
                        {adData.pneuIndicacao && <Text>Indicação da modalidade: {adData.pneuIndicacao}</Text>}
                        {adData.pneuTamanho && <Text>Tamanho: {adData.pneuTamanho}</Text>}
                        {adData.quadroAbracadeira && <Text>Tipo de abraçadeira: {adData.quadroAbracadeira}</Text>}
                        {adData.quadroCentral && <Text>Central: {adData.quadroCentral}</Text>}
                        {adData.quadroDirecao && <Text>Direção: {adData.quadroDirecao}</Text>}
                        {adData.quadroEsticador && <Text>Possui esticador: {adData.quadroEsticador}</Text>}
                        {adData.quadroMedida && <Text>Medida: {adData.quadroMedida}</Text>}
                        {adData.quadroModalidade && <Text>Modalidade indicada: {adData.quadroModalidade}</Text>}
                        {adData.quadroPinos && <Text>Possui pinos de freio: {adData.quadroPinos}</Text>}
                        {adData.quadroTamanhoAro && <Text>Aro: {adData.quadroTamanhoAro}</Text>}
                        {adData.quadroTolerancia && <Text>Tolerância de Pneu: {adData.quadroTolerancia}</Text>}
                        {adData.protetorLado && <Text>Lado do protetor: {adData.protetorLado}</Text>}
                        {adData.raioTipo && <Text>Tipo do raio: {adData.raioTipo}</Text>}
                        {adData.raioTamanho && <Text>Tamanho: {adData.raioTamanho}</Text>}
                    </View>
                    <View className="mt-4">
                        <Text>Anunciado por {adData.nomeUsuario}</Text>
                        <Text>Fale com o vendedor:</Text>
                        {adData.marca == "OUTRA MARCA" ? <Link href={"https://api.whatsapp.com/send?phone=55" + 
                        adData.whatsapp + 
                        "&text=Ol%C3%A1%20"+ adData.nomeUsuario +",%20vim%20do%20seu%20an%C3%BAncio%20no%20Mercado%20Bmx%20Br"+ 
                        "%20-%20" + 
                        adData.categoria +
                        ",%20ainda%20est%C3%A1%20dispon%C3%ADvel?" } asChild>
                            <TouchableOpacity>
                                <Image style={{resizeMode:"contain"}} className="w-10 h-10" source={require('../../../public/icons/whatsapp.png')}></Image>
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
                                <Image style={{resizeMode:"contain"}} className="w-10 h-10" source={require('../../../public/icons/whatsapp.png')}></Image>
                            </TouchableOpacity>
                        </Link>
                        }
                        
                    </View>
                </View>
            </ScrollView>
            <BottomBar></BottomBar>
        </View>
    )
}