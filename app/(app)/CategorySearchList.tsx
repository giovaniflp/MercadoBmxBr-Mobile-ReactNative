import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import axiosInstance from "../server/axios";
import * as SecureStore from 'expo-secure-store';
import HomeAd from "../components/HomeAd";
import BottomBar from "../components/BottomBar";
import { Picker } from "@react-native-picker/picker";

export default function CategorySearchList(){
    
    const { category } = useLocalSearchParams()

    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }

    const [localidade, setLocalidade] = useState(null)
    const [estadoDaPeca, setEstadoDaPeca] = useState(null)

    const [adData, setAdData] = useState([])

    const getAds = async () => {
        const token = await SecureStore.getItemAsync('session');
        const config = {
            headers: {
            Authorization: "Bearer " + token
            }
        }
        const response = await axiosInstance.get("/api/advertisements/category/" + category , config)
        setAdData(response.data)
    }

    useEffect(() => {
        getAds();
    }, [])

    useEffect(() => {
        
    },[adData])

    const filter = async () => {
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
            console.log(response.data)
        } else if (localidade == null && estadoDaPeca != null){
            const response = await axiosInstance.get("/api/advertisements/category/" + category + "/estadoDaPeca/" + estadoDaPeca, config)
            console.log(response.data)
            setAdData(response.data)
        } else if (localidade != null && estadoDaPeca != null){
            const response = await axiosInstance.get("/api/advertisements/category/" + category + "/localidade/" + localidade + "/estadoDaPeca/" + estadoDaPeca, config)
            console.log(response.data)
            setAdData(response.data)
        } else {
            const response = await axiosInstance.get("/api/advertisements/category/" + category, config)
            setAdData(response.data)
        }
    }

    return(
        <View className="pt-12 h-full">
            <Text>Categoria {category}</Text>
            <TouchableOpacity onPress={toggleModal} className="bg-blue-500 p-3 m-2 rounded-lg">
                <Text className="text-center">Adicionar filtros</Text>
            </TouchableOpacity>
            {modal && <View className="flex flex-col items-center justify-center">
                <View className="border-2 border-black rounded-lg w-60">
                    <Picker selectedValue={estadoDaPeca} onValueChange={(value)=>setEstadoDaPeca(value)}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Usado" value="Usado"></Picker.Item>
                        <Picker.Item label="Novo" value="Novo"></Picker.Item>
                    </Picker>
                </View>
                <View className="border-2 border-black rounded-lg w-60">
                    <Picker selectedValue={localidade} onValueChange={setLocalidade}>
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
                <TouchableOpacity onPress={filter} className="bg-green-500 p-3 m-2 rounded-lg">
                    <Text className="text-center">Pesquisar</Text>
                </TouchableOpacity><TouchableOpacity onPress={toggleModal} className="bg-red-500 p-3 m-2 rounded-lg">
                    <Text className="text-center">Fechar</Text>
                </TouchableOpacity>
            </View>}
            <ScrollView>
                <View className="flex flex-row flex-wrap">
                    {adData.map((ad, index) => {
                        return <HomeAd id={ad.id} key={index}></HomeAd>
                    }
                    )}
                </View>
            </ScrollView>
            <BottomBar></BottomBar>
        </View>
    )
}