import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router"
import { router } from "expo-router";
import axiosInstance from "../server/axios";
import * as SecureStore from 'expo-secure-store';
import { Card } from "react-native-paper";

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
            <TouchableOpacity className="w-60 h-96 rounded-lg justify-center items-center mr-8" onPress={()=>{
                router.push({
                    pathname: "/FullAdScreen/[id]",
                    params: {
                        id: adData.id
                    }
                })
            }}>
                <Card mode="elevated" className="w-60 h-96">
                    <Image style={{resizeMode:"cover"}} className="w-full h-60 rounded-t-lg" source={{uri:adData.imagem}}></Image>
                    <View className="flex m-9">
                        <Text className="text-center text-purple-700 text-lg">R${adData.preco}</Text>
                        {adData.marca == "OUTRA MARCA" ? <Text className="text-center text-lg">{adData.categoria} {adData.modelo}</Text> : <Text className="text-center text-lg">{adData.categoria} {adData.marca} {adData.modelo}</Text>}
                        <View className="flex flex-row gap-4 justify-center">
                            <Text className="text-center">{adData.localidade}</Text>
                            <Text className="text-center">{adData.dataPostagem}</Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
    )
}