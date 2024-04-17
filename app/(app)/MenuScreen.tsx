import { View, Image, Text, TouchableOpacity } from "react-native";
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
            <View className="my-4">
                <Button route="/" text="Alterar Nome" color="blue"></Button>
            </View>
            <View>
                <Button route="/" text="Alterar Senha" color="blue"></Button>
            </View>
            <View className="mt-4">
                <Button route="/" text="Termos de Uso" color="blue"></Button>
            </View>
            <View className="mt-4">
                <Button route="/" text="Sobre nós" color="blue"></Button>
            </View>
            <Link className="mt-4" href="/MyAds" asChild>
                <TouchableOpacity className="flex bg-blue-500 p-3 rounded-lg w-40">
                    <Text className="text-center">Meus anúncios</Text>
                </TouchableOpacity>
            </Link>
            <View className="mt-4">
                <Button route="/" text="Meus favoritos" color="red"></Button>
            </View>
            <View className="my-4">
                <TouchableOpacity onPress={signOut}>
                    <Text>Sair</Text>
                </TouchableOpacity>
            </View>

            <BottomBar></BottomBar>
        </View>
    )
}