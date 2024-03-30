import { View, Image, Text, TouchableOpacity } from "react-native";
import BottomBar from "./components/BottomBar";
import Button from "./components/Button";

export default function MenuScreen(){
    return(
        <View className="flex items-center h-full">
            <TouchableOpacity>
                <Image className="w-40 h-40 mt-2" source={require('../public/icons/accCircle.png')}></Image>
            </TouchableOpacity>
            <Text className="text-4xl mt-4">Giovani Feitosa</Text>
            <View className="my-4">
                <Button route="/" text="Alterar Nome" color="blue"></Button>
            </View>
            <View>
                <Button route="/" text="Alterar Senha" color="blue"></Button>
            </View>
            <View className="mt-4">
                <Button route="/" text="Termos de Uso" color="blue"></Button>
            </View>
            <View className="mt-4">
                <Button route="/" text="Meus anúncios" color="green"></Button>
            </View>
            <View className="my-4">
                <Button route="/" text="Sair" color="red"></Button>
            </View>
            <BottomBar></BottomBar>
        </View>
    )
}