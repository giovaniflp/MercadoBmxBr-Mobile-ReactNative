import { View, Text, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import Button from "./components/Button";
import { Link } from "expo-router";

export default function EmailCode(){
    return(
        <ImageBackground source={require('../public/images/brandWPP.jpg')}>
            <View className="flex h-full justify-center items-center">
                <View className="bg-black p-12 rounded-lg flex items-center">
                    <Text className="text-sm text-white text-center">
                        Insira o código enviado para o seu email
                    </Text>
                    <View className="flex w-60 mt-4 mb-4">
                        <Text className="text-white">Código</Text>
                        <TextInput className="border-2 border-white p-1 rounded-lg text-white" placeholder="Insira aqui seu código"></TextInput>
                    </View>
                    <View className="flex gap-4 items-center">
                        <View>
                            <Link href="/ChangePassword" asChild>
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