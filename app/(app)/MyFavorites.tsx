import { View, Text, TouchableOpacity, ScrollView } from "react-native"
import BottomBar from "../components/BottomBar"
import * as SecureStore from 'expo-secure-store'
import axiosInstance from "../server/axios";
import { useState, useEffect } from "react";
import HomeAd from "../components/HomeAd";

export default function MyFavorites(){

    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        JwtDecode()
    })

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
        const token = await SecureStore.getItemAsync('session');
        const config = {
            headers: {
            Authorization: "Bearer " + token
            }
        }
        await axiosInstance.get("/api/favorites/user/" + responseData, config).then(async(response) => {
            setFavorites(response.data)
        })
    }

    return(
        <View className="h-full pt-12">
            <Text>Meus favoritos</Text>
            <View>
                <ScrollView>
                    <View>
                        {favorites.length > 0 ? (
                            favorites.map((favorite) => {
                                return <HomeAd id={favorite.idAnuncio} key={favorite.id} />;
                            })
                        ) : (
                            <Text>Você não possui favoritos.</Text>
                        )}
                    </View>
                </ScrollView>
            </View>
            <BottomBar></BottomBar>
        </View>
    )
}