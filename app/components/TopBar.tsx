import { View, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router"

export default function TopBar(){

    return(
        <View className="bg-blue-600 p-4 flex flex-row items-center justify-between">
            <Link href="/HomeScreen" asChild>
                <TouchableOpacity>
                    <Image source={require('../../public/icons/arrowBackPNG.png')}></Image>
                </TouchableOpacity>
            </Link>
            <TouchableOpacity>
                    <Image source={require('../../public/icons/favoritePNG.png')}></Image>
            </TouchableOpacity>
        </View>
    )
}