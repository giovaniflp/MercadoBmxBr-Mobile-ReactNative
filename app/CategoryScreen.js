import { View } from "react-native";
import Category from "./components/Category";
import BottomBar from "./components/BottomBar";
import { Link } from "expo-router"

export default function CategoryScreen(){
    return(
        <View className="h-full mt-8">
            <Category></Category>
            <BottomBar></BottomBar>
        </View>
    )
}