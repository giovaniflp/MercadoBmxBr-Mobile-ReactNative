import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import { useState } from "react/cjs/react.development";

import BottomBar from "./components/BottomBar";
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import Button from "./components/Button";
import SpecialAspects from "./components/SpecialAspects";

export default function FormAdScreen(){

    const [selectedCategory, setSelectedCategory] = useState();
    const [subCategory, setSubCategory] = useState(false);

    const [image, setImage] = useState(null);
    const [estado, setEstado] = useState();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4,3],
            quality: 1,
            allowsMultipleSelection: true
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
          }
    }

    return(
        <View className="h-full mt-8">
            <ScrollView className="mb-20">

            <View className="border-2 border-black rounded-lg m-4">
                <Picker selectedValue={selectedCategory} 
                onValueChange={(itemValue, itemIndex)=> {setSelectedCategory(itemValue); if(itemValue !== null){setSubCategory(true)} else{setSubCategory(false)}}}>
                    <Picker.Item label="Selecione uma categoria" value={null}></Picker.Item>
                    <Picker.Item label="Abraçadeiras" value="abracadeiras"></Picker.Item>
                    <Picker.Item label="Aros" value="aros"></Picker.Item>
                    <Picker.Item label="Bancos" value="bancos"></Picker.Item>
                    <Picker.Item label="Bar ends" value="barEnds"></Picker.Item>
                    <Picker.Item label="Bikes Completas" value="bikesCompletas"></Picker.Item>
                    <Picker.Item label="Câmaras" value="camaras"></Picker.Item>
                    <Picker.Item label="Canotes" value="canotes"></Picker.Item>
                    <Picker.Item label="Coroas" value="coroas"></Picker.Item>
                    <Picker.Item label="Correntes" value="correntes"></Picker.Item>
                    <Picker.Item label="Cubos Dianteiros" value="cubosDianteiros"></Picker.Item>
                    <Picker.Item label="Cubos Traseiros" value="cubosTraseiros"></Picker.Item>
                    <Picker.Item label="Diversos" value="diversos"></Picker.Item>
                    <Picker.Item label="Eixo central" value="eixoCentral"></Picker.Item>
                    <Picker.Item label="Freios" value="freios"></Picker.Item>
                    <Picker.Item label="Garfos" value="garfos"></Picker.Item>
                    <Picker.Item label="Guidões" value="guidoes"></Picker.Item>
                    <Picker.Item label="Kit rotor" value="kitRotor"></Picker.Item>
                    <Picker.Item label="Manoplas" value="manoplas"></Picker.Item>
                    <Picker.Item label="Mesas" value="mesas"></Picker.Item>
                    <Picker.Item label="Mov. Central" value="movCentral"></Picker.Item>
                    <Picker.Item label="Mov. de Direção" value="movDirecao"></Picker.Item>
                    <Picker.Item label="Pedais" value="pedais"></Picker.Item>
                    <Picker.Item label="Pedaleiras" value="pedaleiras"></Picker.Item>
                    <Picker.Item label="Pedivelas" value="pedivelas"></Picker.Item>
                    <Picker.Item label="Pneus" value="pneus"></Picker.Item>
                    <Picker.Item label="Protetores" value="protetores"></Picker.Item>
                    <Picker.Item label="Quadros" value="quadros"></Picker.Item>
                    <Picker.Item label="Raios" value="raios"></Picker.Item>
                </Picker>
            </View>
                {subCategory &&(
                    <View className="m-4">
                        <View>
                            <View className="flex flex-row justify-between items-center">
                                <Text className="text-2xl">Aspectos Gerais *</Text>
                                <TouchableOpacity onPress={pickImage}>
                                    <Image source={require("../public/icons/photoAdd.png")}></Image>
                                </TouchableOpacity>
                            </View>
                            <Text className="text-sm">*Obrigatório</Text>
                            <View className="flex justify-center items-center">
                            {image && <Image className="rounded-lg mt-8" source={{uri: image}} style={{width: 300, height: 300}} />}
                            </View>
                        </View>
                        <Text className="mt-8">Estado da peça</Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker selectedValue={estado} onValueChange={(value)=>setEstado(value)}>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Novo" value="novo"></Picker.Item>
                                <Picker.Item label="Usado" value="usado"></Picker.Item>
                            </Picker>
                        </View>
                        <Text>Marca</Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Animal" value="animal"></Picker.Item>
                                <Picker.Item label="Odyssey" value="odyssey"></Picker.Item>
                            </Picker>
                        </View>
                        <Text>Cor</Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Preto" value="preto"></Picker.Item>
                                <Picker.Item label="Branco" value="branco"></Picker.Item>
                                <Picker.Item label="Cromado" value="cromado"></Picker.Item>
                                <Picker.Item label="Polido" value="polido"></Picker.Item>
                                <Picker.Item label="Outra" value="outra"></Picker.Item>
                            </Picker>
                        </View>
                        <Text>Material</Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Cromo" value="cromo"></Picker.Item>
                                <Picker.Item label="Aço" value="aco"></Picker.Item>
                                <Picker.Item label="Alumínio" value="aluminio"></Picker.Item>
                                <Picker.Item label="Titânio" value="titanio"></Picker.Item>
                                <Picker.Item label="Outro" value="outro"></Picker.Item>
                            </Picker>
                        </View>
                        <Text>Peso</Text>
                        <TextInput inputMode="numeric" placeholder="634g" className="border-2 border-black rounded-lg p-3 text-black"> </TextInput>
                        <Text>Descrição</Text>
                        <TextInput numberOfLines={5} className="border-2 border-black rounded-lg p-3"></TextInput>
                        <View className="mt-8">
                            <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                            <SpecialAspects categoria={selectedCategory}></SpecialAspects>
                        </View>
                        <View className="flex justify-center items-center mt-8">
                            <Button route={"/HomeScreen"} color={"blue"} text={"Anunciar"}></Button>
                        </View>
                    </View>
                )}
            </ScrollView>
            <BottomBar></BottomBar>
        </View>
    )
}