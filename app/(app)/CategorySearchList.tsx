import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import axiosInstance from "../server/axios";
import * as SecureStore from 'expo-secure-store';
import HomeAd from "../components/HomeAd";

export default function CategorySearchList(){
    const { category } = useLocalSearchParams()

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
    })

    return(
        <View className="mt-12 p-2">
            <Text>Categoria {category}</Text>
            <ScrollView>
                <View className="flex flex-row flex-wrap">
                    {adData.map((ad, index) => {
                        return <HomeAd id={ad.id} key={index}></HomeAd>
                    }
                    )}
                </View>
            </ScrollView>
        </View>
    )
}