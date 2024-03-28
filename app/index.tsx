import React, {useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Button from './components/Button';


export default function HomePage() {
  
  useEffect(() => {
    ImagePicker.requestMediaLibraryPermissionsAsync();
    ImagePicker.requestCameraPermissionsAsync();
  }, [])

    return(
      <ImageBackground source={require('../public/images/wpp3.jpg')}>
        <View className="flex h-full justify-end pb-32 items-center">
          <Text className="text-2xl text-black">Bem-vindo ao Market Bmx Br</Text>
          <Text className="mb-6 text-black">O lugar para achar suas próximas peças</Text>
          <Text className="text-sm text-black">Faça login ou cadastre-se para continuar!</Text>
          <View className="flex gap-4 my-4">
            <View>
              <Button text="Entrar" color="blue" route="LoginScreen"></Button>
            </View>
            <View>
              <Button text="Cadastrar" color="blue" route="RegisterScreen"></Button>
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    )
}