import { router } from "expo-router";
import axiosInstance from "../server/axios";
import { useEffect, useState } from "react";
import { useSession } from "../../auth/ctx";
import BottomBar from "../components/BottomBar";
import * as SecureStore from 'expo-secure-store';
import { View, Text, Linking, Image, TouchableOpacity } from "react-native";
import { TextInput, Button, ActivityIndicator, MD2Colors } from "react-native-paper";
import { BannerAd, BannerAdSize, InterstitialAd } from "react-native-google-mobile-ads";

const interstitialAd = InterstitialAd.createForAdRequest("ca-app-pub-6872790638818192/4689583571")

interstitialAd.load()

export default function ChangeRegisterData(){

    const { signOut } = useSession();

    const [id, setId] = useState("");

    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    
    //Formulário de alteração de dados
    const [nomeNovo, setNomeNovo] = useState("");
    const [emailNovo, setEmailNovo] = useState("");
    const [senhaAntiga, setSenhaAntiga] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmarNovaSenha, setConfirmarNovaSenha] = useState("");

    //Visibilidade de senhas
    const [seeSenhaAntiga, setSeeSenhaAntiga] = useState(true);
    const [seeNovaSenha, setSeeNovaSenha] = useState(true);
    const [seeConfirmarNovaSenha, setSeeConfirmarNovaSenha] = useState(true);

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
            setNome(response.data.name);
            setEmail(response.data.sub);
            setId(response.data.jti);
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getName();
        interstitialAd.load()
    }, [])

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
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!emailNovo.match(emailRegex)){
                    alert("Insira um email valido! Formatação: email@email.com")
                } else {
                    if(nomeNovo == "" && senhaAntiga == "" && novaSenha == "" && confirmarNovaSenha == ""){
                        await axiosInstance.patch("/api/users/patch/" + id, requestData, config)
                        alert("Agora, verifique seu email para trocá-lo!")
                        if(interstitialAd.loaded){
                            interstitialAd.show();
                        }
                        router.push({
                            pathname: "/EmailChangeVerification",
                            params: {
                                newEmail: emailNovo
                            }
                        });
                    }
                    if(nomeNovo && nomeNovo != "" && senhaAntiga == "" && novaSenha == "" && confirmarNovaSenha == ""){
                        await axiosInstance.patch("/api/users/patch/" + id, requestData, config)
                        alert("Nome alterado com sucesso, agora, verifique seu email para trocá-lo!")
                        if(interstitialAd.loaded){
                            interstitialAd.show();
                        }
                        router.push({
                            pathname: "/EmailChangeVerification",
                            params: {
                                newEmail: emailNovo
                            }
                        });
                    }
                    if(nomeNovo && nomeNovo != "" && senhaAntiga != "" && novaSenha != "" && confirmarNovaSenha != ""){
                        if(novaSenha != confirmarNovaSenha){
                            alert("As senhas não coincidem.")
                        }
                        if(senhaAntiga == novaSenha){
                            alert("A nova senha precisa ser diferente da atual.")
                        }
                        else{
                            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,16}$/;
                            if(!novaSenha.match(passwordRegex)){
                                alert("A senha deve conter o mínimo de 6 caracteres, máximo de 16 e ao menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial! Exemplo: #Pedro123")
                            } else{
                                await axiosInstance.patch("/api/users/patch/" + id, requestData, config).then((response) => {
                                        alert("Nome e senha alterados com sucesso, agora, verifique seu email para trocá-lo!")
                                        if(interstitialAd.loaded){
                            interstitialAd.show();
                        }
                                        router.push({
                                        pathname: "/EmailChangeVerification",
                                        params: {
                                            newEmail: emailNovo
                                        }
                                        });
                                }).catch((error)=>{
                                    alert("Senha antiga incorreta!")
                                })
                            }
                        }
                    }
                    if(nomeNovo && nomeNovo != "" && senhaAntiga != "" && novaSenha == "" && confirmarNovaSenha == ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(nomeNovo && nomeNovo != "" && senhaAntiga == "" && novaSenha != "" && confirmarNovaSenha == ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(nomeNovo && nomeNovo != "" && senhaAntiga == "" && novaSenha == "" && confirmarNovaSenha != ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(nomeNovo && nomeNovo != "" && senhaAntiga == "" && novaSenha != "" && confirmarNovaSenha != ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(nomeNovo && nomeNovo != "" && senhaAntiga != "" && novaSenha == "" && confirmarNovaSenha != ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(nomeNovo && nomeNovo != "" && senhaAntiga != "" && novaSenha != "" && confirmarNovaSenha == ""){
                        alert("Prencha os outros campos de senha")
                    }
                }
            } else{
                if(nomeNovo && nomeNovo != ""){
                    if(senhaAntiga == "" && novaSenha == "" && confirmarNovaSenha == ""){
                        await axiosInstance.patch("/api/users/patch/" + id, requestData, config)
                        alert("Nome alterado com sucesso!")
                        if(interstitialAd.loaded){
                            interstitialAd.show();
                        }
                        signOut()
                    }
                    if(senhaAntiga != "" && novaSenha != "" && confirmarNovaSenha != ""){
                        if(novaSenha != confirmarNovaSenha){
                            alert("As senhas não coincidem.")
                        }
                        if(senhaAntiga == novaSenha){
                            alert("A nova senha precisa ser diferente da atual.")
                        } else{
                            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,16}$/;
                            if(!novaSenha.match(passwordRegex)){
                                alert("A senha deve conter o mínimo de 6 caracteres, máximo de 16 e ao menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial! Exemplo: #Pedro123")
                            } else{
                                await axiosInstance.patch("/api/users/patch/" + id, requestData, config).then((response) => {
                                    alert("Nome e senha alterados com sucesso!")
                                    if(interstitialAd.loaded){
                            interstitialAd.show();
                        }
                                    signOut()
                            }).catch((error)=>{
                                alert("Senha antiga incorreta!")
                            })
                            }
                        }
                    }
                    if(senhaAntiga != "" && novaSenha == "" && confirmarNovaSenha == ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(senhaAntiga == "" && novaSenha != "" && confirmarNovaSenha == ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(senhaAntiga == "" && novaSenha == "" && confirmarNovaSenha != ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(senhaAntiga == "" && novaSenha != "" && confirmarNovaSenha != ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(senhaAntiga != "" && novaSenha == "" && confirmarNovaSenha != ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(senhaAntiga != "" && novaSenha != "" && confirmarNovaSenha == ""){
                        alert("Prencha os outros campos de senha")
                    }
                }
                if(nomeNovo == ""){
                    if(senhaAntiga != "" && novaSenha != "" && confirmarNovaSenha != ""){
                        if(novaSenha != confirmarNovaSenha){
                            alert("As senhas não coincidem.")
                        }
                        if(senhaAntiga == novaSenha){
                            alert("A nova senha precisa ser diferente da atual.")
                        } else{
                            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,16}$/;
                            if(!novaSenha.match(passwordRegex)){
                                alert("A senha deve conter o mínimo de 6 caracteres, máximo de 16 e ao menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial! Exemplo: #Pedro123")
                            } else{
                                await axiosInstance.patch("/api/users/patch/" + id, requestData, config).then((response) => {
                                    alert("Senha alterada com sucesso!")
                                    if(interstitialAd.loaded){
                            interstitialAd.show();
                        }
                                    signOut()
                            }).catch((error)=>{
                                alert("Senha antiga incorreta!")
                            })
                            }
                        }
                    }
                    if(senhaAntiga != "" && novaSenha == "" && confirmarNovaSenha == ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(senhaAntiga == "" && novaSenha != "" && confirmarNovaSenha == ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(senhaAntiga == "" && novaSenha == "" && confirmarNovaSenha != ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(senhaAntiga == "" && novaSenha != "" && confirmarNovaSenha != ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(senhaAntiga != "" && novaSenha == "" && confirmarNovaSenha != ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(senhaAntiga != "" && novaSenha != "" && confirmarNovaSenha == ""){
                        alert("Prencha os outros campos de senha")
                    }
                    if(senhaAntiga == "" && novaSenha == "" && confirmarNovaSenha == ""){
                        alert("Você não preencheu nada.")
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
            <Text className="text-3xl">Alteração de cadastro</Text>
            <Text className="mb-4">Altere apenas os dados que quiser</Text>
            <TextInput label={"Nome atual: " + nome} mode="outlined" className="text-black text-sm w-80 h-10 mb-2" value={nomeNovo} onChangeText={setNomeNovo}></TextInput>
            <TextInput label={"Email atual: " + email} mode="outlined" className="text-black text-sm w-80 h-10 mb-2" value={emailNovo} onChangeText={setEmailNovo}></TextInput>
            <View className="relative">
                <TextInput maxLength={16} secureTextEntry={seeSenhaAntiga} label="Senha antiga" mode="outlined" value={senhaAntiga} onChangeText={setSenhaAntiga} className="text-black text-sm w-80 h-10 mb-2"></TextInput>
                <TouchableOpacity onPress={()=>setSeeSenhaAntiga(!seeSenhaAntiga)} className="absolute right-3 top-3">
                    <Image className="w-8 h-8" source={seeSenhaAntiga ? require("../../public/icons/hidePng.png") : require("../../public/icons/visibilityPng.png")}></Image>
                </TouchableOpacity>
            </View>
            <View className="relative">
                <TextInput maxLength={16} secureTextEntry={seeNovaSenha} label="Nova senha" mode="outlined" value={novaSenha} onChangeText={setNovaSenha} className="text-black text-sm w-80 h-10 mb-2"></TextInput>
                <TouchableOpacity onPress={()=>setSeeNovaSenha(!seeNovaSenha)} className="absolute right-3 top-3">
                    <Image className="w-8 h-8" source={seeNovaSenha ? require("../../public/icons/hidePng.png") : require("../../public/icons/visibilityPng.png")}></Image>
                </TouchableOpacity>
            </View>
            <View className="relative">
                <TextInput maxLength={16} secureTextEntry={seeConfirmarNovaSenha} label="Confirmar nova senha" mode="outlined" value={confirmarNovaSenha} onChangeText={setConfirmarNovaSenha} className="text-black text-sm w-80 h-10"></TextInput>
                <TouchableOpacity onPress={()=>setSeeConfirmarNovaSenha(!seeConfirmarNovaSenha)} className="absolute right-3 top-3">
                    <Image className="w-8 h-8" source={seeConfirmarNovaSenha ? require("../../public/icons/hidePng.png") : require("../../public/icons/visibilityPng.png")}></Image>
                </TouchableOpacity>
            </View>
            <View className="flex gap-2 my-4">
                {loading ? <ActivityIndicator animating={true} color={MD2Colors.green500} size={40}/> : <Button onPress={changeRegisterData} mode='contained' className="bg-green-500 w-60">Alterar Dados</Button>}
                <Button onPress={()=>{
                        interstitialAd.show()
                        .then(()=>{
                        router.push({
                        pathname: "/DeleteAccount"
                    })
                    }).catch((error)=>{
                        console.log('AdMob failed to show', error)
                        alert("Erro ao tentar exibir anúncio, tente novamente!")
                    })
                }} mode='contained' className="bg-red-500 w-60">Desejo excluir minha conta</Button>
            </View>
            <Text className="text-xs">Em caso de problemas, denúncias ou mais, nos contate!</Text>
            <Text className="text-purple-700 mb-10" onPress={()=>{Linking.openURL("mailto:mercadobmxbr@gmail.com?subject=Suporte")}}>mercadobmxbr@gmail.com</Text>
            <View className="flex justify-center items-center mb-10">
                <BannerAd unitId="ca-app-pub-6872790638818192/6001847009" size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}></BannerAd>
            </View>
            <BottomBar screen="MenuScreen"></BottomBar>
        </View>
    )
}