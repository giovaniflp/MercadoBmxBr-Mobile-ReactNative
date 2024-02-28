import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HomePage() {

  const changePage = useNavigation();

    return(
      <ImageBackground source={require('../public/images/wpp3.jpg')}>
        <View className="flex h-full justify-end pb-36 items-center">
          <Text className="text-2xl text-black">Bem-vindo ao Market Bmx Br</Text>
          <Text className="mb-6 text-black">O lugar para achar suas próximas peças</Text>
          <Text className="text-sm text-black">Faça login ou cadastre-se para continuar!</Text>
          <View className="flex gap-4 my-4">
            <TouchableOpacity className="bg-white p-3 rounded-lg w-40" onPress={()=>changePage.navigate('LoginScreen')}>
              <Text className=" text-center">Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white p-3 rounded-lg w-40" onPress={()=>changePage.navigate('RegisterScreen')}>
              <Text className=" text-center">Cadastrar</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    )
}