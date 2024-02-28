import React from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen(){

    const changePage = useNavigation();

    return(
        <ImageBackground source={require('../public/images/brandWPP.jpg')}>
            <View className="flex justify-center items-center h-full">
                <View className="bg-black p-12 rounded-lg">
                    <Text className="text-3xl text-white text-center">
                        Faça seu login!
                    </Text>
                    <View className="flex w-60 mt-4">
                        <Text className="text-white">Email</Text>
                        <TextInput className="border-2 border-white p-1 rounded-lg text-white" placeholder="Insira aqui seu email"></TextInput>
                    </View>
                    <View className="flex w-60 mt-4">
                        <Text className="text-white">Senha</Text>
                        <TextInput className="border-2 border-white p-1 rounded-lg text-white" placeholder="Insira aqui sua senha" secureTextEntry={true}></TextInput>
                    </View>
                    <View className="py-4">
                        <TouchableOpacity>
                            <Text className="text-blue-400">Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View className="bg-white p-2 rounded-lg">
                        <TouchableOpacity className="" onPress={()=>changePage.navigate('HomeScreen')}>
                            <Text className="text-center">Entrar</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="bg-white p-2 rounded-lg mt-4">
                        <TouchableOpacity className="" onPress={()=>changePage.navigate('HomePage')}>
                            <Text className="text-center">Tela Principal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}