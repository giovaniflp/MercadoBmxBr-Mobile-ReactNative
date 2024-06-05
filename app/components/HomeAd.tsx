import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router"
import { router } from "expo-router";
import axiosInstance from "../server/axios";
import * as SecureStore from 'expo-secure-store';
import { Card } from "react-native-paper";
import { format } from 'date-fns';

export default function HomeAd({id} : {id: string}){

    const [adData, setAdData] = useState([])

    const[formatDate, setFormatDate] = useState("")
    const[formatHour, setFormatHour] = useState("")
    
    const getAdData = async () => {
        const token = await SecureStore.getItemAsync('session');
        const config = {
        headers: {
            Authorization: "Bearer " + token
        }
        }
        const response = await axiosInstance.get("/api/advertisements/" + id, config)
        setFormatDate(format(new Date(response.data.dataPostagem), 'dd/MM/yyyy'))
        setFormatHour(format(new Date(response.data.dataPostagem), 'HH:mm'))
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
                    <Image style={{resizeMode:"cover"}} className="w-full h-56 rounded-t-lg" source={{uri:adData.imagem}}></Image>
                    <View className="flex mt-4">
                        <Text className="text-center text-purple-700 text-lg">R${adData.preco}</Text>
                        {adData.marca == "OUTRA MARCA" ? <Text className="text-center text-lg">{adData.categoria}</Text> : <Text className="text-center text-lg">{adData.categoria} {adData.marca}</Text>}
                        <View className="flex flex-col justify-center my-2">
                            <Text className="text-center text-yellow-500">{adData.localidade}</Text>
                            <Text className="text-center">{formatDate} às {formatHour}</Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
    )
}