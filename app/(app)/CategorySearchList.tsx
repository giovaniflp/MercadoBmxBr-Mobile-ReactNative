import { router, useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import axiosInstance from "../server/axios";
import * as SecureStore from 'expo-secure-store';
import HomeAd from "../components/HomeAd";
import BottomBar from "../components/BottomBar";
import { Picker } from "@react-native-picker/picker";
import { ActivityIndicator, Button, MD2Colors  } from "react-native-paper";
import { format } from 'date-fns';


export default function CategorySearchList(){
    
    const { category } = useLocalSearchParams()

    const[formatDate, setFormatDate] = useState("")
    const[formatHour, setFormatHour] = useState("")
    
    const [adData, setAdData] = useState([])
    const [modal, setModal] = useState(false)
    const [localidade, setLocalidade] = useState(null)
    const [estadoDaPeca, setEstadoDaPeca] = useState(null)
    const [dataPostagem, setDataPostagem] = useState(null)
    const [marca, setMarca] = useState(null)

    const [valor, setValor] = useState(null)

    const [loading, setLoading] = useState(false)

    const [page, setPage] = useState(0)

const addPage = async () => {
    const token = await SecureStore.getItemAsync('session');
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }

    const newPage = page + 1; // Calcular o novo valor de page
    setPage(newPage) // Atualizar o estado

    if(localidade == null && estadoDaPeca == null && valor == null && dataPostagem == null){
        setAdData([])
        const response = await axiosInstance.get(`/api/advertisements/category/${category}?page=${newPage}&size=10` , config)
        if(response.data.content.length == 0){
            alert("Não há mais páginas disponíveis")
            setPage(page)
            setAdData(response.data.content)
        } else{
            setAdData(response.data.content)
        }
    } else{
        setAdData([])
        const response = await axiosInstance.get(`/api/advertisements/pagination?categoria=${category}&page=${newPage}&size=10&sortBy=preco&asc=false`, config)
        if(response.data.content.length == 0){
            alert("Não há mais páginas disponíveis")
            setPage(page)
            setAdData(response.data.content)
        } else{
            setAdData(response.data.content)
        }
    }

}

const subPage = async () => {
    const token = await SecureStore.getItemAsync('session');
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }

    if (page == 0) {
        alert("Não há mais páginas anteriores")
        setPage(0)
    } else {
        const newPage = page - 1; // Calcular o novo valor de page
        setPage(newPage) // Atualizar o estado

        if(localidade == null && estadoDaPeca == null && valor == null && dataPostagem == null){
            setAdData([])
            const response = await axiosInstance.get(`/api/advertisements/category/${category}?page=${newPage}&size=10` , config).then(response => {
                response.data.content.map((ad) => {
                    const formatdate = format(new Date(ad.dataPostagem), "dd/MM/yyyy 'às' HH:mm")
                    ad.dataPostagem = formatdate;
                }
                )
                setAdData(response.data.content)
            })
        } else{
            setAdData([])
            await axiosInstance.get(`/api/advertisements/pagination?categoria=${category}&page=${newPage}&size=10&sortBy=preco&asc=false`, config).then(response => {
                response.data.content.map((ad) => {
                    const formatdate = format(new Date(ad.dataPostagem), "dd/MM/yyyy 'às' HH:mm")
                    ad.dataPostagem = formatdate;
                }
                )
                setAdData(response.data.content)
            })
        }

    }
}


    const toggleModal = () => {
        setModal(!modal)
    }

    const getAds = async () => {
        setLoading(true)
        try{
            const token = await SecureStore.getItemAsync('session');
        const config = {
            headers: {
            Authorization: "Bearer " + token
            }
        }
        await axiosInstance.get(`/api/advertisements/category/${category}?page=0&size=10` , config).then(response => {
            response.data.content.map((ad) => {
                const formatdate = format(new Date(ad.dataPostagem), "dd/MM/yyyy 'às' HH:mm")
                ad.dataPostagem = formatdate;
            }
            )
            setAdData(response.data.content)
        })
        }
        catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
        
    }

    const removefilter = () => {
        setLocalidade(null)
        setEstadoDaPeca(null)
        setModal(false)
        getAds();
    }

    useEffect(() => {
        getAds();
    }, [])

    const filter = async () => {
        setLoading(true)
        try{
            const token = await SecureStore.getItemAsync('session');
            const config = {
                headers: {
                Authorization: "Bearer " + token
                }
            }
            if(localidade != null && estadoDaPeca == null){
                console.log(localidade)
                const response = await axiosInstance.get("/api/advertisements/category/" + category + "/localidade/" + localidade, config)
                setAdData(response.data)
                console.log(adData)
            } else if (localidade == null && estadoDaPeca != null){
                const response = await axiosInstance.get("/api/advertisements/category/" + category + "/estadoDaPeca/" + estadoDaPeca, config)
                console.log(response.data)
                setAdData(response.data)
            } else if (localidade != null && estadoDaPeca != null){
                const response = await axiosInstance.get("/api/advertisements/category/" + category + "/localidade/" + localidade + "/estadoDaPeca/" + estadoDaPeca, config)
                console.log(response.data)
                setAdData(response.data)
            }
            else if(valor != null){
                if(valor == "Menor Valor"){
                    const response = await axiosInstance.get("/api/advertisements/pagination?categoria=" + category + "&page=" + page + "&size=10&sortBy=preco&asc=true", config)
                    setAdData(response.data.content)
                } else if(valor == "Maior Valor"){
                    const response = await axiosInstance.get("/api/advertisements/pagination?categoria=" + category + "&page=" + page + "&size=10&sortBy=preco&asc=false", config)
                    setAdData(response.data.content)
                }
            } else {
                alert("Selecione um filtro")
            }
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
            setModal(false)
        }
    }

    return(
        <View className="pt-8 h-full">
            {loading && <ActivityIndicator className="absolute top-0 left-0 right-0 bottom-0" animating={true} color={MD2Colors.purpleA700} size={50}></ActivityIndicator>}
            <Text className="text-2xl mx-2 mb-4">Categoria - {category}</Text>
            <TouchableOpacity onPress={toggleModal} className="bg-black p-3 m-1 rounded-lg">
                <Text className="text-center text-white">Filtros</Text>
            </TouchableOpacity>
            {modal && <View className="flex flex-row items-center justify-center gap-4 p-4">
                <View>
                    <View className="border bg-purple-100 border-black rounded-md w-60 mb-2">
                        <Picker selectedValue={estadoDaPeca} onValueChange={(value)=>setEstadoDaPeca(value)}>
                            <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                            <Picker.Item label="Usado" value="Usado"></Picker.Item>
                            <Picker.Item label="Novo" value="Novo"></Picker.Item>
                        </Picker>
                    </View>
                    <View className="border bg-purple-100 border-black rounded-md w-60">
                        <Picker selectedValue={valor} onValueChange={(value)=>setValor(value)}>
                            <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                            <Picker.Item label="Menor Valor" value="Menor Valor"></Picker.Item>
                            <Picker.Item label="Maior Valor" value="Maior Valor"></Picker.Item>
                        </Picker>
                    </View>
                    <View className="border bg-purple-100 border-black rounded-md w-60 mt-2">
                        <Picker selectedValue={localidade} onValueChange={(value)=>setLocalidade(value)}>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Acre" value="Acre"></Picker.Item>
                                <Picker.Item label="Alagoas" value="Alagoas"></Picker.Item>
                                <Picker.Item label="Amapá" value="Amapá"></Picker.Item>
                                <Picker.Item label="Amazonas" value="Amazonas"></Picker.Item>
                                <Picker.Item label="Bahia" value="Bahia"></Picker.Item>
                                <Picker.Item label="Ceará" value="Ceará"></Picker.Item>
                                <Picker.Item label="Distrito Federal" value="Distrito Federal"></Picker.Item>
                                <Picker.Item label="Espírito Santo" value="Espírito Santo"></Picker.Item>
                                <Picker.Item label="Goiás" value="Goiás"></Picker.Item>
                                <Picker.Item label="Maranhão" value="Maranhão"></Picker.Item>
                                <Picker.Item label="Mato Grosso" value="Mato Grosso"></Picker.Item>
                                <Picker.Item label="Mato Grosso do Sul" value="Mato Grosso do Sul"></Picker.Item>
                                <Picker.Item label="Minas Gerais" value="Minas Gerais"></Picker.Item>
                                <Picker.Item label="Pará" value="Pará"></Picker.Item>
                                <Picker.Item label="Paraíba" value="Paraíba"></Picker.Item>
                                <Picker.Item label="Paraná" value="Paraná"></Picker.Item>
                                <Picker.Item label="Pernambuco" value="Pernambuco"></Picker.Item>
                                <Picker.Item label="Piauí" value="Piauí"></Picker.Item>
                                <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro"></Picker.Item>
                                <Picker.Item label="Rio Grande do Norte" value="Rio Grande do Norte"></Picker.Item>
                                <Picker.Item label="Rio Grande do Sul" value="Rio Grande do Sul"></Picker.Item>
                                <Picker.Item label="Rondônia" value="Rondônia"></Picker.Item>
                                <Picker.Item label="Roraima" value="Roraima"></Picker.Item>
                                <Picker.Item label="Santa Catarina" value="Santa Catarina"></Picker.Item>
                                <Picker.Item label="São Paulo" value="São Paulo"></Picker.Item>
                                <Picker.Item label="Sergipe" value="Sergipe"></Picker.Item>
                                <Picker.Item label="Tocantins" value="Tocantins"></Picker.Item>
                            </Picker>
                    </View>
                    <View className="border bg-purple-100 border-black rounded-md w-60 mt-2">
                        <Picker selectedValue={dataPostagem} onValueChange={(value)=>{setDataPostagem(value)}}>
                            <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                            <Picker.Item label="Anúncios mais recentes" value="Anúncios mais recentes"></Picker.Item>
                            <Picker.Item label="Anúncios mais antigos" value="Anúncios mais antigos"></Picker.Item>
                        </Picker>
                    </View>
                    <View className="border bg-purple-100 border-black rounded-md w-60 mt-2">

                    <Picker selectedValue={marca} onValueChange={setMarca}>
                            <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                            <Picker.Item label="OUTRA MARCA" value="OUTRA MARCA" />
                            <Picker.Item label="Animal" value="Animal" />
                            <Picker.Item label="BSD" value="BSD" />
                            <Picker.Item label="Cinema" value="Cinema" />
                            <Picker.Item label="Colony" value="Colony" />
                            <Picker.Item label="Cult" value="Cult" />
                            <Picker.Item label="Demolition" value="Demolition" />
                            <Picker.Item label="Division" value="Division" />
                            <Picker.Item label="Drb" value="Drb" />
                            <Picker.Item label="Eclat" value="Eclat" />
                            <Picker.Item label="Federal" value="Federal" />
                            <Picker.Item label="Fiend" value="Fiend" />
                            <Picker.Item label="FitBikeCo" value="FitBikeCo" />
                            <Picker.Item label="Fly" value="Fly" />
                            <Picker.Item label="G-Sport" value="G-Sport" />
                            <Picker.Item label="Gios" value="Gios" />
                            <Picker.Item label="Haro" value="Haro" />
                            <Picker.Item label="Kink" value="Kink" />
                            <Picker.Item label="Magic Flute" value="Magic Flute" />
                            <Picker.Item label="Master Bikes" value="Master Bikes" />
                            <Picker.Item label="Merrit" value="Merrit" />
                            <Picker.Item label="Mob" value="Mob" />
                            <Picker.Item label="Odyssey" value="Odyssey" />
                            <Picker.Item label="Polso" value="Polso" />
                            <Picker.Item label="Primo" value="Primo" />
                            <Picker.Item label="Profile" value="Profile" />
                            <Picker.Item label="Pro-X" value="Pro-X" />
                            <Picker.Item label="Sunday" value="Sunday" />
                            <Picker.Item label="United" value="United" />
                            <Picker.Item label="Volume" value="Volume" />
                            <Picker.Item label="We The People" value="We The People" />
                        </Picker>
                    </View>
                </View>
                <View className="flex flex-col">
                    <TouchableOpacity onPress={filter} className="bg-green-500 p-3 rounded-lg w-32 mb-2">
                        <Text className="text-center">Pesquisar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={removefilter} className="bg-red-500 p-3 rounded-lg w-32 mt-2">
                        <Text className="text-center">Remover Filtros</Text>
                    </TouchableOpacity>
                </View>
            </View>}
            <ScrollView className="mb-14" showsVerticalScrollIndicator={false}>
                <View className="flex">
                    {
                    adData.length > 0 ? (
                        adData.map((ad, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={()=>{
                                    router.push({
                                        pathname: "/FullAdScreen/[id]",
                                        params: {
                                            id: ad.id
                                        }
                                    })
                                }}>
                                    <View className="bg-purple-700 m-1 p-2 flex flex-row justify-between items-center rounded-lg">
                                        <View className="flex flex-row">
                                            <View>
                                                <Image style={{resizeMode:"cover"}} source={{uri:ad.imagem}} className="w-32 h-32 rounded-lg"></Image>
                                            </View>
                                            {ad.marca == "OUTRA MARCA" 
                                            ? <View className="flex justify-center ml-2">
                                            <Text className="text-white text-xs font-black mb-2">{ad.categoria}</Text>
                                            <Text className="text-yellow-300">{ad.localidade}</Text>
                                            <Text className="text-white">{ad.dataPostagem}</Text>
                                            <Text className="text-yellow-300 mt-4 font-bold">R$ {ad.preco}</Text>
                                        </View> : <View className="flex justify-center ml-2">
                                                <Text className="text-white text-xs font-black mb-2">{ad.categoria} {ad.marca}</Text>
                                                <Text className="text-yellow-300">{ad.localidade}</Text>
                                                <Text className="text-white">{ad.dataPostagem}</Text>
                                                <Text className="text-yellow-300 mt-4 font-bold">R$ {ad.preco}</Text>
                                            </View>} 
                                        </View>
                                        
                                    </View>
                                </TouchableOpacity>
                        )
                        }
                        )
                    ) : (
                        <Text>Não há anúncios nessa categoria.</Text>
                    )
                    }
                </View>
                <View className="flex flex-row justify-center items-center my-4">
                    <TouchableOpacity className="bg-purple-700 rounded-full w-10 h-10 flex justify-center items-center" onPress={subPage}>
                        <Text className="text-white font-extrabold">-</Text>
                    </TouchableOpacity>
                    <Text className="mx-5 text-xl">Página {page + 1}</Text>
                    <TouchableOpacity className="bg-purple-700 rounded-full w-10 h-10 flex justify-center items-center" onPress={addPage}>
                        <Text className="text-white font-extrabold">+</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <BottomBar screen="CategoryScreen"></BottomBar>
        </View>
    )
}