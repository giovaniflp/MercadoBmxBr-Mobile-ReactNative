import { View, Text, Image, TouchableOpacity } from "react-native";
import BottomBar from "../components/BottomBar";
import * as SecureStore from 'expo-secure-store';
import { useState, useEffect } from "react";
import axiosInstance from "../server/axios";
import {router, useNavigation } from "expo-router";


export default function MyAds(){

    const [ads, setAds] = useState([]);
    const [decodeJwt, setDecodeJwt] = useState("");

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
            <View className="mt-12">
                <Text>Meus anúncios</Text>
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
                                <View className="bg-blue-500 m-1 p-2 flex flex-row justify-between items-center">
                                    <View className="flex flex-row">
                                        <View>
                                            <Image style={{resizeMode:"contain"}} source={{uri:ad.imagem}} className="w-20 h-20"></Image>
                                        </View>
                                        <View>
                                            <Text>{ad.categoria} {ad.marca}</Text>
                                            <Text>R$ {ad.preco}</Text>
                                            <Text>{ad.dataPostagem}</Text>
                                            <Text>Número de contato: {ad.whatsapp}</Text>
                                        </View>
                                        
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