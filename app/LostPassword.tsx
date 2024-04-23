import { ImageBackground, View, Text, TextInput, TouchableOpacity } from "react-native";
import Button from "./components/Button";
import { router } from "expo-router";
import { useState } from "react";
import axiosInstance from "./server/axios";

export default function LostPassword(){

    const[email, setEmail] = useState("")

    const sendEmailCode = async() =>{
        const response = await axiosInstance.post("/api/users/lostPassword", {email: email})
        if(response.status == 200){
            alert("Verifique seu E-mail!")
            router.push("/LoginScreen")
        } else {
            alert("Erro ao enviar email!")
        }
    }

    return(
        <ImageBackground source={require('../public/images/brandWPP.jpg')}>
            <View className="flex justify-center items-center h-full ">
                <View className="bg-black p-12 rounded-lg flex items-center">
                    <Text className="text-sm text-white text-center">
                        Insira seu E-mail para recuperação de senha
                    </Text>
                    <View className="flex w-60 mt-4 mb-4">
                        <Text className="text-white">Email</Text>
                        <TextInput value={email} onChangeText={setEmail} className="border-2 border-white p-1 rounded-lg text-white" placeholder="Insira aqui seu email"></TextInput>
                    </View>
                    <View className="flex gap-4 items-center">
                        <View>
                            <TouchableOpacity onPress={sendEmailCode} className="bg-green-400 p-3 rounded-lg w-40">
                                <Text className="text-white text-center">Enviar</Text>
                            </TouchableOpacity>
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