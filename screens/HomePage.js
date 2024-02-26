import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HomePage() {

  const changePage = useNavigation();

    return(
    <View className="flex h-full justify-center items-center">
      <Image className="w-48 h-36" source={require('../public/images/bmxWTP.png')}></Image>
      <Text>Bem vindo ao Market Bmx Br</Text>
      <Text>Faça login ou cadastre-se para continuar!</Text>
      <View className="flex gap-4 my-4">
        <TouchableOpacity className="bg-black p-2 rounded-lg" onPress={()=>changePage.navigate('LoginScreen')}>
          <Text className="text-white text-center">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-black p-2 rounded-lg" onPress={()=>changePage.navigate('RegisterScreen')}>
          <Text className="text-white text-center">Cadastrar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
    )
}