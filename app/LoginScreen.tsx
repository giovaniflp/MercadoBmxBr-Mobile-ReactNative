import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from "react-native";
import Button from "./components/Button";
import { router } from "expo-router";
import { Link } from "expo-router";
import axiosInstance from "./server/axios";
import { useSession } from "../auth/ctx";

export default function LoginScreen(){
    const { signIn } = useSession();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [seePassword, setSeePassword] = useState(true);

    const requestData = {
        email: email,
        password: password,
    }

    const loginApi  = () => axiosInstance.post("/api/token/login", requestData).then(async(response) => {
        alert("Usuário logado com sucesso!")
        signIn(response.data.acessToken)
        router.push("/HomeScreen");
    }).catch((error) => {
        alert("Informações incorretas!")
        console.log(error)
    });

    return(
        <ImageBackground source={require('../public/images/brandWPP.jpg')}>
            <View className="flex justify-center items-center h-full">
                <View className="bg-black p-12 rounded-lg">
                    <Text className="text-3xl text-white text-center">
                        Faça seu login!
                    </Text>
                    <View className="flex w-60 mt-4">
                        <Text className="text-white">Email</Text>
                        <TextInput value={email} onChangeText={setEmail} className="border-2 border-white p-1 rounded-lg text-white" placeholder="Insira aqui seu email"></TextInput>
                    </View>
                    <View className="flex w-60 mt-4">
                        <Text className="text-white">Senha</Text>
                        <TextInput value={password} onChangeText={setPassword} className="border-2 border-white p-1 rounded-lg text-white w-60" placeholder="Insira aqui sua senha" secureTextEntry={seePassword}></TextInput>
                        <TouchableOpacity onPress={()=>setSeePassword(!seePassword)} className="absolute top-7 left-52">
                            <Image source={seePassword ? require("../public/icons/hidePng.png") : require("../public/icons/visibilityPng.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View className="py-4">
                        <Link href="/LostPassword" asChild>
                            <TouchableOpacity>
                                <Text className="text-blue-400">Esqueceu a senha?</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                    <View className="flex gap-4 items-center">
                        <View>
                            <TouchableOpacity className="bg-green-400 p-3 rounded-lg w-40" onPress={loginApi}><Text className="text-white text-center">Login</Text></TouchableOpacity>
                        </View>
                        <View>
                            <Link href="/EmailCodeActivation" asChild>
                                <TouchableOpacity className="bg-blue-400 p-3 rounded-lg w-40">
                                    <Text className="text-white text-center">Ativar conta</Text>
                                </TouchableOpacity>
                            </Link>
                        </View>
                        <View>
                            <Button text="Tela Principal" route="/" color=""></Button>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}