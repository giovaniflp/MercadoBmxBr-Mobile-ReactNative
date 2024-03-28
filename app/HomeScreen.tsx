import { View, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import BottomBar from "./components/BottomBar";
import HomeAd from "./components/HomeAd";
import VerifiedStores from "./components/VerifiedStores";
import axios from "axios"

export default function HomeScreen() {

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

  return (
    <View className="flex h-full p-4">
      <View>
        <ScrollView className="flex">
          <View>
            <Text className="text-3xl">Lojas Verificadas</Text>
            <VerifiedStores></VerifiedStores>
          </View>
          <View className="mb-8">
            <Text className="text-3xl">Peças Novas</Text>
            <ScrollView horizontal={true}>
              <View className="flex flex-row">
                {adData.map((ad, index) => {
                  return <HomeAd id={ad.id} key={index}></HomeAd>
                }
                )}
              </View>
            </ScrollView>
          </View>
          <View className="mb-8">
            <Text className="text-3xl">Peças Usadas</Text>
            <ScrollView horizontal={true}>
            <View className="flex flex-row">
                {adData.map((ad, index) => {
                  return <HomeAd id={ad.id} key={index}></HomeAd>
                }
                )}
              </View>
            </ScrollView>
          </View>
          <View className="mb-8">
            <Text className="text-3xl">Peças para Doação</Text>
            <ScrollView horizontal={true}>
            <View className="flex flex-row">
                {adData.map((ad, index) => {
                  return <HomeAd id={ad.id} key={index}></HomeAd>
                }
                )}
              </View>
            </ScrollView>
          </View>
          <View className="mb-8">
            <Text className="text-3xl">Peças para Street</Text>
            <ScrollView horizontal={true}>
            <View className="flex flex-row">
                {adData.map((ad, index) => {
                  return <HomeAd id={ad.id} key={index}></HomeAd>
                }
                )}
              </View>
            </ScrollView>
          </View>
          <View className="mb-8">
            <Text className="text-3xl">Peças para Park</Text>
            <ScrollView horizontal={true}>
            <View className="flex flex-row">
                {adData.map((ad, index) => {
                  return <HomeAd id={ad.id} key={index}></HomeAd>
                }
                )}
              </View>
            </ScrollView>
          </View>
          <View className="mb-20">
            <Text className="text-3xl">Peças para Dirt</Text>
            <ScrollView horizontal={true}>
            <View className="flex flex-row">
                {adData.map((ad, index) => {
                  return <HomeAd id={ad.id} key={index}></HomeAd>
                }
                )}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <BottomBar></BottomBar>
    </View>
  );
}