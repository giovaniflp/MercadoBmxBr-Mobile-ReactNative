import { View, Text, Image, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function HomeAd(){

    const changePage = useNavigation();

    return(
        <TouchableOpacity className="border-2 border-black w-60 h-72 bg-white rounded-lg justify-center items-center mr-8" onPress={()=>changePage.navigate('FullAdScreen')}>
            <Image style={{resizeMode:"contain"}} className="w-52 h-28" source={require('../../public/images/guidaoOdyssey.png')}></Image>
            <Text className="text-center">Guidão Odyssey 4PCs</Text>
            <Text className="text-center">R$ 355</Text>
            <View className="flex flex-row gap-4">
                <Text className="text-cente">PE - Recife</Text>
                <Text className="text-cente">26/02/2024</Text>
            </View>
        </TouchableOpacity>
    )
}