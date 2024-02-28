import { View, TextInput, TouchableOpacity, Image, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function SearchScreen(){

    const changePage = useNavigation();

    return(
        <View className="flex h-full mt-8 p-4">
            <TextInput className="border-2 border-black p-1 rounded-lg" placeholder="Buscar"></TextInput>
            <View className="absolute bottom-0 left-0 right-0 h-20 flex flex-row justify-center border-t-2">
        <TouchableOpacity className="flex items-center mx-4" onPress={()=>changePage.navigate('AppMain')}>
          <Image source={require('../public/icons/homePNG.png')}></Image>
          <Text>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center mx-4">
          <Image source={require('../public/icons/categoryPNG.png')}></Image>
          <Text>Categorias</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center mx-4" onPress={()=>changePage.navigate('SearchScreen')}>
          <Image source={require('../public/icons/searchPNG.png')}></Image>
          <Text>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex items-center mx-4">
          <Image source={require('../public/icons/menuPNG.png')}></Image>
          <Text>Menu</Text>
        </TouchableOpacity>
      </View>
        </View>
    )
}