import React, {useEffect} from 'react';
import { Button, Text } from 'react-native-paper';
import { View, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Link } from 'expo-router';


export default function HomePage() {
  
  useEffect(() => {
    ImagePicker.requestMediaLibraryPermissionsAsync();
    ImagePicker.requestCameraPermissionsAsync();
  }, [])

    return(
      <ImageBackground source={require('../public/images/wpp3.jpg')}>
        <View className="flex h-full justify-end pb-28 items-center">
          <View className='bg-white w-full absolute py-14 rounded-t-3xl'>
            <Text className="text-2xl text-black text-center">Bem-vindo ao Mercado Bmx Br</Text>
            <Text className="mb-6 text-purple-700 text-center">O lugar para achar suas próximas peças</Text>
            <Text className="text-sm text-black text-center">Faça login ou cadastre-se para continuar!</Text>
            <View className="flex gap-3 my-4 items-center">
              <View>
                <Link href="/LoginScreen" asChild>
                  <Button mode='contained' className='w-60' textColor='white'>Entrar</Button>
                </Link>
              </View>
              <Link href="/RegisterScreen" asChild>
                  <Button mode='contained' className='w-60 bg-black' textColor='white'>Registrar</Button>
                </Link>
            </View>
          </View>
        </View>
      </ImageBackground>
    )
}