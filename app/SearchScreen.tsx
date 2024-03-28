import { View, TextInput, ScrollView } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios"
import BottomBar from "./components/BottomBar";
import SearchAd from "./components/SearchAd";
import axiosInstance from "./server/axios";

export default function SearchScreen(){

    const [adData, setAdData] = useState([])

  useEffect(() => {
    axiosInstance.get("/advertisement")
    .then((res) => {
      setAdData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

    return(
        <View className="flex h-full p-4">
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