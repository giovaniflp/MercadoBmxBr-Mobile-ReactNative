import { format } from 'date-fns';
import {router } from "expo-router";
import { useState, useEffect } from "react";
import axiosInstance from "../server/axios";
import BottomBar from "../components/BottomBar";
import * as SecureStore from 'expo-secure-store';
import { ActivityIndicator, MD2Colors  } from "react-native-paper";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";


export default function MyAds(){

    const [ads, setAds] = useState([]);
    const [decodeJwt, setDecodeJwt] = useState("");

    const [loading, setLoading] = useState(false);

    const jwtDecode = async () => {
        try{
            const token = await SecureStore.getItemAsync('session');
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            const response = await axiosInstance.get("/api/token/jwtDecode", config)
            setDecodeJwt(response.data.jti);
        } catch (error) {
            console.log(error);
        }
    }

    const getUserAds = async () => {
        setLoading(true);
        try{
            const token = await SecureStore.getItemAsync('session');
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            await axiosInstance.get("/api/advertisements/user/" + decodeJwt, config).then((response) => {
                response.data.map((ad) => {
                    const formatdate = format(new Date(ad.dataPostagem), "dd/MM/yyyy 'às' HH:mm")
                    ad.dataPostagem = formatdate;
                })
                setAds(response.data);
            })
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        jwtDecode();
    },[])

    useEffect(() => {
        getUserAds();
    },[decodeJwt])

    const deleteAd = async (id) => {
        try{
            const token = await SecureStore.getItemAsync('session');
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            await axiosInstance.delete("/api/advertisements/delete/" + id, config)
            getUserAds();
            alert("Anúncio deletado com sucesso!")
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <View className="flex h-full bg-white">
            {loading && <ActivityIndicator className="absolute top-0 left-0 right-0 bottom-0" animating={true} color={MD2Colors.purpleA700} size={50}></ActivityIndicator>}
            <View className="mt-12">
                <View className="flex flex-row items-center">
                    <Text className="text-3xl m-1">Meus anúncios</Text>
                    <Image className="w-8 h-8" source={require("../../public/icons/tagAdsPng.png")}></Image>
                </View>
                {ads.length == 0 && <Text className="text-center text-2xl mt-20">Você ainda não possui anúncios cadastrados!</Text>}
                <ScrollView className="mb-28" showsVerticalScrollIndicator={false}>
                    <View>
                        {ads.map((ad, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={()=>{
                                        router.push({
                                            pathname: "/FullAdScreen/[id]",
                                            params: {
                                                id: ad.id
                                            }
                                        })
                                    }}>
                                    <View className="bg-purple-700 m-1 p-2 flex flex-row justify-between items-center rounded-lg">
                                        <View className="flex flex-row">
                                            <View className="flex justify-center">
                                                <Image style={{resizeMode:"cover"}} source={{uri:ad.imagem}} className="w-24 h-24 rounded-lg"></Image>
                                            </View>
                                            {
                                            ad.marca == "OUTRA MARCA" 
                                            ? 
                                            <View className="flex justify-center ml-2">
                                                <Text className="text-white text-xs font-black mb-2">{ad.categoria}</Text>
                                                <Text className="text-yellow-300 font-bold mb-2">R$ {ad.preco}</Text>
                                                <Text className="text-white">{ad.dataPostagem}</Text>
                                                <Text className="text-white">Whatsapp: {ad.whatsapp}</Text>
                                            </View>
                                            : 
                                            <View className="flex justify-center ml-2">
                                                <Text className="text-white text-xs font-black mb-2">{ad.categoria} {ad.marca}</Text>
                                                <Text className="text-yellow-300 font-bold mb-2">R$ {ad.preco}</Text>
                                                <Text className="text-white">{ad.dataPostagem}</Text>
                                                <Text className="text-white">Whatsapp: {ad.whatsapp}</Text>
                                            </View>
                                            } 
                                        </View>
                                        <View className="flex gap-4">
                                            <TouchableOpacity onPress={()=>deleteAd(ad.id)}>
                                                <Image className="w-10 h-10" source={require('../../public/icons/deletePng.png')}></Image>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={()=>{router.push({
                                                pathname: "/EditAdScreen/[id]",
                                                params: {
                                                    ad: ad.id
                                                }
                                            })}} >
                                                <Image className="w-10 h-10" source={require('../../public/icons/editPng.png')}></Image>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                        )
                        })}
                    </View>
                </ScrollView>
            </View>
            <BottomBar screen="MenuScreen"></BottomBar>
        </View>
    )
}