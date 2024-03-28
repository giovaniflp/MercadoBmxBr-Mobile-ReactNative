import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import BottomBar from "../components/BottomBar";
import TopBar from "../components/TopBar";
import { Link } from "expo-router"
import { useLocalSearchParams } from "expo-router";
import axiosInstance from "../server/axios";

export default function FullAdScreen(){

    const { id } = useLocalSearchParams()

    fetchApi = async () => {
        const adData = await axiosInstance.get("/advertisement/" + id)
        setAdData(adData.data)
    }

    useEffect(()=>{
        fetchApi()
    })

    const [adData, setAdData] = useState([])


    return(
        <View className="flex h-full bg-white">
            <TopBar></TopBar>
            <ScrollView className="mb-12">
                <View>
                    <Image style={{resizeMode:"contain"}} className="w-full h-60" source={{uri:adData.imagem}}></Image>
                    <View>
                        <Text>{adData.categoria} {adData.marca} {adData.modelo}</Text>
                        <Text>Preço: R${adData.preco}</Text>
                        <Text>{adData.localidade}</Text>
                        <Text>{adData.dataPostagem}</Text>             
                    </View>
                    <View className="mt-4">
                        <Text className="mb-4">Características Gerais</Text>
                        <Text>{adData.estadoDaPeca}</Text>
                        <Text>{adData.cor}</Text>
                        <Text>{adData.material}</Text>
                        <Text>{adData.peso}</Text>
                        <Text>{adData.descricao}</Text>
                    </View>
                    <View className="mt-4">
                        <Text className="mb-4">Características Específicas</Text>
                        <Text>{adData.abracadeira}</Text>
                        <Text>{adData.tipoDeFolha}</Text>
                        <Text>{adData.furos}</Text>
                        <Text>{adData.grossuraDosRaios}</Text>
                    </View>
                    <View className="mt-4">
                        <Text>Anunciado por {adData.anunciante}</Text>
                        <Text>Fale com o vendedor:</Text>
                        <Link href={"https://api.whatsapp.com/send?phone=55" + 
                        adData.whatsapp + 
                        "&text=Ol%C3%A1%20"+ adData.anunciante +",%20vim%20do%20seu%20an%C3%BAncio%20no%20Mercado%20Bmx%20Br"+ 
                        "%20-%20" + 
                        adData.categoria + 
                        "%20" +
                        adData.marca +
                        "%20" +
                        adData.modelo +
                        ",%20ainda%20est%C3%A1%20dispon%C3%ADvel?" } asChild>
                            <TouchableOpacity>
                                <Image style={{resizeMode:"contain"}} className="w-10 h-10" source={require('../../public/icons/whatsapp.png')}></Image>
                            </TouchableOpacity>
                        </Link>
                    </View>
                </View>
            </ScrollView>
            <BottomBar></BottomBar>
        </View>
    )
}