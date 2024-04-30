import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import BottomBar from "../components/BottomBar"
import * as SecureStore from 'expo-secure-store'
import axiosInstance from "../server/axios";
import { useState, useEffect } from "react";
import HomeAd from "../components/HomeAd";

export default function MyFavorites(){

    const [favorites, setFavorites] = useState([])

    const [idUsuario, setIdUsuario] = useState("")

    useEffect(() => {
        FetchFavorites();
    })

    const FetchFavorites = async () => {
        const token = await SecureStore.getItemAsync('session');
        const config = {
            headers: {
            Authorization: "Bearer " + token
            }
        }
        await axiosInstance.get("/api/token/jwtDecode", config).then(async(response) => {
            setIdUsuario(response.data.jti)
            const response2 = await axiosInstance.get("/api/favorites/user/" + idUsuario , config)
            setFavorites(response2.data)
        })
    }

    return(
        <View className="h-full pt-12">
            <Text>Meus favoritos</Text>
            <View>
                <ScrollView>
                    <View>
                        {
                            favorites.map((favorite) => {
                                return(
                                    <HomeAd id={favorite.idAnuncio} key={favorite.id} ></HomeAd>
                                )
                            })
                        }
                    </View>
                </ScrollView>
            </View>
            <BottomBar></BottomBar>
        </View>
    )
}