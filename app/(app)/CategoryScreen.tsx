import { TouchableOpacity, View, ScrollView, Text, Image } from "react-native";
import BottomBar from "../components/BottomBar";
import {router} from "expo-router";

const images = [
    {
        image: require('../../public/images/categoryImages/abracadeira.png'),
        name: "Abraçadeiras",
        bdName: "Abraçadeira"
    },
    {
        image: require('../../public/images/categoryImages/aro.png'),
        name: "Aros",
        bdName: "Aro"
    },
    {
        image: require('../../public/images/categoryImages/Banco.png'),
        name: "Bancos",
        bdName: "Banco"
    },
    {
        image: require('../../public/images/categoryImages/barEnd.png'),
        name: "Bar Ends",
        bdName: "Bar Ends"
    },
    {
        image: require('../../public/images/categoryImages/bikeCompleta.png'),
        name: "Bikes Completas",
        bdName: "Bike Completa"
    },
    {
        image: require('../../public/images/categoryImages/camara.png'),
        name: "Câmaras",
        bdName: "Câmara"
    },
    {
        image: require('../../public/images/categoryImages/canote.png'),
        name: "Canotes",
        bdName: "Canote"
    },
    {
        image: require('../../public/images/categoryImages/coroa.png'),
        name: "Coroas",
        bdName: "Coroa"
    },
    {
        image: require('../../public/images/categoryImages/corrente.png'),
        name: "Correntes",
        bdName: "Corrente"
    },
    {
        image: require('../../public/images/categoryImages/cuboDianteiro.png'),
        name: "Cubos Dianteiros",
        bdName: "Cubo Dianteiro"
    },
    {
        image: require('../../public/images/categoryImages/cuboTraseiro.png'),
        name: "Cubos Traseiros",
        bdName: "Cubo Traseiro"
    },
    {
        image: require('../../public/images/categoryImages/outros.png'),
        name: "Diversos",
        bdName: "Diversos"
    },
    {
        image: require('../../public/images/categoryImages/eixo.png'),
        name: "Eixo Central",
        bdName: "Eixo Central"
    },
    {
        image: require('../../public/images/categoryImages/freio.png'),
        name: "Freios",
        bdName: "Freio"
    },
    {
        image: require('../../public/images/categoryImages/garfo.png'),
        name: "Garfos",
        bdName: "Garfo"
    },
    {
        image: require('../../public/images/categoryImages/guidao.png'),
        name: "Guidões",
        bdName: "Guidão"
    },
    {
        image: require('../../public/images/categoryImages/kitRotor.png'),
        name: "Kit Rotor",
        bdName: "Kit Rotor"
    },
    {
        image: require('../../public/images/categoryImages/manopla.png'),
        name: "Manoplas",
        bdName: "Manopla"
    },
    {
        image: require('../../public/images/categoryImages/mesa.png'),
        name: "Mesas",
        bdName: "Mesa"
    },
    {
        image: require('../../public/images/categoryImages/movCentral.png'),
        name: "Mov. Central",
        bdName: "Movimento Central"
    },
    {
        image: require('../../public/images/categoryImages/movDirecao.png'),
        name: "Mov. de Direção",
        bdName: "Movimento de Direção"
    },
    {
        image: require('../../public/images/categoryImages/pedal.png'),
        name: "Pedais",
        bdName: "Pedal"
    },
    {
        image: require('../../public/images/categoryImages/pedaleira.png'),
        name: "Pedaleiras",
        bdName: "Pedaleira"
    },
    {
        image: require('../../public/images/categoryImages/pedivela.png'),
        name: "Pedivelas",
        bdName: "Pedivela"
    },
    {
        image: require('../../public/images/categoryImages/pneu.png'),
        name: "Pneus",
        bdName: "Pneu"
    },
    {
        image: require('../../public/images/categoryImages/protetorCubo.png'),
        name: "Protetores",
        bdName: "Protetor"
    },
    {
        image: require('../../public/images/categoryImages/quadro.png'),
        name: "Quadros",
        bdName: "Quadro"
    },
    {
        image: require('../../public/images/categoryImages/raios.png'),
        name: "Raios",
        bdName: "Raios"
    },
]

export default function CategoryScreen(){
    return(
        <View className="h-full bg-white">
            <View>
                <ScrollView className="mb-12 pt-8" showsVerticalScrollIndicator={false}>
                    <View className="flex flex-row flex-wrap justify-center pb-8">
                    {images.map((item, index) => (
                        <TouchableOpacity className="p-4" key={index} onPress={()=>{
                            router.push({
                                pathname: "/CategorySearchList",
                                params: {
                                    category: item.bdName
                                    
                                }
                            })
                        }}>
                            <View className="bg-purple-700 rounded-lg p-2 w-40 h-48 flex items-center justify-center">
                                <Text className="text-white text-lg font-extrabold">{item.name}</Text>
                                <Image style={{resizeMode:"contain"}} className="w-36 h-36" source={item.image} />
                            </View>
                        </TouchableOpacity>
                    ))}
                    </View>
                </ScrollView>
            </View>
            <BottomBar></BottomBar>
        </View>
    )
}