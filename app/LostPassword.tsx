import { ImageBackground, View, Text, TextInput, TouchableOpacity } from "react-native";
import Button from "./components/Button";
import { Link } from "expo-router";

export default function LostPassword(){
    return(
        <ImageBackground source={require('../public/images/brandWPP.jpg')}>
            <View className="flex justify-center items-center h-full ">
                <View className="bg-black p-12 rounded-lg flex items-center">
                    <Text className="text-sm text-white text-center">
                        Insira seu E-mail para recuperação de senha
                    </Text>
                    <View className="flex w-60 mt-4 mb-4">
                        <Text className="text-white">Email</Text>
                        <TextInput className="border-2 border-white p-1 rounded-lg text-white" placeholder="Insira aqui seu email"></TextInput>
                    </View>
                    <View className="flex gap-4 items-center">
                        <View>
                            <Link href="/EmailCode" asChild>
                                <TouchableOpacity className="bg-green-400 p-3 rounded-lg w-40">
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