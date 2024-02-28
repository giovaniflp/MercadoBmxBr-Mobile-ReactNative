import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";

export default function FullAdScreen(){
    return(
        <View className="flex h-full mt-8 bg-white">
            <TopBar></TopBar>
            <ScrollView>
                <View className="mb-24">
                    <Image style={{resizeMode:"contain"}} className="w-full h-40 bg-red-300" source={require('../public/images/guidaoOdyssey.png')}></Image>
                    <View>
                        <Text>Guidão Odyssey 49ER</Text>
                        <Text>R$ 355</Text>
                        <Text>PE - Recife</Text>
                        <Text>26/02/2024</Text>             
                    </View>
                    <View className="mt-4">
                        <Text>Características e Especificações</Text>
                        <Text>Categoria - Guidão</Text>
                        <Text>Marca - Odyssey</Text>
                        <Text>Cor - Preto</Text>
                        <Text>Peso - 1,035 Kg</Text>
                        <Text>Material - Cr-Mo</Text>
                        <Text>Tipo de guidão - 4 peças</Text>
                        <Text>Largura - 29 polegadas</Text>
                        <Text>Elevação: 1,5"</Text>
                        <Text>Upsweep: 9°</Text>
                        <Text>Backsweep: 12°</Text>
                        <Text>Diâmetro do grampo - 22,2 mm</Text>
                    </View>
                    <View className="mt-4">
                        <Text>Anunciado por Giovani Feitosa</Text>
                        <Text>Fale com o vendedor:</Text>
                        <TouchableOpacity>
                            <Image style={{resizeMode:"contain"}} className="w-10 h-10" source={require('../public/icons/whatsapp.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            
            <BottomBar></BottomBar>
        </View>
    )
}