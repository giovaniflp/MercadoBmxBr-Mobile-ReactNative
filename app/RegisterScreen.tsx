import { View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import { Button } from "react-native-paper";
import { TextInput, ActivityIndicator, MD2Colors } from "react-native-paper";
import React, { useState } from "react";
import { router, Link } from "expo-router";
import axiosInstance from "./server/axios";

export default function RegisterScreen(){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [seePassword, setSeePassword] = useState(true);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(true);

    const [loading, setLoading] = useState(false);

    const requestData = {
        name: name,
        email: email,
        password: password,
    }

    const registerApi = async() => {
        setLoading(true);
        try{
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
                    if(response.data == "Email já cadastrado!"){
                        alert("Email já cadastrado! Insira outro email.");
                    } else{
                        alert("Usuário cadastrado com sucesso!");
                        router.push("/LoginScreen");
                    }
            }         
}
        catch(error){
            alert("Erro ao cadastrar usuário!");
            console.log(error);
        }
        finally{
            setLoading(false);
        }
};

    return(
        <ImageBackground source={require('../public/images/brandWPP.jpg')}>
            <View className="flex justify-center items-center h-full">
                <View className="bg-white p-12 border-4 rounded-lg flex items-center">
                    <Text className="text-black text-center text-3xl">
                        Faça seu cadastro!
                    </Text>
                    <View className="my-4">
                        <TextInput label="Nome" mode="outlined" value={name} onChangeText={setName} className="text-black text-sm w-60" placeholder="Insira aqui seu nome"></TextInput>
                    </View>
                    <View className="mb-4">
                        <TextInput label="E-mail" mode="outlined" value={email} onChangeText={setEmail} className="text-black text-sm w-60" placeholder="Insira aqui seu email" inputMode="email"></TextInput>
                    </View>
                    <View className="mb-4">
                        <TextInput maxLength={16} label="Senha" mode="outlined" value={password} onChangeText={setPassword} className="text-black text-sm w-60" placeholder="Insira aqui sua senha" secureTextEntry={seePassword}></TextInput>
                        <TouchableOpacity onPress={()=>setSeePassword(!seePassword)} className="absolute top-4 left-48">
                            <Image className="w-8 h-8" source={seePassword ? require("../public/icons/hidePng.png") : require("../public/icons/visibilityPng.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View className="mb-4">
                        <TextInput maxLength={16} label="Confirmar senha" mode="outlined" value={confirmPassword} onChangeText={setConfirmPassword} className="text-black text-sm w-60" placeholder="Confirme sua senha" secureTextEntry={seeConfirmPassword}></TextInput>
                        <TouchableOpacity onPress={()=>setSeeConfirmPassword(!seeConfirmPassword)} className="absolute top-4 left-48">
                            <Image className="w-8 h-8" source={seeConfirmPassword ? require("../public/icons/hidePng.png") : require("../public/icons/visibilityPng.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View className="flex items-center gap-4">
                        <View>
                            {loading ? <ActivityIndicator animating={true} color={MD2Colors.green500} size={40}/> : <Button onPress={registerApi} mode='contained' className='w-40 bg-green-500' textColor='white'>Cadastrar</Button>}
                        </View>
                        <View>
                            <Link href="/" asChild>
                                <Button mode='contained' className='w-40 bg-black' textColor='white'>Tela Inicial</Button>
                            </Link>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}