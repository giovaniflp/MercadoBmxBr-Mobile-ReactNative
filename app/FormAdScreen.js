import { View, Text } from "react-native";
import { useState } from "react/cjs/react.development";

import BottomBar from "./components/BottomBar";
import {Picker} from '@react-native-picker/picker';
import { Link } from "expo-router"

export default function FormAdScreen(){

    const [selectedCategory, setSelectedCategory] = useState();

    return(
        <View className="h-full mt-8">
            <View className="border-2 m-4 rounded-lg">
                <Picker selectedValue={selectedCategory} onValueChange={(itemValue, itemIndex)=> setSelectedCategory(itemValue)}>
                    <Picker.Item label="Selecione uma categoria"></Picker.Item>
                    <Picker.Item label="Guidão" value="guidao"></Picker.Item>
                    <Picker.Item label="Quadro" value="quadro"></Picker.Item>
                </Picker>
            </View>
            <BottomBar></BottomBar>
        </View>
    )
}