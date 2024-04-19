import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from "react-native";
import Button from "./components/Button";
import React, { useState } from "react";
import { router } from "expo-router";
import axiosInstance from "./server/axios";

export default function RegisterScreen(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [seePassword, setSeePassword] = useState(true);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(true);

    const requestData = {
        name: name,
        email: email,
        password: password,
    }

    const registerApi = async() => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,16}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(password != confirmPassword){
            alert("As senhas não são iguais!");
        }
        else if(!password.match(passwordRegex)){
            alert("A senha deve conter o mínimo de 6 caracteres, máximo de 16 e ao menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial! Exemplo: #Pedro123");
        }
        else if(name == "" || email == "" || password == "" || confirmPassword == ""){
            alert("Preencha todos os campos!");
        }
        else if(!email.match(emailRegex)){
            alert("Insira um email valido! Formatação: email@email.com");
        }
        else{
                const response = await axiosInstance.post("/api/users/register", requestData)
                console.log(response.data);
                if(response.data == "Email já cadastrado! Insira outro email."){
                    alert("Email já cadastrado! Insira outro email.");
                } else{
                    alert("Usuário cadastrado com sucesso!");
                    router.push("/LoginScreen");
                }
}};

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
                        <TextInput value={password} onChangeText={setPassword} className="text-white border-2 border-white rounded-lg p-1" placeholder="Insira aqui sua senha" secureTextEntry={seePassword}></TextInput>
                        <TouchableOpacity onPress={()=>setSeePassword(!seePassword)} className="absolute top-7 left-56">
                            <Image source={seePassword ? require("../public/icons/hidePng.png") : require("../public/icons/visibilityPng.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View className="mb-4">
                        <Text className="text-white">Confirme sua senha</Text>
                        <TextInput value={confirmPassword} onChangeText={setConfirmPassword} className="text-white border-2 border-white rounded-lg p-1 w-64" placeholder="Insira aqui sua senha novamente" secureTextEntry={seeConfirmPassword}>
                        </TextInput>
                        <TouchableOpacity onPress={()=>setSeeConfirmPassword(!seeConfirmPassword)} className="absolute top-7 left-56">
                            <Image source={seeConfirmPassword ? require("../public/icons/hidePng.png") : require("../public/icons/visibilityPng.png")}></Image>
                        </TouchableOpacity>
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