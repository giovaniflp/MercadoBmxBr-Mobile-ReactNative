import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen(){

    const changePage = useNavigation();

    return(
        <View className="flex justify-center items-center h-full">
            <Text>
                Faça seu login!
            </Text>
            <View>
                <Text>Email</Text>
                <TextInput placeholder="Insira aqui seu email"></TextInput>
            </View>
            <View>
                <Text>Senha</Text>
                <TextInput placeholder="Insira aqui sua senha" secureTextEntry={true}></TextInput>
            </View>
            <View>
                <TouchableOpacity className="" onPress={()=>changePage.navigate('HomePage')}>
                    <Text>Home Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}