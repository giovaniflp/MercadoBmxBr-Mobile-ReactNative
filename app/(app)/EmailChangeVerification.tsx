import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { View, Text } from "react-native";
import axiosInstance from "../server/axios";
import * as SecureStore from 'expo-secure-store';
import { useSession } from "../../auth/ctx";

export default function EmailChangeVerification(){
    
    const { signOut } = useSession();
    const {newEmail} = useLocalSearchParams();

    const[code, setCode] = useState("")
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)

    const sendEmailCode = async() =>{
        setLoading(true)
        try{
            const token = await SecureStore.getItemAsync('session');
            await axiosInstance.post("/api/users/sendCodeNewEmail", {email: newEmail},{
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then((response) => {
                console.log(response)
                alert("Código enviado com sucesso! Verifique seu email!")
            }).catch((error) => {
                console.log(error)
                alert("Erro ao enviar código!")
            })
        } catch(error){
            alert("Erro ao enviar código!")
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    const activateAccount = async() =>{
        setLoading2(true)
        try{
            const token = await SecureStore.getItemAsync('session');
            await axiosInstance.post("/api/users/activateNewEmail", {email: newEmail, code: code},{
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then((response) => {
                if(response.status == 200){
                    alert("Conta ativada com sucesso!")
                    signOut()
                } else {
                    alert("Erro ao validar conta!")
                }
            }).catch((error) => {
                alert("Erro ao validar conta!")
            })
        } catch(error){
            alert("Erro ao validar conta!")
            console.log(error)
        }
        finally{
            setLoading2(false)
        }
    }


    return(
        <View className="mt-12">
            <Text>{newEmail}</Text>
            <Text>Verificação de E-mail</Text>
            <Text>Insira o código recebido no seu e-mail</Text>
            <TextInput label="Código" value={code} onChangeText={setCode} />
            <Button className="bg-purple-300" onPress={sendEmailCode}>Enviar código</Button>
            <Button className="bg-green-300 mt-10" onPress={activateAccount}>Ativar conta</Button>
        </View>
    )
}