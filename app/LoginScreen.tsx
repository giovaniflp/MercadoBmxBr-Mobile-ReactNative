import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import Button from "./components/Button";
import axios from "axios";
import { router } from "expo-router";
import * as SecureStore from 'expo-secure-store';

import { useSession } from "../auth/ctx";

export default function LoginScreen(){
    const { signIn } = useSession();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const requestData = {
        email: email,
        password: password,
    }

    const loginApi  = () => axios.post("http://192.168.16.5:8080/api/token/login", requestData).then(async(response) => {
        alert("Usuário logado com sucesso!")
        console.log(response.data.acessToken)
        signIn(response.data.acessToken)

        router.push("/HomeScreen");
    }).catch((error) => {
        alert("Usuário ou senha incorretos!")
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
                        <TextInput value={password} onChangeText={setPassword} className="border-2 border-white p-1 rounded-lg text-white" placeholder="Insira aqui sua senha" secureTextEntry={true}></TextInput>
                    </View>
                    <View className="py-4">
                        <TouchableOpacity>
                            <Text className="text-blue-400">Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="flex gap-4 items-center">
                        <View>
                            <TouchableOpacity className="bg-green-400 p-3 rounded-lg w-40" onPress={loginApi}><Text className="text-white text-center">Login</Text></TouchableOpacity>
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