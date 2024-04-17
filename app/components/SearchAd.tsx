import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router"
import { router } from "expo-router";
import axiosInstance from "../server/axios";
import * as SecureStore from 'expo-secure-store';

export default function HomeAd({id} : {id: string}){

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
            <TouchableOpacity className="border-2 border-black w-40 h-52 bg-white rounded-lg justify-center items-center mx-2 my-2" onPress={()=>{
                router.push({
                    pathname: "/FullAdScreen/[id]",
                    params: {
                        id: adData.id
                    }
                })
            }}>
                <Image style={{resizeMode:"contain"}} className="w-full h-20" source={{uri:adData.imagem}}></Image>
                {adData.marca == "OUTRA MARCA" ? <Text className="text-center text-xs">{adData.categoria} {adData.modelo}</Text> : <Text className="text-center text-xs">{adData.categoria} {adData.marca} {adData.modelo}</Text>}
                <Text className="text-center text-xs">R${adData.preco}</Text>
                <View className="flex flex-row gap-4">
                    <Text className="text-cente text-xs">{adData.localidade}</Text>
                    <Text className="text-cente text-xs">{adData.dataPostagem}</Text>
                </View>
            </TouchableOpacity>
    )
}