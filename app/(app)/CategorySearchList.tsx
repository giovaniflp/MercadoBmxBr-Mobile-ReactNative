import { router, useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import axiosInstance from "../server/axios";
import * as SecureStore from 'expo-secure-store';
import HomeAd from "../components/HomeAd";
import BottomBar from "../components/BottomBar";
import { Picker } from "@react-native-picker/picker";
import { ActivityIndicator, MD2Colors  } from "react-native-paper";

export default function CategorySearchList(){
    
    const { category } = useLocalSearchParams()
    
    const [adData, setAdData] = useState([])
    const [modal, setModal] = useState(false)
    const [localidade, setLocalidade] = useState(null)
    const [estadoDaPeca, setEstadoDaPeca] = useState(null)

    const [loading, setLoading] = useState(false)

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
        const response = await axiosInstance.get("/api/advertisements/category/" + category , config)
        setAdData(response.data)
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
        getAds();
    
    }

    useEffect(() => {
        getAds();
    }, [])

    useEffect(() => {
        console.log(adData) 
    },[adData])

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
            } else {
                alert("Selecione um filtro")
            }
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    return(
        <View className="pt-12 h-full">
            {loading && <ActivityIndicator className="absolute top-0 left-0 right-0 bottom-0" animating={true} color={MD2Colors.purpleA700} size={50}></ActivityIndicator>}
            <Text className="text-2xl">Categoria - {category}</Text>
            <TouchableOpacity onPress={toggleModal} className="bg-black p-3 m-2 rounded-lg">
                <Text className="text-center text-white">Filtros</Text>
            </TouchableOpacity>
            {modal && <View className="flex flex-row items-center justify-center gap-4 p-4">
                <View>
                    <View className="border-2 border-black rounded-lg w-60 mb-2">
                        <Picker selectedValue={estadoDaPeca} onValueChange={(value)=>setEstadoDaPeca(value)}>
                            <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                            <Picker.Item label="Usado" value="Usado"></Picker.Item>
                            <Picker.Item label="Novo" value="Novo"></Picker.Item>
                        </Picker>
                    </View>
                    <View className="border-2 border-black rounded-lg w-60 mt-2">
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
                </View>
                {/* <View className="border-2 border-black rounded-lg w-60">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Maior Preço" value="Maior Preço"></Picker.Item>
                        <Picker.Item label="Menor Preço" value="Menor Preço"></Picker.Item>
                    </Picker>
                </View>
                <View className="border-2 border-black rounded-lg w-60">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Postagem recente" value="Postagem Recente"></Picker.Item>
                        <Picker.Item label="Postagem mais antiga" value="Postagem Mais Antiga"></Picker.Item>
                    </Picker>
                </View> */}
                <View className="flex flex-col">
                    <TouchableOpacity onPress={filter} className="bg-green-500 p-3 rounded-lg w-32 mb-2">
                        <Text className="text-center">Pesquisar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={removefilter} className="bg-red-500 p-3 rounded-lg w-32 mt-2">
                        <Text className="text-center">Remover Filtros</Text>
                    </TouchableOpacity>
                </View>
            </View>}
            <ScrollView>
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
                                            <Text className="text-white">{ad.categoria}</Text>
                                            <Text className="text-white">Estado: {ad.localidade}</Text>
                                            <Text className="text-white">Postagem: {ad.dataPostagem}</Text>
                                            <Text className="text-yellow-300 mt-4 font-bold">Preço: R${ad.preco}</Text>
                                        </View> : <View className="flex justify-center ml-2">
                                                <Text className="text-white">{ad.categoria} {ad.marca}</Text>
                                                <Text className="text-white">Estado: {ad.localidade}</Text>
                                                <Text className="text-white">Postagem: {ad.dataPostagem}</Text>
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
            </ScrollView>
            <BottomBar></BottomBar>
        </View>
    )
}