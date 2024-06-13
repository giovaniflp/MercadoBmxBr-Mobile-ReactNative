import { router } from "expo-router";
import { useEffect, useState } from "react";
import axiosInstance from "../server/axios";
import BottomBar from "../components/BottomBar";
import * as SecureStore from 'expo-secure-store';
import { Button, TextInput } from "react-native-paper";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function DeleteAccount(){
    
    const [id, setId] = useState("");

    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");

    const [randomCode, setRandomCode] = useState("");
    
    const [seePassword, setSeePassword] = useState(true);
    
    const [modal, setModal] = useState(false);
    
    const generateCode = () => {
        const randomNumber = Math.floor(Math.random() * 10000);
        const randomCodeString = randomNumber.toString().padStart(4, '0');
        setRandomCode(randomCodeString);
    }

    const getName = async () => {
        try{
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
        catch(error){
            console.log(error);
        }
    }

    const deleteUser = async() => {
        if(code != randomCode){
            alert("Código incorreto!");
            const randomNumber = Math.floor(Math.random() * 10000);
            const randomCodeString = randomNumber.toString().padStart(4, '0');
            setRandomCode(randomCodeString);
        } else{
            try{
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
            catch(error){
                console.log(error);
            }
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
            {
            modal &&
                <View>
                    <Text>Insira o código abaixo e sua senha atual para confirmar.</Text>
                    <Text className="text-purple-700 text-center my-2 text-xl">{randomCode}</Text>
                    <View className="flex items-center mb-4 gap-2">
                        <TextInput className="w-60" value={code} onChangeText={setCode} label="Código" mode="outlined"></TextInput>
                        <View className="relative">
                            <TextInput secureTextEntry={seePassword} maxLength={16} className="w-60" value={password} onChangeText={setPassword} label="Senha atual" mode="outlined"></TextInput>
                            <TouchableOpacity onPress={()=>setSeePassword(!seePassword)} className="absolute top-4 right-3">
                                <Image className="w-8 h-8" source={seePassword ? require("../../public/icons/hidePng.png") : require("../../public/icons/visibilityPng.png")}></Image>
                            </TouchableOpacity>
                        </View>
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