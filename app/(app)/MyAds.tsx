import { View, Text, Image, TouchableOpacity } from "react-native";
import BottomBar from "../components/BottomBar";
import * as SecureStore from 'expo-secure-store';
import { useState, useEffect } from "react";
import axiosInstance from "../server/axios";
import {router, useNavigation } from "expo-router";
import { ActivityIndicator, MD2Colors  } from "react-native-paper";


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
            const response = await axiosInstance.get("/api/advertisements/user/" + decodeJwt, config)
            console.log(response.data);
            setAds(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        jwtDecode();
    }, [])

    useEffect(() => {
        getUserAds();
    }, [decodeJwt])

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
                <Text className="text-3xl m-1">Meus anúncios</Text>
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
                                        <View>
                                            <Image style={{resizeMode:"cover"}} source={{uri:ad.imagem}} className="w-24 h-24 rounded-lg"></Image>
                                        </View>
                                        {ad.marca == "OUTRA MARCA" 
                                        ? <View className="flex justify-center ml-2">
                                        <Text className="text-white">{ad.categoria}</Text>
                                        <Text className="text-white">Preço: R${ad.preco}</Text>
                                        <Text className="text-white">Postagem: {ad.dataPostagem}</Text>
                                        <Text className="text-white">Whatsapp: {ad.whatsapp}</Text>
                                    </View> : <View className="flex justify-center ml-2">
                                            <Text className="text-white">{ad.categoria} {ad.marca}</Text>
                                            <Text className="text-white">R$ {ad.preco}</Text>
                                            <Text className="text-white">Postagem: {ad.dataPostagem}</Text>
                                            <Text className="text-white">Whatsapp: {ad.whatsapp}</Text>
                                        </View>} 
                                    </View>
                                    <View>
                                        <TouchableOpacity onPress={()=>deleteAd(ad.id)}><Image className="w-10 h-10" source={require('../../public/icons/deletePng.png')}></Image></TouchableOpacity>
                                        <TouchableOpacity onPress={()=>{router.push({
                                            pathname: "/EditAdScreen/[id]",
                                            params: {
                                                ad: ad.id
                                            }
                                        })}} ><Image className="w-10 h-10" source={require('../../public/icons/editPng.png')}></Image></TouchableOpacity>
                                    </View>
                                </View>
                            </TouchableOpacity>
                    )
                    })}
                </View>
            </View>
            <BottomBar></BottomBar>
        </View>
    )
}