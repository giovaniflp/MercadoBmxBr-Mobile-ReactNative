import { View, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";
import HomeAd from "../components/HomeAd";
import VerifiedStores from "../components/VerifiedStores";
import axiosInstance from "../server/axios";
import * as SecureStore from 'expo-secure-store';
import { ActivityIndicator, MD2Colors  } from "react-native-paper";

export default function HomeScreen() {

  const [adData, setAdData] = useState([])

  const [loading, setLoading] = useState(false)

  const getAds = async () => {
    setLoading(true)
    try{
        const token = await SecureStore.getItemAsync('session');
      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      }
      const response = await axiosInstance.get("/api/advertisements/all", config)
      setAdData(response.data)
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
    
}

  useEffect(() => {
    getAds();
  }, [])

  return (
    <View className="flex h-full pt-8 bg-white">
      {loading && <ActivityIndicator className="absolute top-0 left-0 right-0 bottom-0" animating={true} color={MD2Colors.purpleA700} size={100}></ActivityIndicator>}
      <View>
        <ScrollView className="flex">
          <View>
            <Text className="text-3xl px-4 pt-4">Lojas Verificadas</Text>
            <VerifiedStores></VerifiedStores>
          </View>
          <View className="mb-8">
            <Text className="text-3xl px-4">Peças Novas</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View className="flex flex-row px-4 py-2">
                {adData.map((ad, index) => {
                  return <HomeAd id={ad.id} key={index}></HomeAd>
                }
                )}
              </View>
            </ScrollView>
          </View>
          <View className="mb-8">
            <Text className="text-3xl px-4">Peças Usadas</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row px-4 py-2">
                {adData.map((ad, index) => {
                  return <HomeAd id={ad.id} key={index}></HomeAd>
                }
                )}
              </View>
            </ScrollView>
          </View>
          <View className="mb-8">
            <Text className="text-3xl px-4">Peças para Street</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row px-4 py-2">
                {adData.map((ad, index) => {
                  return <HomeAd id={ad.id} key={index}></HomeAd>
                }
                )}
              </View>
            </ScrollView>
          </View>
          <View className="mb-8">
            <Text className="text-3xl px-4">Peças para Park</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row px-4 py-2">
                {adData.map((ad, index) => {
                  return <HomeAd id={ad.id} key={index}></HomeAd>
                }
                )}
              </View>
            </ScrollView>
          </View>
          <View className="mb-20">
            <Text className="text-3xl px-4">Peças para Dirt</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row px-4 py-2">
                {adData.map((ad, index) => {
                  return <HomeAd id={ad.id} key={index}></HomeAd>
                }
                )}
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <BottomBar screen="HomeScreen"></BottomBar>
    </View>
  );
}