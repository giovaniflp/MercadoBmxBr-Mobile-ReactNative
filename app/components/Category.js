import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";

const images = [
    {
        image: require('../../public/images/categoryImages/abracadeira.png'),
        name: "Abracadeiras"
    },
    {
        image: require('../../public/images/categoryImages/aro.png'),
        name: "Aros"
    },
    {
        image: require('../../public/images/categoryImages/Banco.png'),
        name: "Bancos"
    },
    {
        image: require('../../public/images/categoryImages/barEnd.png'),
        name: "Bar Ends"
    },
    {
        image: require('../../public/images/categoryImages/bikeCompleta.png'),
        name: "Bikes Completas"
    },
    {
        image: require('../../public/images/categoryImages/camara.png'),
        name: "Câmaras"
    },
    {
        image: require('../../public/images/categoryImages/canote.png'),
        name: "Canotes"
    },
    {
        image: require('../../public/images/categoryImages/coroa.png'),
        name: "Coroas"
    },
    {
        image: require('../../public/images/categoryImages/corrente.png'),
        name: "Correntes"
    },
    {
        image: require('../../public/images/categoryImages/cuboDianteiro.png'),
        name: "Cubos Dianteiros"
    },
    {
        image: require('../../public/images/categoryImages/cuboTraseiro.png'),
        name: "Cubos Traseiros"
    },
    {
        image: require('../../public/images/categoryImages/outros.png'),
        name: "Diversos"
    },
    {
        image: require('../../public/images/categoryImages/eixo.png'),
        name: "Eixo Central"
    },
    {
        image: require('../../public/images/categoryImages/freio.png'),
        name: "Freios"
    },
    {
        image: require('../../public/images/categoryImages/garfo.png'),
        name: "Garfos"
    },
    {
        image: require('../../public/images/categoryImages/guidao.png'),
        name: "Guidões"
    },
    {
        image: require('../../public/images/categoryImages/kitRotor.png'),
        name: "Kit Rotor"
    },
    {
        image: require('../../public/images/categoryImages/manopla.png'),
        name: "Manoplas"
    },
    {
        image: require('../../public/images/categoryImages/mesa.png'),
        name: "Mesas"
    },
    {
        image: require('../../public/images/categoryImages/movCentral.png'),
        name: "Mov. Central"
    },
    {
        image: require('../../public/images/categoryImages/movDirecao.png'),
        name: "Mov. de Direção"
    },
    {
        image: require('../../public/images/categoryImages/pedal.png'),
        name: "Pedais"
    },
    {
        image: require('../../public/images/categoryImages/pedaleira.png'),
        name: "Pedaleiras"
    },
    {
        image: require('../../public/images/categoryImages/pedivela.png'),
        name: "Pedivelas"
    },
    {
        image: require('../../public/images/categoryImages/pneu.png'),
        name: "Pneus"
    },
    {
        image: require('../../public/images/categoryImages/protetorCubo.png'),
        name: "Protetores"
    },
    {
        image: require('../../public/images/categoryImages/quadro.png'),
        name: "Quadros"
    },
    {
        image: require('../../public/images/categoryImages/raios.png'),
        name: "Raios"
    },
]

export default function Category(){
    return(
        <View>
            <Text className="text-center text-6xl">Categorias</Text>
            <ScrollView className="mb-32">
                <View className="flex flex-row flex-wrap justify-center">
                    {images.map((item, index) => (
                        <TouchableOpacity className="p-4" key={index}>
                            <View className="bg-blue-600 rounded-lg p-2 w-40 h-48 flex items-center justify-center">
                                <Text className="text-black text-lg">{item.name}</Text>
                                <Image style={{resizeMode:"contain"}} className="w-36 h-36" source={item.image} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}