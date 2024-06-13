import { useState } from "react";
import axiosInstance from "./server/axios";
import { Link, router, useLocalSearchParams } from "expo-router";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Button, TextInput, ActivityIndicator, MD2Colors } from "react-native-paper";

export default function EmailCodeActivation(){

    const {emailParam} = useLocalSearchParams()

    const[email, setEmail] = useState(emailParam)
    const[code, setCode] = useState("")

    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)

    const sendEmailCode = async() =>{
        setLoading(true)
        try{
            await axiosInstance.post("/api/users/sendCode", {email: email}).then((response) => {
                console.log(response)
                alert("Código enviado com sucesso! Verifique seu email!")
            }).catch((error) => {
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
            await axiosInstance.post("/api/users/activate", {email: email, code: code}).then((response) => {
                if(response.status == 200){
                    alert("Conta ativada com sucesso!")
                    router.push({
                        pathname: "/LoginScreen",
                        params: { emailLoginParam: email },
                    })
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
        <ImageBackground source={require('../public/images/brandWPP.jpeg')}>
            <View className="flex h-full justify-center items-center">
                <View className="bg-white p-12 rounded-lg flex items-center">
                    <Text className="text-sm text-black text-center">
                        Insira o seu Email e o código recebido nele para validar sua conta!
                    </Text>
                    <View className="flex items-center gap-3 w-60 mt-4 mb-4">
                        <TextInput label="E-mail" mode="outlined" value={email} onChangeText={setEmail} className="text-black text-sm w-60" placeholder="Insira aqui seu email registrado"></TextInput>
                        <TextInput label="Código" mode="outlined" value={code} onChangeText={setCode} className="text-black text-sm w-60" placeholder="Insira aqui seu código recebido"></TextInput>
                    </View>
                    <View className="flex gap-3 items-center">
                        <View>
                            {loading ? <ActivityIndicator animating={true} color={MD2Colors.green500} size={40}/> : <Button onPress={sendEmailCode} mode='contained' className='w-40 bg-green-500' textColor='white'>Enviar Código</Button>}  
                        </View>
                        <View>
                            {loading2 ? <ActivityIndicator animating={true} color={MD2Colors.purple500} size={40}/> : <Button onPress={activateAccount} mode='contained' className='w-40 bg-purple-500' textColor='white'>Ativar Conta</Button>}
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