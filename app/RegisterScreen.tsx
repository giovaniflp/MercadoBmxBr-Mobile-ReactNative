import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import Button from "./components/Button";
import axios from "axios";
import React, { useState } from "react";
import { router } from "expo-router";

export default function RegisterScreen(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const requestData = {
        name: name,
        email: email,
        password: password,
    }

    //WIFI 5G IP
    const registerApi = () => axios.post("http://192.168.16.5:8080/api/users/register", requestData).then((response) => {
        alert("Usuário cadastrado com sucesso!");
        router.push("/LoginScreen");
    });

    
    return(
        <ImageBackground source={require('../public/images/brandWPP.jpg')}>
            <View className="flex justify-center items-center h-full">
                <View className="bg-black p-12 rounded-lg">
                    <Text className="text-white text-center text-3xl">
                        Faça seu cadastro!
                    </Text>
                    <View className="my-4">
                        <Text className="text-white">Nome</Text>
                        <TextInput value={name} onChangeText={setName} className="text-white border-2 border-white rounded-lg p-1" placeholder="Insira aqui seu nome"></TextInput>
                    </View>
                    <View className="mb-4">
                        <Text className="text-white">Email</Text>
                        <TextInput value={email} onChangeText={setEmail} className="text-white border-2 border-white rounded-lg p-1" placeholder="Insira aqui seu email" inputMode="email"></TextInput>
                    </View>
                    <View className="mb-4">
                        <Text className="text-white">Senha</Text>
                        <TextInput value={password} onChangeText={setPassword} className="text-white border-2 border-white rounded-lg p-1" placeholder="Insira aqui sua senha" secureTextEntry={true}></TextInput>
                    </View>
                    <View className="mb-4">
                        <Text className="text-white">Confirme sua senha *NAO IMPLEMENTADO AINDA</Text>
                        <TextInput className="text-white border-2 border-white rounded-lg p-1" placeholder="Insira aqui sua senha novamente" secureTextEntry={true}></TextInput>
                    </View>
                    <View className="flex items-center gap-4">
                        <View>
                            <TouchableOpacity className="bg-green-400 p-3 rounded-lg w-40" onPress={registerApi}><Text className="text-white text-center">Registrar</Text></TouchableOpacity>
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