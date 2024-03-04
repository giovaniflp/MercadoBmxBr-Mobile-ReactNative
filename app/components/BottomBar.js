import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router"

export default function BottomBar(){
    return(
      <View className="absolute bg-white bottom-0 left-0 right-0 h-20 flex flex-row justify-center border-t-2">
        <Link href="/HomeScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image source={require('../../public/icons/homePNG.png')}></Image>
              <Text>Início</Text>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="/CategoryScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image source={require('../../public/icons/categoryPNG.png')}></Image>
              <Text>Categorias</Text>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="/SearchScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image source={require('../../public/icons/searchPNG.png')}></Image>
              <Text>Buscar</Text>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="/FormAdScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image source={require('../../public/icons/addAd.png')}></Image>
              <Text>Anunciar</Text>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="/MenuScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image source={require('../../public/icons/menuPNG.png')}></Image>
              <Text>Menu</Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    )
}