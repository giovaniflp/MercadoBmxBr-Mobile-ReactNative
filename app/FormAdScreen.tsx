import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import BottomBar from "./components/BottomBar";
import Button from "./components/Button";
import SpecialAspects from "./components/SpecialAspects";

import React, {useState} from "react";
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';


export default function FormAdScreen(){

    const [selectedCategory, setSelectedCategory] = useState();
    const [subCategory, setSubCategory] = useState(false);

    let categoria: string = selectedCategory;

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
                        <Text className="mt-8">Estado da peça *</Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker selectedValue={estado} onValueChange={(value)=>setEstado(value)}>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Novo" value="novo"></Picker.Item>
                                <Picker.Item label="Usado" value="usado"></Picker.Item>
                            </Picker>
                        </View>
                        <Text>Localidade *</Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="AC" value="ac"></Picker.Item>
                                <Picker.Item label="AL" value="al"></Picker.Item>
                                <Picker.Item label="AP" value="ap"></Picker.Item>
                                <Picker.Item label="AM" value="am"></Picker.Item>
                                <Picker.Item label="BA" value="ba"></Picker.Item>
                                <Picker.Item label="CE" value="ce"></Picker.Item>
                                <Picker.Item label="DF" value="df"></Picker.Item>
                                <Picker.Item label="ES" value="es"></Picker.Item>
                                <Picker.Item label="GO" value="go"></Picker.Item>
                                <Picker.Item label="MA" value="ma"></Picker.Item>
                                <Picker.Item label="MT" value="mt"></Picker.Item>
                                <Picker.Item label="MS" value="ms"></Picker.Item>
                                <Picker.Item label="MG" value="mg"></Picker.Item>
                                <Picker.Item label="PA" value="pa"></Picker.Item>
                                <Picker.Item label="PB" value="pb"></Picker.Item>
                                <Picker.Item label="PR" value="pr"></Picker.Item>
                                <Picker.Item label="PE" value="pe"></Picker.Item>
                                <Picker.Item label="PI" value="pi"></Picker.Item>
                                <Picker.Item label="RJ" value="rj"></Picker.Item>
                                <Picker.Item label="RN" value="rn"></Picker.Item>
                                <Picker.Item label="RS" value="rs"></Picker.Item>
                                <Picker.Item label="RO" value="ro"></Picker.Item>
                                <Picker.Item label="RR" value="rr"></Picker.Item>
                                <Picker.Item label="SC" value="sc"></Picker.Item>
                                <Picker.Item label="SP" value="sp"></Picker.Item>
                                <Picker.Item label="SE" value="se"></Picker.Item>
                                <Picker.Item label="TO" value="to"></Picker.Item>
                            </Picker>
                        </View>
                        <Text>Digite seu whatsapp (DDD e Número) para contato *</Text>
                        <TextInput className="border-2 border-black rounded-lg p-3" placeholder="81912345678"></TextInput>
                        <Text>Marca *</Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Animal" value="animal"></Picker.Item>
                                <Picker.Item label="Odyssey" value="odyssey"></Picker.Item>
                            </Picker>
                        </View>
                        <Text>Cor *</Text>
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
                        <Text>Material *</Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Cromo" value="cromo"></Picker.Item>
                                <Picker.Item label="Aço" value="aco"></Picker.Item>
                                <Picker.Item label="Alumínio" value="aluminio"></Picker.Item>
                                <Picker.Item label="Titânio" value="titanio"></Picker.Item>
                                <Picker.Item label="Nylon" value="nylon"></Picker.Item>
                                <Picker.Item label="Outro" value="outro"></Picker.Item>
                            </Picker>
                        </View>
                        <Text>Peso aproximado *</Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker>
                                    <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                    <Picker.Item label="50g" value="50g"></Picker.Item>
                                    <Picker.Item label="100g" value="100g"></Picker.Item>
                                    <Picker.Item label="200g" value="200g"></Picker.Item>
                                    <Picker.Item label="300g" value="300g"></Picker.Item>
                                    <Picker.Item label="400g" value="400g"></Picker.Item>
                                    <Picker.Item label="500g" value="500g"></Picker.Item>
                                    <Picker.Item label="600g" value="600g"></Picker.Item>
                                    <Picker.Item label="700g" value="700g"></Picker.Item>
                                    <Picker.Item label="800g" value="800g"></Picker.Item>
                                    <Picker.Item label="900g" value="900g"></Picker.Item>
                                    <Picker.Item label="1kg" value="1kg"></Picker.Item>
                                    <Picker.Item label="1,25kg" value="1,25kg"></Picker.Item>
                                    <Picker.Item label="1,5kg" value="1,5kg"></Picker.Item>
                                    <Picker.Item label="1,75kg" value="1,75kg"></Picker.Item>
                                    <Picker.Item label="2kg" value="2kg"></Picker.Item>
                                    <Picker.Item label="+2,5kg" value="+2,5kg"></Picker.Item>
                                </Picker>
                            </View>
                        <Text>Observação</Text>
                        <TextInput numberOfLines={5} multiline={true} textAlignVertical="top" className="border-2 border-black rounded-lg pl-3 pt-3"></TextInput>
                        <View className="mt-8">
                            <SpecialAspects categoria={categoria}></SpecialAspects>
                        </View>
                        <View className="flex justify-center items-center">
                            <Button route={"/HomeScreen"} color={"blue"} text={"Anunciar"}></Button>
                        </View>
                    </View>
                )}
            </ScrollView>
            <BottomBar></BottomBar>
        </View>
    )
}