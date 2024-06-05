import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import BottomBar from "../components/BottomBar";
import * as SecureStore from 'expo-secure-store';
import axiosInstance from "../server/axios";
import { router } from "expo-router";

export default function DeleteAccount(){

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
        setId(response.data.jti);
    }

    const [id, setId] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");

    const [modal, setModal] = useState(false);
    const [randomCode, setRandomCode] = useState("");

    const generateCode = () => {
        const randomNumber = Math.floor(Math.random() * 10000);
        const randomCodeString = randomNumber.toString().padStart(4, '0');
        setRandomCode(randomCodeString);
    }

    const deleteUser = async() => {
        if(code != randomCode){
            alert("Código incorreto!");
            const randomNumber = Math.floor(Math.random() * 10000);
            const randomCodeString = randomNumber.toString().padStart(4, '0');
            setRandomCode(randomCodeString);
        } else{
            const token = await SecureStore.getItemAsync('session');
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            await axiosInstance.post("/api/users/delete/" + id, {password: password}, config).then((response) => {
                if(response.data == "Senha errada!"){
                    alert("Senha incorreta. Tente novamente!");
                    const randomNumber = Math.floor(Math.random() * 10000);
                    const randomCodeString = randomNumber.toString().padStart(4, '0');
                    setRandomCode(randomCodeString);
                } else {
                    alert("Conta deletada com sucesso!");
                    SecureStore.deleteItemAsync('session');
                    router.push({
                        pathname: "/LoginScreen",
                    })
                }
            })
        }
    }

    useEffect(()=>{
        generateCode();
        getName();
    }, [])

    

    return(
        <View className="h-full bg-white flex justify-center items-center">
            <Image className="w-40 h-40" source={require("../../public/icons/sadPng.png")}></Image>
            <Text className="text-xl">Deseja realmente excluir sua conta?</Text>
            <Text className="text-xs">excluirá também <Text className="text-red-500 font-bold">permanentemente</Text> seus anúncios e favoritos.</Text>
            <View className="flex flex-row">
                <Button mode="contained" className="my-4 bg-black w-60" onPress={()=>{setModal(!modal)}}>Sim, desejo continuar.</Button>
            </View>
            {modal &&
                <View>
                    <Text>Insira o código abaixo e sua senha atual para confirmar.</Text>
                    <Text className="text-purple-700 text-center my-2 text-xl">{randomCode}</Text>
                    <View className="flex items-center mb-4 gap-2">
                        <TextInput className="w-60" value={code} onChangeText={setCode} label="Código" mode="outlined"></TextInput>
                        <TextInput className="w-60" value={password} onChangeText={setPassword} label="Senha atual" mode="outlined"></TextInput>
                    </View>
                    <View className="flex items-center">
                        <Button mode="contained" className="w-40 bg-red-500" onPress={deleteUser}>Deletar Conta</Button>
                    </View>
                </View>
            }
            <BottomBar screen="MenuScreen"></BottomBar>
        </View>
    )
}