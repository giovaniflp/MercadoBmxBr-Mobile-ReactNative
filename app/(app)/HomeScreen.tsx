import { View, Text, ScrollView, RefreshControl } from "react-native";
import { useCallback, useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";
import HomeAd from "../components/HomeAd";
import VerifiedStores from "../components/VerifiedStores";
import axiosInstance from "../server/axios";
import * as SecureStore from 'expo-secure-store';
import { ActivityIndicator, MD2Colors  } from "react-native-paper";

export default function HomeScreen() {

  const [adData, setAdData] = useState([])

  const [newTodayAds, setNewTodayAds] = useState([])
  const [usedTodayAds, setUsedTodayAds] = useState([])

  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false);

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

const getNewTodayAds = async () => {
  setLoading(true)
  try{
    const token = await SecureStore.getItemAsync('session');
    const config = {
      headers: {
        Authorization: "Bearer " + token
      }
    }
    const response = await axiosInstance.post("/api/advertisements/dataPostagem/estadoDaPeca", {estadoDaPeca:"Novo"},  config)
    setNewTodayAds(response.data.content)
  } catch (error) {
    console.log(error)
  } finally{
    setLoading(false)
  }
}

const getNewUsedTodayAds = async () => {
  setLoading(true)
  try{
    const token = await SecureStore.getItemAsync('session');
    const config = {
      headers: {
        Authorization: "Bearer " + token
      }
    }
    const response = await axiosInstance.post("/api/advertisements/dataPostagem/estadoDaPeca", {estadoDaPeca:"Usado"},  config)
    setUsedTodayAds(response.data.content)
  } catch (error) {
    console.log(error)
  } finally{
    setLoading(false)
  }
}

const refreshData = async () => {
  setAdData([])
  setNewTodayAds([])
  setUsedTodayAds([])
  try{
      const token = await SecureStore.getItemAsync('session');
    const config = {
      headers: {
        Authorization: "Bearer " + token
      }
    }
    const response = await axiosInstance.get("/api/advertisements/all", config)
    setAdData(response.data)
    const response2 = await axiosInstance.post("/api/advertisements/dataPostagem/estadoDaPeca", {estadoDaPeca:"Novo"},  config)
    setNewTodayAds(response2.data.content)
    const response3 = await axiosInstance.post("/api/advertisements/dataPostagem/estadoDaPeca", {estadoDaPeca:"Usado"},  config)
    setUsedTodayAds(response3.data.content)
  } catch (error) {
    console.log(error)
  } 
}

const refreshScreen = useCallback(()=>{
  setRefreshing(true);
  refreshData().then(()=>setRefreshing(false))
},[])

  useEffect(() => {
    getAds();
    getNewTodayAds();
    getNewUsedTodayAds();
  }, [])

  return (
    <View className="flex h-full pt-8 bg-white">
      {loading && <ActivityIndicator className="absolute top-0 left-0 right-0 bottom-0" animating={true} color={MD2Colors.purpleA700} size={100}></ActivityIndicator>}
      <View>
        <ScrollView className="flex" refreshControl={<RefreshControl refreshing={refreshing} onRefresh={refreshScreen} />}>
          <View>
            <Text className="text-3xl px-4 pt-4">Lojas Verificadas</Text>
            <VerifiedStores></VerifiedStores>
          </View>
          <View className="mb-8">
            <Text className="text-xl px-4">Peças novas postadas recentemente</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View className="flex flex-row px-4 py-2">
                {newTodayAds.map((ad, index) => {
                  return <HomeAd id={ad.id} key={index}></HomeAd>
                }
                )}
              </View>
            </ScrollView>
          </View>
          <View className="mb-8">
            <Text className="text-xl px-4">Peças usadas postadas recentemente</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row px-4 py-2">
                {usedTodayAds.map((ad, index) => {
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