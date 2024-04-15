import { View } from "react-native";
import Category from "../components/Category";
import BottomBar from "../components/BottomBar";

export default function CategoryScreen(){
    return(
        <View className="h-full">
            <Category></Category>
            <BottomBar></BottomBar>
        </View>
    )
}