import { View, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios"
import BottomBar from "../components/BottomBar";
import SearchAd from "../components/SearchAd";
import axiosInstance from "../server/axios";
import * as SecureStore from 'expo-secure-store';

export default function SearchScreen(){

    const [adData, setAdData] = useState([])

    const getAds = async () => {
      const token = await SecureStore.getItemAsync('session');
      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      }
      const response = await axiosInstance.get("/api/advertisements/all", config)
      setAdData(response.data)
  }
  
    useEffect(() => {
      getAds();
    })

    return(
        <View className="flex h-full p-4 pt-10">
            <TextInput className="border-2 border-black p-1 rounded-lg mb-4" placeholder="Buscar"></TextInput>
            <ScrollView className="mb-12" showsVerticalScrollIndicator={false}>
              <View className="flex flex-row flex-wrap justify-center">
                  {adData.map((ad, index) => {
                    return <SearchAd id={ad.id} key={index}></SearchAd>
                  }
                  )}
                </View>
            </ScrollView>
            <BottomBar></BottomBar>
        </View>
    )
}