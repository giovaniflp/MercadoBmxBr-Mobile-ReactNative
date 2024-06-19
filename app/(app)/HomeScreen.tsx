import HomeAd from "../components/HomeAd";
import axiosInstance from "../server/axios";
import BottomBar from "../components/BottomBar";
import * as SecureStore from 'expo-secure-store';
import { Picker } from "@react-native-picker/picker";
import { useCallback, useEffect, useState } from "react";
import VerifiedStores from "../components/VerifiedStores";
import { ActivityIndicator, MD2Colors  } from "react-native-paper";
import { View, Text, ScrollView, RefreshControl } from "react-native";

export default function HomeScreen() {

  const [adData, setAdData] = useState([])

  const [newTodayAds, setNewTodayAds] = useState([])
  const [usedTodayAds, setUsedTodayAds] = useState([])

  const [loading, setLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false);

  const [localidade, setLocalidade] = useState("São Paulo");

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

  const getAdsByLocalidade = async () => {
    setLoading(true)
    try{
      const token = await SecureStore.getItemAsync('session');
      await SecureStore.setItemAsync('localidade', localidade)
      setAdData([])
      const config = {
        headers: {
          Authorization: "Bearer " + token
        }
      }
      const response = await axiosInstance.post("/api/advertisements/localidade", {localidade:localidade}, config)
      setAdData(response.data.content)
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
      const localidade = await SecureStore.getItemAsync('localidade');
      const response = await axiosInstance.post("/api/advertisements/localidade", {localidade:localidade}, config)
      await SecureStore.setItemAsync('localidade', localidade)
      setAdData(response.data.content)
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

  useEffect(()=>{
    getAdsByLocalidade()
  },[localidade])

  useEffect(() => {
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
          <View className="mb-20">
            <View className="flex flex-row items-center mb-2">
              <Text className="text-xl px-4">Peças em</Text>
              <View className="w-60 border border-black rounded-md">
                <Picker selectedValue={localidade} onValueChange={setLocalidade}>
                  <Picker.Item label="Acre" value="Acre"></Picker.Item>
                  <Picker.Item label="Alagoas" value="Alagoas"></Picker.Item>
                  <Picker.Item label="Amapá" value="Amapá"></Picker.Item>
                  <Picker.Item label="Amazonas" value="Amazonas"></Picker.Item>
                  <Picker.Item label="Bahia" value="Bahia"></Picker.Item>
                  <Picker.Item label="Ceará" value="Ceará"></Picker.Item>
                  <Picker.Item label="Distrito Federal" value="Distrito Federal"></Picker.Item>
                  <Picker.Item label="Espírito Santo" value="Espírito Santo"></Picker.Item>
                  <Picker.Item label="Goiás" value="Goiás"></Picker.Item>
                  <Picker.Item label="Maranhão" value="Maranhão"></Picker.Item>
                  <Picker.Item label="Mato Grosso" value="Mato Grosso"></Picker.Item>
                  <Picker.Item label="Mato Grosso do Sul" value="Mato Grosso do Sul"></Picker.Item>
                  <Picker.Item label="Minas Gerais" value="Minas Gerais"></Picker.Item>
                  <Picker.Item label="Pará" value="Pará"></Picker.Item>
                  <Picker.Item label="Paraíba" value="Paraíba"></Picker.Item>
                  <Picker.Item label="Paraná" value="Paraná"></Picker.Item>
                  <Picker.Item label="Pernambuco" value="Pernambuco"></Picker.Item>
                  <Picker.Item label="Piauí" value="Piauí"></Picker.Item>
                  <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro"></Picker.Item>
                  <Picker.Item label="Rio Grande do Norte" value="Rio Grande do Norte"></Picker.Item>
                  <Picker.Item label="Rio Grande do Sul" value="Rio Grande do Sul"></Picker.Item>
                  <Picker.Item label="Rondônia" value="Rondônia"></Picker.Item>
                  <Picker.Item label="Roraima" value="Roraima"></Picker.Item>
                  <Picker.Item label="Santa Catarina" value="Santa Catarina"></Picker.Item>
                  <Picker.Item label="São Paulo" value="São Paulo"></Picker.Item>
                  <Picker.Item label="Sergipe" value="Sergipe"></Picker.Item>
                  <Picker.Item label="Tocantins" value="Tocantins"></Picker.Item>
                </Picker>
              </View>
            </View>
            <ScrollView className="mb-20" horizontal={true} showsHorizontalScrollIndicator={false}>
            <View className="flex flex-row px-4 py-2">
            {loading && <ActivityIndicator className="ml-32 mb-20" animating={true} color={MD2Colors.purpleA700} size={100}></ActivityIndicator>}
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