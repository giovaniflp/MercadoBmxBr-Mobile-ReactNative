import { useSession } from "../auth/ctx";
import axiosInstance from "./server/axios";
import React, { useEffect, useState } from "react";
import { Link, router, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity, ImageBackground, Image } from "react-native";
import { TextInput, Button, ActivityIndicator, MD2Colors } from "react-native-paper";

export default function LoginScreen(){
    const { signIn } = useSession();

    const {emailLoginParam} = useLocalSearchParams();

    const {registerEmailParam}  = useLocalSearchParams();
    const {registerPasswordParam} = useLocalSearchParams();

    const [email, setEmail] = useState(emailLoginParam);
    const [password, setPassword] = useState(registerPasswordParam);
    const [seePassword, setSeePassword] = useState(true);

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        if(emailLoginParam == null){
            setEmail(registerEmailParam);
            setPassword(registerPasswordParam);
        } else {
            setEmail(emailLoginParam);
        }
    },[])

    const requestData = {
        email: email,
        password: password,
    }

    const loginApi = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.post("/api/token/login", requestData);
            alert("Usuário logado com sucesso!");
            signIn(response.data.acessToken);
            router.push("/HomeScreen");
        } catch (error) {
            if (error.response.status === 400) {
                alert("Conta não ativada!");
                router.push({
                    pathname: "/EmailCodeActivation",
                    params: { emailParam: email },
                });
            } else {
            alert("Informações incorretas!");
            console.log(error);
            }
        } finally {
            setLoading(false);
        }
    };

    return(
        <ImageBackground source={require('../public/images/brandWPP.jpeg')}>
            <View className="flex justify-center items-center h-full">
                <View className="bg-white p-12 rounded-lg">
                    <Text className="text-3xl text-black text-center">
                        Faça seu login!
                    </Text>
                    <View className="flex w-60 mt-4">
                        <TextInput className="text-sm" label="Email" mode="outlined" value={email} onChangeText={setEmail}  placeholder="Insira aqui seu email"></TextInput>
                    </View>
                    <View className="flex w-60 mt-4">
                        <TextInput maxLength={16} className="text-sm" label="Senha" mode="outlined" value={password} onChangeText={setPassword} placeholder="Insira aqui sua senha" secureTextEntry={seePassword}></TextInput>
                        <TouchableOpacity onPress={()=>setSeePassword(!seePassword)} className="absolute top-4 left-48">
                            <Image className="w-8 h-8" source={seePassword ? require("../public/icons/hidePng.png") : require("../public/icons/visibilityPng.png")}></Image>
                        </TouchableOpacity>
                    </View>
                    <View className="py-4">
                        <Link href="/LostPassword" asChild>
                            <TouchableOpacity>
                                <Text className="text-purple-700">Esqueceu a senha?</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                    <View className="flex gap-4 items-center">
                        <View>
                        {loading ? <ActivityIndicator animating={loading} color={MD2Colors.green500} size={40} className=""></ActivityIndicator> : <Button mode='contained' onPress={loginApi} className='w-40 bg-green-500' textColor='white'>Login</Button>}
                            
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