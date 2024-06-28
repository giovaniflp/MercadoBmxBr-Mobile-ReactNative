import { Link, router } from 'expo-router';
import React, {useEffect} from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Button, Text } from 'react-native-paper';
import { View, ImageBackground } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import mobileAds, { AppOpenAd } from 'react-native-google-mobile-ads';

const appOpenAd = AppOpenAd.createForAdRequest("ca-app-pub-6872790638818192/4593827764")

export default function HomePage() {

  const getSecureStore = async () => {
    const token = await SecureStore.getItemAsync('session');
    if(token != null){
      router.push("/HomeScreen");
    }
    console.log(token);
  }

  const adExibition = async () => {
    mobileAds().initialize().then(()=>{
      appOpenAd.load()
      if(appOpenAd.loaded){
        appOpenAd.show()
      }
    }).catch((error)=>{
      console.log('AdMob failed to initialize', error)
    })
  }

  useEffect(() => {
    getSecureStore();
  })
  
  useEffect(() => {
    ImagePicker.requestMediaLibraryPermissionsAsync();
    ImagePicker.requestCameraPermissionsAsync();

    adExibition();

  }, [])

    return(
      <ImageBackground source={require('../public/images/brandWPP.jpeg')}>
        <View></View>
        <View className="flex h-full justify-end pb-28 items-center">
          <View className='bg-white w-full absolute py-14 rounded-t-3xl'>
            <Text className="text-2xl text-black text-center">Bem-vindo ao Mercado Bmx Br</Text>
            <Text className="mb-6 text-purple-700 text-center">O lugar para achar suas próximas peças</Text>
            <Text className="text-sm text-black text-center">Faça login ou cadastre-se para continuar!</Text>
            <View className="flex gap-3 my-4 items-center">
              <View>
                <Link href="/LoginScreen" asChild>
                  <Button mode='contained' className='w-60 bg-purple-700' textColor='white'>Entrar</Button>
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