import { View, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router"

export default function TopBar(){

    return(
        <View className="bg-blue-600 p-4">
            <Link href="/HomeScreen" asChild>
                <TouchableOpacity>
                    <Image source={require('../../public/icons/arrowBackPNG.png')}></Image>
                </TouchableOpacity>
            </Link>
        </View>
    )
}