import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import axiosInstance from "../server/axios";
import BottomBar from "../components/BottomBar";
import { useSession } from "../../auth/ctx";
import { sign } from "jsonwebtoken";

export default function ChangeRegisterData(){
    const { signOut } = useSession();

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
        setNome(response.data.name);
        setEmail(response.data.sub);
        setId(response.data.jti);
    }

    useEffect(() => {
        getName();
    }, [])

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    
    const [id, setId] = useState("");

    const [nomeNovo, setNomeNovo] = useState("");
    const [emailNovo, setEmailNovo] = useState("");
    const [senhaAntiga, setSenhaAntiga] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarNovaSenha, setConfirmarNovaSenha] = useState("");

    const changeRegisterData = async () => {
        const token = await SecureStore.getItemAsync('session');
        const config = {
            headers: {
                Authorization: "Bearer " + token
            }
        }
        const requestData = {
            name: nomeNovo,
            email: emailNovo,
            senhaAntiga: senhaAntiga,
            senhaNova: novaSenha,
        }
            const response2 = await axiosInstance.patch("/api/users/patch/" + id, requestData, config)
            console.log(response2.data);
            alert("Dados alterados com sucesso!")
            alert("Caso tenha alterado o E-mail, verifique esse novo E-mail para fazer a verificação de conta")
            alert("Faça login novamente para ver as alterações")
            signOut();
    }

    return(
        <View className="pt-12 h-full bg-white">
            <Text>Nome: {nome}</Text>
            <TextInput className="border-2 border-gray-500 rounded-lg w-60 h-10" value={nomeNovo} onChangeText={setNomeNovo}></TextInput>
            <Text>Email: {email}</Text>
            <TextInput className="border-2 border-gray-500 rounded-lg w-60 h-10" value={emailNovo} onChangeText={setEmailNovo}></TextInput>
            <Text>Senha antiga</Text>
            <TextInput value={senhaAntiga} onChangeText={setSenhaAntiga} className="border-2 border-gray-500 rounded-lg w-60 h-10"></TextInput>
            <Text>Nova senha</Text>
            <TextInput value={novaSenha} onChangeText={setNovaSenha} className="border-2 border-gray-500 rounded-lg w-60 h-10"></TextInput>
            <Text>Confirmar nova senha</Text>
            <TextInput value={confirmarNovaSenha} onChangeText={setConfirmarNovaSenha} className="border-2 border-gray-500 rounded-lg w-60 h-10"></TextInput>
            <TouchableOpacity onPress={changeRegisterData} className="bg-blue-500 p-3 rounded-lg w-60">
                <Text className="text-center">Alterar dados</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-red-500 p-3 rounded-lg w-60">
                <Text className="text-center">Excluir conta</Text>
            </TouchableOpacity>
            <Text>Ao alterar o E-mail, use apenas E-mails que consigam ser acessados, para fazer uma nova verificação.</Text>
            <Text>Em caso de problemas, contate o suporte: mercadobmxbr@gmail.com</Text>
            <BottomBar></BottomBar>
        </View>
    )
}