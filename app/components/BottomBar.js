import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router"

export default function BottomBar(){
    return(
      <View className="absolute bg-white bottom-0 left-0 right-0 h-20 flex flex-row justify-center border-t-2">
        <TouchableOpacity>
          <Link className="flex items-center mx-4" href="/HomeScreen">
            <View className="flex items-center">
              <Image source={require('../../public/icons/homePNG.png')}></Image>
              <Text>Início</Text>
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link className="flex items-center mx-4" href="/CategoryScreen">
            <View className="flex items-center">
              <Image source={require('../../public/icons/categoryPNG.png')}></Image>
              <Text>Categorias</Text>
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link className="flex items-center mx-4" href="/SearchScreen">
            <View className="flex items-center">
              <Image source={require('../../public/icons/searchPNG.png')}></Image>
              <Text>Buscar</Text>
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link className="flex items-center mx-4" href="/FormAdScreen">
            <View className="flex items-center">
              <Image source={require('../../public/icons/addAd.png')}></Image>
              <Text>Anunciar</Text>
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link className="flex items-center mx-4" href="/MenuScreen">
            <View className="flex items-center">
              <Image source={require('../../public/icons/menuPNG.png')}></Image>
              <Text>Menu</Text>
            </View>
          </Link>
        </TouchableOpacity>
      </View>
    )
}