import { View, Image, Text } from "react-native";
import * as SecureStore from 'expo-secure-store';
import axiosInstance from "../server/axios";
import { useEffect, useState } from "react";

export default function adDataAd({id} : {id: string}){
    
    const [adData, setAdData] = useState([])

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

    useEffect(() => {
        getAdData();
    }
    , [])

    return(
        <View className="bg-red-700 m-1 p-2 flex flex-row justify-between items-center rounded-lg">
                                    <View className="flex flex-row">
                                        <View>
                                            <Image style={{resizeMode:"cover"}} source={{uri:adData.imagem}} className="w-24 h-24 rounded-lg"></Image>
                                        </View>
                                        {adData.marca == "OUTRA MARCA" 
                                        ? <View className="flex justify-center ml-2">
                                        <Text className="text-white text-lg mb-2">{adData.categoria}</Text>
                                        <Text className="text-yellow-300 font-bold mb-2">Preço: R${adData.preco}</Text>
                                        <Text className="text-white">Postagem: {adData.dataPostagem}</Text>
                                        <Text className="text-white">Localidade: {adData.localidade}</Text>
                                    </View> : <View className="flex justify-center ml-2">
                                            <Text className="text-white text-lg mb-2">{adData.categoria} {adData.marca}</Text>
                                            <Text className="text-yellow-300 font-bold mb-2">R$ {adData.preco}</Text>
                                            <Text className="text-white">Postagem: {adData.dataPostagem}</Text>
                                            <Text className="text-white">Localidade: {adData.localidade}</Text>
                                        </View>} 
                                    </View>
                                    <View>
                                    </View>
                                </View>
    )
}