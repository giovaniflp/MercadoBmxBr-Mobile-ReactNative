import { View, Text, Linking, Image } from "react-native";
import { TextInput, Button, ActivityIndicator, MD2Colors } from "react-native-paper";
import { useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import axiosInstance from "../server/axios";
import BottomBar from "../components/BottomBar";
import { useSession } from "../../auth/ctx";
import { router } from "expo-router";

export default function ChangeRegisterData(){
    const { signOut } = useSession();

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);

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
        setLoading(true);
        try{
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
            if(emailNovo || emailNovo != ""){
                await axiosInstance.patch("/api/users/patch/" + id, requestData, config)
                router.push({
                    pathname: "/EmailChangeVerification",
                    params: {
                        newEmail: emailNovo
                    }
                });
            }else{
                if(novaSenha != confirmarNovaSenha){
                    alert("As senhas não coincidem!")
                } if(nomeNovo == "" || emailNovo == "" || senhaAntiga == "" || novaSenha == "" || confirmarNovaSenha == ""){
                    alert("Preencha algum campo!")
                }
                else{
                    if(nomeNovo){
                    await axiosInstance.patch("/api/users/patch/" + id, requestData, config).then((response) => {
                        alert("Dados alterados com sucesso!")
                        signOut()
                    }).catch((error) => {
                        console.log(error)
                    })
                    } if(!nomeNovo){
                        await axiosInstance.patch("/api/users/patch/" + id, requestData, config).then((response) => {
                            if(response.status == 500){
                                alert("Senha antiga incorreta!")
                            } else{
                                alert("Dados alterados com sucesso!")
                                signOut()
                            }
                        }).catch((error) => {
                            if(error.response.status == 500){
                                alert("Senha antiga incorreta!")
                            }
                        })
                    }
                }
            }
        } catch(error){
            console.log(error)
        } finally{
            setLoading(false);
        }
    }

    return(
        <View className="pt-12 h-full bg-white flex justify-center items-center">
            <Image className="w-28 h-28" source={require("../../public/icons/registerDetailsPng.png")}></Image>
            <Text className="mb-4 text-3xl">Alteração de cadastro</Text>
            <TextInput label={"Nome atual: " + nome} mode="outlined" className="text-black text-sm w-80 h-10 mb-2" value={nomeNovo} onChangeText={setNomeNovo}></TextInput>
            <TextInput label={"Email atual: " + email} mode="outlined" className="text-black text-sm w-80 h-10 mb-2" value={emailNovo} onChangeText={setEmailNovo}></TextInput>
            <TextInput label="Senha antiga" mode="outlined" value={senhaAntiga} onChangeText={setSenhaAntiga} className="text-black text-sm w-80 h-10 mb-2"></TextInput>
            <TextInput label="Nova senha" mode="outlined" value={novaSenha} onChangeText={setNovaSenha} className="text-black text-sm w-80 h-10 mb-2"></TextInput>
            <TextInput label="Confirmar nova senha" mode="outlined" value={confirmarNovaSenha} onChangeText={setConfirmarNovaSenha} className="text-black text-sm w-80 h-10"></TextInput>
            <View className="flex gap-2 my-4">
                {loading ? <ActivityIndicator animating={true} color={MD2Colors.green500} size={40}/> : <Button onPress={changeRegisterData} mode='contained' className="bg-green-500 w-60">Alterar Dados</Button>}
                <Button onPress={()=>{router.push({
                    pathname: "/DeleteAccount"
                })}} mode='contained' className="bg-red-500 w-60">Desejo excluir minha conta</Button>
            </View>
            <Text className="text-xs">Em caso de problemas, denúncias ou mais, nos contate!</Text>
            <Text className="text-purple-700" onPress={()=>{Linking.openURL("mailto:mercadobmxbr@gmail.com?subject=Suporte")}}>mercadobmxbr@gmail.com</Text>
            <BottomBar screen="MenuScreen"></BottomBar>
        </View>
    )
}