import { useLocalSearchParams } from "expo-router";
import { View, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import axiosInstance from "../../server/axios";
import * as SecureStore from 'expo-secure-store';

export default function EditAdScreen(){

    const { ad } = useLocalSearchParams()

    const getAdData = async () => {
        const token = await SecureStore.getItemAsync('session');
        const config = {
          headers: {
            Authorization: "Bearer " + token
          }
        }
        const response = await axiosInstance.get("/api/advertisements/" + ad, config)
        setAdData(response.data)
    }

    useEffect(()=>{
        getAdData()
    },[])

    const [adData, setAdData] = useState([])

    return(
        <View className="flex mt-12">
            <Text>Edit Ad Screen</Text>
            <Image source={{uri: adData.imagem}} className="w-40 h-40"></Image>
            <Text>{adData.id}</Text>
        </View>
    )
}