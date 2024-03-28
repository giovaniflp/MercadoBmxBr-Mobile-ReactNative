import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router"

export default function BottomBar(){
    return(
      <View className="absolute bg-white bottom-0 left-0 right-0 flex flex-row justify-around border-t-2 p-3">
        <Link href="/HomeScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image source={require('../../public/icons/homePNG.png')}></Image>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="/CategoryScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image source={require('../../public/icons/gridPNG.png')}></Image>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="/SearchScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image source={require('../../public/icons/searchPNG.png')}></Image>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="/FormAdScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image source={require('../../public/icons/addAd.png')}></Image>
            </View>
          </TouchableOpacity>
        </Link>
        <Link href="/MenuScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image source={require('../../public/icons/menuPNG.png')}></Image>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    )
}