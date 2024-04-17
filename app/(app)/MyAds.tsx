import { View, Text } from "react-native";
import BottomBar from "../components/BottomBar";
import * as SecureStore from 'expo-secure-store';
import { useState, useEffect } from "react";
import axios from "axios";

export default function MyAds(){

    const [ads, setAds] = useState([]);
    const [decodeJwt, setDecodeJwt] = useState("");

    const jwtDecode = async () => {
        try{
            const token = await SecureStore.getItemAsync('session');
            console.log(token);
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            const response = await axios.get("http://192.168.16.5:8080/api/token/jwtDecode", config)
            console.log(response.data);
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
            const response = await axios.get("http://192.168.16.5:8080/api/advertisements/user/" + decodeJwt, config)
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

    return(
        <View className="flex h-full">
            <View className="mt-12">
                <Text>Meus anúncios</Text>
                <View>
                    {ads.map((ad, index) => {
                        return <Text className="bg-blue-500 m-1 p-2" key={index}>{ad.categoria} {ad.marca}</Text>
                    })}
                </View>
            </View>
            <BottomBar></BottomBar>
        </View>
    )
}