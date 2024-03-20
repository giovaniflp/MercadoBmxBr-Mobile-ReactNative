import { View, TextInput } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios"
import BottomBar from "./components/BottomBar";
import HomeAd from "./components/HomeAd";
import { Link } from "expo-router"

export default function SearchScreen(){

    const [adData, setAdData] = useState([])

  useEffect(() => {
    axios.get("http://10.31.89.114:3000/advertisement/")
    .then((res) => {
      setAdData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

    return(
        <View className="flex h-full mt-8 p-4">
            <TextInput className="border-2 border-black p-1 rounded-lg mb-4" placeholder="Buscar"></TextInput>
            <View className="flex flex-row">
                {adData.map((ad, index) => {
                  return <HomeAd id={ad.id} key={index}></HomeAd>
                }
                )}
              </View>
            <BottomBar></BottomBar>
        </View>
    )
}