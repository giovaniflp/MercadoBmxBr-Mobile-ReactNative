import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import BottomBar from "../components/BottomBar";
import Button from "../components/Button";
import * as SecureStore from 'expo-secure-store';
import { useSession } from "../../auth/ctx";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import axiosInstance from "../server/axios";

export default function MenuScreen(){
    const { signOut } = useSession();

    const getName = async () => {
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
    }

    useEffect(() => {
        getName();
    })


    const [nome, setNome] = useState("");

    return(
        <View className="flex items-center pt-10 h-full">
            <TouchableOpacity>
                <Image className="w-40 h-40 mt-2" source={require('../../public/icons/accCircle.png')}></Image>
            </TouchableOpacity>
            <Text className="text-4xl mt-4">{nome}</Text>
            <Link className="my-4" href="/ChangeRegisterData" asChild>
                <TouchableOpacity className="bg-blue-500 p-3 rounded-lg w-60">
                    <Text className="text-center">Alterar Dados de Cadastro</Text>
                </TouchableOpacity>
            </Link>
            <View>
                <TouchableOpacity onPress={()=>{Linking.openURL("https://docs.google.com/document/d/1xIGVn24An86dOONmL_HZsi9kBwutwcqpF7zfudxv-zw/edit?usp=sharing")}} className="bg-blue-500 p-3 rounded-lg w-60">
                    <Text className="text-center">Termos de Uso e Sobre Nós</Text>
                </TouchableOpacity>
            </View>
            <Link className="mt-4" href="/MyAds" asChild>
                <TouchableOpacity className="flex bg-blue-500 p-3 rounded-lg w-60">
                    <Text className="text-center">Meus anúncios</Text>
                </TouchableOpacity>
            </Link>
            <Link className="mt-4" href="/MyFavorites" asChild>
                <TouchableOpacity className="flex bg-red-500 p-3 rounded-lg w-60">
                    <Text className="text-center">Meus favoritos</Text>
                </TouchableOpacity>
            </Link>
            <View className="my-4">
                <TouchableOpacity onPress={signOut} className="bg-gray-500 p-3 rounded-lg w-60">
                    <Text className="text-center">Sair</Text>
                </TouchableOpacity>
            </View>

            <BottomBar></BottomBar>
        </View>
    )
}