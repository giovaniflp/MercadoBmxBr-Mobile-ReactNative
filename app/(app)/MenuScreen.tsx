import { Link } from "expo-router";
import { useSession } from "../../auth/ctx";
import { useEffect, useState } from "react";
import axiosInstance from "../server/axios";
import { Button } from "react-native-paper";
import BottomBar from "../components/BottomBar";
import * as SecureStore from 'expo-secure-store';
import { ActivityIndicator, MD2Colors  } from "react-native-paper";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";

export default function MenuScreen(){

    const { signOut } = useSession();

    const [loading, setLoading] = useState(false)

    const getName = async () => {
        setLoading(true)
        try{
            const token = await SecureStore.getItemAsync('session');
        console.log(token);
        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        }
        const response = await axiosInstance.get("/api/token/jwtDecode", config)
        console.log(response.data);
        setNome(response.data.name);
        setEmail(response.data.sub);
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getName();
    },[])


    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    return(
        <View className="flex items-center justify-center h-full bg-white">
            <TouchableOpacity onPress={()=>{alert("A imagem do usuário será implementada nas próximas versões!")}}>
                <Image className="w-40 h-40 mt-2" source={require('../../public/icons/accCircle.png')}></Image>
            </TouchableOpacity>
            {
            loading 
            ? 
            <ActivityIndicator className="mt-4" animating={true} color={MD2Colors.black} size={50}></ActivityIndicator> 
            : 
            <View className="flex justify-center items-center">
                <Text className="text-4xl mt-4">{nome}</Text>
                <Text className="mt-2">{email}</Text>
            </View>  
            }
            <Link className="my-4" href="/ChangeRegisterData" asChild>
                <Button mode='contained' className='w-60 bg-black' textColor='white'>Alterar Dados de Cadastro</Button>
            </Link>
            <Link className="" href="/MyAds" asChild>
                <Button mode='contained' className='w-60 bg-purple-700' textColor='white'>Meus anúncios</Button>
            </Link>
            <Link className="mt-4" href="/MyFavorites" asChild>
                <Button mode='contained' className='w-60 bg-red-500' textColor='white'>Meus favoritos</Button>
            </Link>
            <View className="my-4">
                <Button onPress={signOut} mode='elevated' className='w-60' textColor='black'>Sair</Button>
            </View>
            <TouchableOpacity className="pt-36 pb-8" onPress={()=>{Linking.openURL("https://docs.google.com/document/d/1xIGVn24An86dOONmL_HZsi9kBwutwcqpF7zfudxv-zw/edit?usp=sharing")}}>
                <Text className="text-purple-700">Termos de Uso e Sobre Nós</Text>
            </TouchableOpacity>
            <View className="flex justify-center items-center mb-5">
                <BannerAd unitId="ca-app-pub-6872790638818192/3543204629" size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}></BannerAd>
            </View>
            <BottomBar screen="MenuScreen"></BottomBar>
        </View>
    )
}