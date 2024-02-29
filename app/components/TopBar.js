import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function TopBar(){

    const changePage = useNavigation();

    return(
        <View className="bg-blue-600 p-4">
            <TouchableOpacity onPress={()=>changePage.navigate('HomeScreen')}>
                <Image source={require('../../public/icons/arrowBackPNG.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}