import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import Button from "./components/Button";
import { Link } from "expo-router"

export default function RegisterScreen(){
    return(
        <ImageBackground source={require('../public/images/brandWPP.jpg')}>
            <View className="flex justify-center items-center h-full">
                <View className="bg-black p-12 rounded-lg">
                    <Text className="text-white text-center text-3xl">
                        Faça seu cadastro!
                    </Text>
                    <View className="my-4">
                        <Text className="text-white">Nome</Text>
                        <TextInput className="text-white border-2 border-white rounded-lg p-1" placeholder="Insira aqui seu nome"></TextInput>
                    </View>
                    <View className="mb-4">
                        <Text className="text-white">Email</Text>
                        <TextInput className="text-white border-2 border-white rounded-lg p-1" placeholder="Insira aqui seu email" inputMode="email"></TextInput>
                    </View>
                    <View className="mb-4">
                        <Text className="text-white">Senha</Text>
                        <TextInput className="text-white border-2 border-white rounded-lg p-1" placeholder="Insira aqui sua senha" secureTextEntry={true}></TextInput>
                    </View>
                    <View className="mb-4">
                        <Text className="text-white">Confirme sua senha</Text>
                        <TextInput className="text-white border-2 border-white rounded-lg p-1" placeholder="Insira aqui sua senha novamente" secureTextEntry={true}></TextInput>
                    </View>
                    <View className="flex items-center gap-4">
                        <View>
                            <Button text="Cadastrar" route="/" color="blue"></Button>
                        </View>
                        <View>
                            <Button text="Tela Principal" route="/"></Button>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}