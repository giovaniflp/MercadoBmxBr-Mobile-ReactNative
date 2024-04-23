import { View, Text, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import Button from "./components/Button";
import { Link } from "expo-router";

export default function ChangePassword(){
    return(
        <ImageBackground source={require('../public/images/brandWPP.jpg')}>
            <View className="flex justify-center items-center h-full ">
                <View className="bg-black p-12 rounded-lg flex items-center">
                    <Text className="text-sm text-white text-center">
                        Cadastre sua nova senha para sua conta
                    </Text>
                    <View className="flex w-60 mt-4 mb-4">
                        <Text className="text-white">Senha</Text>
                        <TextInput className="border-2 border-white p-1 rounded-lg text-white" placeholder="Insira aqui seu email"></TextInput>
                        <Text className="text-white">Confirme sua senha</Text>
                        <TextInput className="border-2 border-white p-1 rounded-lg text-white" placeholder="Insira aqui seu email"></TextInput>
                    </View>
                    
                    <View className="flex gap-4 items-center">
                        <View>
                            <Link href="/LoginScreen" asChild>
                                <TouchableOpacity onPress={()=>{alert("Senha cadastrada com sucesso!")}} className="bg-green-400 p-3 rounded-lg w-40">
                                    <Text className="text-white text-center">Enviar</Text>
                                </TouchableOpacity>
                            </Link>
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