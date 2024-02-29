import { View, Text } from "react-native";

import BottomBar from "./components/BottomBar";

export default function FormAdScreen(){
    return(
        <View className="h-full mt-8">
            <View>
                <Text className="p-4">Faça aqui seu anúncio</Text>
            </View>
            <BottomBar></BottomBar>
        </View>
    )
}