import { View, TextInput } from "react-native";
import BottomBar from "./components/BottomBar";
import HomeAd from "./components/HomeAd";
import { Link } from "expo-router"

export default function SearchScreen(){


    return(
        <View className="flex h-full mt-8 p-4">
            <TextInput className="border-2 border-black p-1 rounded-lg mb-4" placeholder="Buscar"></TextInput>
            <View>
                <HomeAd></HomeAd>
            </View>
            <BottomBar></BottomBar>
        </View>
    )
}