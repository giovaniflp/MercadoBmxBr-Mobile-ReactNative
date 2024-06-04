import { useEffect, useState } from "react";
import { View, Text } from "react-native";
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
            <Text>Deseja realmente excluir sua conta?</Text>
            <Text>Com isso, excluirá também permanentemente seus anúncios e favoritos.</Text>
            <View className="flex flex-row">
                <Button onPress={()=>{setModal(true)}}>Sim</Button>
                <Button onPress={()=>{setModal(false)}}>Não</Button>
            </View>
            {modal &&
                <View>
                    <Text>Insira o código abaixo e sua senha atual para confirmar</Text>
                    <Text className="text-purple-700">{randomCode}</Text>
                    <TextInput value={code} onChangeText={setCode} label="Código" mode="outlined"></TextInput>
                    <TextInput value={password} onChangeText={setPassword} label="Senha" mode="outlined"></TextInput>
                    <Button onPress={deleteUser}>Deletar</Button>
                </View>
            }
            <BottomBar screen="MenuScreen"></BottomBar>
        </View>
    )
}