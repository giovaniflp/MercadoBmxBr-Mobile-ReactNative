import React from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router"

export default function BottomBar({screen}: {screen: string}){
    return(
      <View className="absolute bg-white bottom-0 left-0 right-0 flex flex-row justify-around items-center border-t-2 p-3">
        { screen == "HomeScreen" ? 
        <Link href="/HomeScreen" asChild>
        <TouchableOpacity className="flex items-center mx-4">
          <View className="flex items-center">
            <Image className='w-8 h-8' source={require('../../public/icons/purpleHome.png')}></Image>
          </View>
        </TouchableOpacity>
      </Link> : <Link href="/HomeScreen" asChild>
        <TouchableOpacity className="flex items-center mx-4">
          <View className="flex items-center">
            <Image className='w-8 h-8' source={require('../../public/icons/homePNG.png')}></Image>
          </View>
        </TouchableOpacity>
      </Link> }
      { screen == "CategoryScreen" ? <Link href="/CategoryScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image className='w-8 h-8' source={require('../../public/icons/purpleGrid.png')}></Image>
            </View>
          </TouchableOpacity>
        </Link> : <Link href="/CategoryScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image className='w-8 h-8' source={require('../../public/icons/gridPNG.png')}></Image>
            </View>
          </TouchableOpacity>
        </Link>}
        { screen == "FormAdScreen" ? <Link href="/FormAdScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image className='w-8 h-8' source={require('../../public/icons/purpleAd.png')}></Image>
            </View>
          </TouchableOpacity>
        </Link> : <Link href="/FormAdScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image className='w-8 h-8' source={require('../../public/icons/addAd.png')}></Image>
            </View>
          </TouchableOpacity>
        </Link>}
        { screen == "MenuScreen" ? <Link href="/MenuScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image className='w-8 h-8' source={require('../../public/icons/purpleMenu.png')}></Image>
            </View>
          </TouchableOpacity>
        </Link> : <Link href="/MenuScreen" asChild>
          <TouchableOpacity className="flex items-center mx-4">
            <View className="flex items-center">
              <Image className='w-8 h-8' source={require('../../public/icons/menuPNG.png')}></Image>
            </View>
          </TouchableOpacity>
        </Link>}
      </View>
    )
}