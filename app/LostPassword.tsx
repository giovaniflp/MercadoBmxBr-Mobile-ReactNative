import { ImageBackground, View, Text,  TouchableOpacity } from "react-native";
import { Button, TextInput, ActivityIndicator, MD2Colors } from "react-native-paper";
import { router, Link } from "expo-router";
import { useState } from "react";
import axiosInstance from "./server/axios";

export default function LostPassword(){

    const[email, setEmail] = useState("")

    const [loading, setLoading] = useState(false);

    const sendEmailCode = async() =>{
        setLoading(true)
        try{
            const response = await axiosInstance.post("/api/users/lostPassword", {email: email})
            if(response.status == 200){
                alert("Verifique seu E-mail!")
                router.push("/LoginScreen")
            } else {
                alert("Erro ao enviar email!")
            }
        } catch(error){
            alert("Erro ao enviar email!")
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

    return(
        <ImageBackground source={require('../public/images/brandWPP.jpeg')}>
            <View className="flex justify-center items-center h-full ">
                <View className="bg-white p-8 rounded-lg flex items-center">
                    <Text className="text-sm text-black text-center">
                        Insira seu E-mail para recuperação de senha
                    </Text>
                    <View className="flex w-60 mt-4 mb-4">
                        <TextInput mode="outlined" label="E-mail" value={email} onChangeText={setEmail} className="text-white text-sm" placeholder="Insira aqui seu email"></TextInput>
                    </View>
                    <View className="flex gap-4 items-center">
                        <View>
                            {loading ? <ActivityIndicator animating={true} color={MD2Colors.green500} size={40}/> : <Button onPress={sendEmailCode} mode='contained' className='w-40 bg-green-500' textColor='white'>Enviar</Button>}
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