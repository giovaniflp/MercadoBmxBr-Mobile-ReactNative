import { View, Text, Image, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { Link } from "expo-router"
import { router } from "expo-router";
import axios from "axios"

export default function HomeAd({id}){

    const [adData, setAdData] = useState([])

    useEffect(() => {
        axios.get("http://10.31.89.114:3000/advertisement/" + id)
        .then((res) => {
            setAdData(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    , [])
    
    return(
            <TouchableOpacity className="border-2 border-black w-60 h-72 bg-white rounded-lg justify-center items-center mr-8" onPress={()=>{
                router.push({
                    pathname: "/FullAdScreen/[id]",
                    params: {
                        id: adData.id
                    }
                })
            }}>
                <Image style={{resizeMode:"contain"}} className="w-full h-40" source={{uri:adData.imagem}}></Image>
                <Text className="text-center">{adData.category} {adData.marca} {adData.modelo}</Text>
                <Text className="text-center">R${adData.preco}</Text>
                <View className="flex flex-row gap-4">
                    <Text className="text-cente">{adData.localidade}</Text>
                    <Text className="text-cente">{adData.dataPostagem}</Text>
                </View>
            </TouchableOpacity>
    )
}