import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function BottomBar(){
    
    const changePage = useNavigation();
    
    return(
        <View className="absolute bg-white bottom-0 left-0 right-0 h-20 flex flex-row justify-center border-t-2">
        <TouchableOpacity className="flex items-center mx-4" onPress={()=>changePage.navigate('HomeScreen')}>
          <Image source={require('../../public/icons/homePNG.png')}></Image>
          <Text>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center mx-4" onPress={()=>changePage.navigate('CategoryScreen')}>
          <Image source={require('../../public/icons/categoryPNG.png')}></Image>
          <Text>Categorias</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center mx-4" onPress={()=>changePage.navigate('SearchScreen')}>
          <Image source={require('../../public/icons/searchPNG.png')}></Image>
          <Text>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center mx-4" onPress={()=>changePage.navigate('MenuScreen')}>
          <Image source={require('../../public/icons/menuPNG.png')}></Image>
          <Text>Menu</Text>
        </TouchableOpacity>
      </View>
    )
}