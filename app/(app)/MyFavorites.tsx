import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import BottomBar from "../components/BottomBar"
import * as SecureStore from 'expo-secure-store'
import axiosInstance from "../server/axios";
import { useState, useEffect } from "react";
import HomeAd from "../components/HomeAd";
import { ActivityIndicator, MD2Colors  } from "react-native-paper";

export default function MyFavorites(){

    const [favorites, setFavorites] = useState([])

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        JwtDecode()
    }, [])

    const JwtDecode = async () => {
        const token = await SecureStore.getItemAsync('session');
        const config = {
            headers: {
            Authorization: "Bearer " + token
            }
        }
        await axiosInstance.get("/api/token/jwtDecode", config).then(async(response) => {
            FetchFavorites(response.data.jti)
        })
    }

    const FetchFavorites = async (responseData) => {
        setLoading(true)
        try{
            const token = await SecureStore.getItemAsync('session');
        const config = {
            headers: {
            Authorization: "Bearer " + token
            }
        }
        await axiosInstance.get("/api/favorites/user/" + responseData, config).then(async(response) => {
            setFavorites(response.data)
            console.log(response.data)
        })
        
        }
        catch (error) {
            console.log(error)
        }
        finally{
            setLoading(false)
        }
        
    }

    return(
        <View className="h-full pt-12 bg-white">
            {loading && <ActivityIndicator className="absolute top-0 left-0 right-0 bottom-0" animating={true} color={MD2Colors.purpleA700} size={50}></ActivityIndicator>}
            <Text className="text-3xl">Meus favoritos</Text>
            <View>
                <ScrollView>
                    <View>
                        {
                            favorites.length > 0 ? 
                                favorites.map((favorite) => {
                                    return <HomeAd id={favorite.idAnuncio} key={favorite.id} />;
                                }) : <Text>Você não tem favoritos</Text>
                        }
                    </View>
                </ScrollView>
            </View>
            <BottomBar></BottomBar>
        </View>
    )
}