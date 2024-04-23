import { Link, router } from "expo-router";
import { View, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import Button from "./components/Button";
import { useState } from "react";
import axiosInstance from "./server/axios";

export default function EmailCodeActivation(){

    const[email, setEmail] = useState("")
    const[code, setCode] = useState("")

    const sendEmailCode = async() =>{
        await axiosInstance.post("/api/users/sendCode", {email: email}).then((response) => {
            console.log(response)
            alert("Código enviado com sucesso!")
        }).catch((error) => {
            alert("Erro ao enviar código!")
        })
    }

    const activateAccount = async() =>{
        await axiosInstance.post("/api/users/activate", {email: email, code: code}).then((response) => {
            if(response.status == 200){
                alert("Conta ativada com sucesso!")
                router.push("/LoginScreen")
            } else {
                alert("Erro ao validar conta!")
            }
        }).catch((error) => {
            alert("Erro ao validar conta!")
        })
    }

    return(
        <ImageBackground source={require('../public/images/brandWPP.jpg')}>
            <View className="flex h-full justify-center items-center">
                <View className="bg-black p-12 rounded-lg flex items-center">
                    <Text className="text-sm text-white text-center">
                        Insira o seu Email para enviar o código de ativação
                    </Text>
                    <View className="flex w-60 mt-4 mb-4">
                        <Text className="text-white">Email</Text>
                        <TextInput value={email} onChangeText={setEmail} className="border-2 border-white p-1 rounded-lg text-white" placeholder="Insira aqui seu email registrado"></TextInput>
                        <Text className="text-white">Código</Text>
                        <TextInput value={code} onChangeText={setCode} className="border-2 border-white p-1 rounded-lg text-white" placeholder="Insira aqui seu código recebido"></TextInput>
                    </View>
                    <View className="flex gap-4 items-center">
                        <View>
                            <TouchableOpacity onPress={sendEmailCode} className="bg-green-400 p-3 rounded-lg w-40">
                                <Text className="text-white text-center">Enviar código</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={activateAccount} className="bg-blue-400 p-3 rounded-lg w-40">
                                <Text className="text-white text-center">Validar conta</Text>
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