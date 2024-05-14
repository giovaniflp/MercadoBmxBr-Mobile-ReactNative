import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import BottomBar from "../components/BottomBar";
import { Button } from "react-native-paper";
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
        setEmail(response.data.sub);
    }

    useEffect(() => {
        getName();
    })


    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");

    return(
        <View className="flex items-center justify-center h-full bg-white">
            <TouchableOpacity onPress={()=>{alert("A imagem do usuário será implementada nas próximas versões!")}}>
                <Image className="w-40 h-40 mt-2" source={require('../../public/icons/accCircle.png')}></Image>
            </TouchableOpacity>
            <Text className="text-4xl mt-4">{nome}</Text>
            <Text className="mt-2">{email}</Text>
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
            <TouchableOpacity className="pt-40" onPress={()=>{Linking.openURL("https://docs.google.com/document/d/1xIGVn24An86dOONmL_HZsi9kBwutwcqpF7zfudxv-zw/edit?usp=sharing")}}>
                <Text className="text-purple-700">Termos de Uso e Sobre Nós</Text>
            </TouchableOpacity>
            <BottomBar></BottomBar>
        </View>
    )
}