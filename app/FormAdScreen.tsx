import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from "react-native";
import BottomBar from "./components/BottomBar";
import Button from "./components/Button";
import SpecialAspects from "./components/SpecialAspects";

import React, {useEffect, useState} from "react";
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import axiosInstance from "./server/axios";
import { router } from "expo-router";


export default function FormAdScreen(){
    
    const [abracadeira, setAbraçadeira] = useState();
    const updateFilho = (filhoData) =>{
        setAbraçadeira(filhoData.abracadeira);
    }


    useEffect(() => {
        updateFilho({abracadeira: abracadeira})
    })

    const [categoria, setCategory] = useState();
    const [marca, setMarca] = useState();
    const [modelo, setModelo] = useState();
    const [preco, setPreco] = useState();
    const [localidade, setLocalidade] = useState();
    const [dataPostagem, setDataPostagem] = useState();  
    const [imagem, setImagem] = useState(null);
    const [estadoDaPeca, setEstadoDaPeca] = useState();
    const [grauDeDesgaste, setGrauDeDesgaste] = useState();
    const [cor, setCor] = useState();
    const [material, setMaterial] = useState();
    const [peso, setPeso] = useState();
    const [descricao, setDescricao] = useState();
    const [whatsapp, setWhatsapp] = useState();
    
    const formRequestData = {
        categoria: categoria,
        marca: marca,
        modelo: modelo,
        preco: preco,
        localidade: localidade,
        dataPostagem: dataPostagem,
        imagem: imagem,
        estadoDaPeca: estadoDaPeca,
        grauDeDesgaste: grauDeDesgaste,
        cor: cor,
        material: material,
        peso: peso,
        descricao: descricao,
        whatsapp: whatsapp,
        // Especificos abaixo
        abracadeira: abracadeira
    }

    const submitForm = () => {
        axiosInstance.post("/advertisement", formRequestData)
        .then((res) => {
            alert("Anúncio criado com sucesso")
            router.push({
                pathname:"/FullAdScreen/[id]",
                params: {
                    id: res.data.id
                }
            })
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const validateForm = ()=>{
        // Adicionar data pelo back end
        if(categoria && marca && preco && localidade && imagem && estadoDaPeca && grauDeDesgaste && cor && material && peso && whatsapp){
            submitForm()
        } else {
            alert("Preencha todos os campos obrigatórios")
        }
    }

    const [subCategory, setSubCategory] = useState(false);

    const testar = () => {
        console.log(categoria);
        console.log(marca);
        console.log(modelo);
        console.log(preco);
        console.log(localidade);
        console.log(dataPostagem);
        console.log(imagem);
        console.log(estadoDaPeca);
        console.log(grauDeDesgaste);
        console.log(cor);
        console.log(material);
        console.log(peso);
        console.log(descricao);
        console.log(whatsapp);
        // Especificos abaixo
        console.log(abracadeira);
    }


    const pickImage = async () => {
 
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            aspect: [4,3],
            quality: 1,
            allowsMultipleSelection: true
        });

        if (!result.canceled) {
            setImagem(result.assets[0].uri);
          }
    }

    return(
        <View className="h-full">
            <ScrollView className="mb-12">

            <View className="border-2 border-black rounded-lg m-4">
                <Picker selectedValue={categoria} 
                onValueChange={(itemValue)=> {setCategory(itemValue); if(itemValue !== null){setSubCategory(true)} else{setSubCategory(false)}}}>
                    <Picker.Item label="Selecione uma categoria" value={null}></Picker.Item>
                    <Picker.Item label="Abraçadeiras" value="Abraçadeira"></Picker.Item>
                    <Picker.Item label="Aros" value="Aro"></Picker.Item>
                    <Picker.Item label="Bancos" value="Banco"></Picker.Item>
                    <Picker.Item label="Bar ends" value="Bar Ends"></Picker.Item>
                    <Picker.Item label="Bikes Completas" value="Bike Completa"></Picker.Item>
                    <Picker.Item label="Câmaras" value="Câmara"></Picker.Item>
                    <Picker.Item label="Canotes" value="Canote"></Picker.Item>
                    <Picker.Item label="Coroas" value="Coroa"></Picker.Item>
                    <Picker.Item label="Correntes" value="Corrente"></Picker.Item>
                    <Picker.Item label="Cubos Dianteiros" value="Cubo Dianteiro"></Picker.Item>
                    <Picker.Item label="Cubos Traseiros" value="Cubo Traseiro"></Picker.Item>
                    <Picker.Item label="Diversos" value="Diversos"></Picker.Item>
                    <Picker.Item label="Eixo central" value="Eixo Central"></Picker.Item>
                    <Picker.Item label="Freios" value="Freio"></Picker.Item>
                    <Picker.Item label="Garfos" value="Garfo"></Picker.Item>
                    <Picker.Item label="Guidões" value="Guidão"></Picker.Item>
                    <Picker.Item label="Kit rotor" value="Kit Rotor"></Picker.Item>
                    <Picker.Item label="Manoplas" value="Manopla"></Picker.Item>
                    <Picker.Item label="Mesas" value="Mesa"></Picker.Item>
                    <Picker.Item label="Mov. Central" value="Movimento Central"></Picker.Item>
                    <Picker.Item label="Mov. de Direção" value="Movimento de Direção"></Picker.Item>
                    <Picker.Item label="Pedais" value="Pedal"></Picker.Item>
                    <Picker.Item label="Pedaleiras" value="Pedaleira"></Picker.Item>
                    <Picker.Item label="Pedivelas" value="Pedivela"></Picker.Item>
                    <Picker.Item label="Pneus" value="Pneu"></Picker.Item>
                    <Picker.Item label="Protetores" value="Protetor"></Picker.Item>
                    <Picker.Item label="Quadros" value="Quadro"></Picker.Item>
                    <Picker.Item label="Raios" value="Raios"></Picker.Item>
                </Picker>
            </View>
                {subCategory &&(
                    <View className="m-4">
                        <View>
                            <View className="flex flex-row justify-between items-center">
                                <Text className="text-2xl">Aspectos Gerais <Text className="text-red-600">*</Text></Text>
                                <TouchableOpacity className="flex flex-row" onPress={pickImage}>
                                    <Text className="text-red-600">*</Text>
                                    <Image source={require("../public/icons/photoAdd.png")}></Image>
                                </TouchableOpacity>
                            </View>
                            <Text className="text-sm"><Text className="text-red-600">*</Text>Obrigatório</Text>
                            <View className="flex justify-center items-center">
                            {imagem && <Image className="rounded-lg mt-8" source={{uri: imagem}} style={{width: 300, height: 300}} />}
                            </View>
                        </View>
                        <Text className="mt-8">Preço em R$ <Text className="text-red-600">*</Text></Text>
                        <TextInput value={preco} onChangeText={setPreco} className="border-2 border-black rounded-lg p-3" placeholder="R$ 40" keyboardType="numeric"></TextInput>
                        <Text>Estado da peça <Text className="text-red-600">*</Text></Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker selectedValue={estadoDaPeca} onValueChange={setEstadoDaPeca}>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Novo" value="Novo"></Picker.Item>
                                <Picker.Item label="Usado" value="Usado"></Picker.Item>
                            </Picker>
                        </View>
                        <Text>Grau de desgaste <Text className="text-red-600">*</Text></Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker selectedValue={grauDeDesgaste} onValueChange={setGrauDeDesgaste}>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Nenhum" value="Nenhum"></Picker.Item>
                                <Picker.Item label="Pouco" value="Pouco"></Picker.Item>
                                <Picker.Item label="Médio" value="Médio"></Picker.Item>
                                <Picker.Item label="Grande" value="Grande"></Picker.Item>
                                <Picker.Item label="Quebrado" value="Quebrado"></Picker.Item>
                            </Picker>
                        </View>
                        <Text>Localidade <Text className="text-red-600">*</Text></Text>
                        <View className="border-2 border-black rounded-lg">
                        <Picker selectedValue={localidade} onValueChange={setLocalidade}>
                            <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                            <Picker.Item label="Acre" value="Acre"></Picker.Item>
                            <Picker.Item label="Alagoas" value="Alagoas"></Picker.Item>
                            <Picker.Item label="Amapá" value="Amapá"></Picker.Item>
                            <Picker.Item label="Amazonas" value="Amazonas"></Picker.Item>
                            <Picker.Item label="Bahia" value="Bahia"></Picker.Item>
                            <Picker.Item label="Ceará" value="Ceará"></Picker.Item>
                            <Picker.Item label="Distrito Federal" value="Distrito Federal"></Picker.Item>
                            <Picker.Item label="Espírito Santo" value="Espírito Santo"></Picker.Item>
                            <Picker.Item label="Goiás" value="Goiás"></Picker.Item>
                            <Picker.Item label="Maranhão" value="Maranhão"></Picker.Item>
                            <Picker.Item label="Mato Grosso" value="Mato Grosso"></Picker.Item>
                            <Picker.Item label="Mato Grosso do Sul" value="Mato Grosso do Sul"></Picker.Item>
                            <Picker.Item label="Minas Gerais" value="Minas Gerais"></Picker.Item>
                            <Picker.Item label="Pará" value="Pará"></Picker.Item>
                            <Picker.Item label="Paraíba" value="Paraíba"></Picker.Item>
                            <Picker.Item label="Paraná" value="Paraná"></Picker.Item>
                            <Picker.Item label="Pernambuco" value="Pernambuco"></Picker.Item>
                            <Picker.Item label="Piauí" value="Piauí"></Picker.Item>
                            <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro"></Picker.Item>
                            <Picker.Item label="Rio Grande do Norte" value="Rio Grande do Norte"></Picker.Item>
                            <Picker.Item label="Rio Grande do Sul" value="Rio Grande do Sul"></Picker.Item>
                            <Picker.Item label="Rondônia" value="Rondônia"></Picker.Item>
                            <Picker.Item label="Roraima" value="Roraima"></Picker.Item>
                            <Picker.Item label="Santa Catarina" value="Santa Catarina"></Picker.Item>
                            <Picker.Item label="São Paulo" value="São Paulo"></Picker.Item>
                            <Picker.Item label="Sergipe" value="Sergipe"></Picker.Item>
                            <Picker.Item label="Tocantins" value="Tocantins"></Picker.Item>
                        </Picker>

                        </View>
                        <Text>Digite seu whatsapp (DDD e Número) para contato <Text className="text-red-600">*</Text></Text>
                        <TextInput value={whatsapp} onChangeText={setWhatsapp} className="border-2 border-black rounded-lg p-3" placeholder="81912345678" keyboardType="numeric"></TextInput>
                        <Text>Cor <Text className="text-red-600">*</Text></Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker selectedValue={cor} onValueChange={setCor}>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Preto" value="Preto"></Picker.Item>
                                <Picker.Item label="Branco" value="Branco"></Picker.Item>
                                <Picker.Item label="Cromado" value="Cromado"></Picker.Item>
                                <Picker.Item label="Polido" value="Polido"></Picker.Item>
                                <Picker.Item label="Óleo" value="Óleo"></Picker.Item>
                                <Picker.Item label="Outra" value="Outra"></Picker.Item>
                            </Picker>
                        </View>
                        <Text>Material <Text className="text-red-600">*</Text></Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker selectedValue={material} onValueChange={setMaterial}>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Cromo" value="Cromo"></Picker.Item>
                                <Picker.Item label="Aço" value="Aço"></Picker.Item>
                                <Picker.Item label="Alumínio" value="Alumínio"></Picker.Item>
                                <Picker.Item label="Titânio" value="Titânio"></Picker.Item>
                                <Picker.Item label="Nylon" value="Nylon"></Picker.Item>
                                <Picker.Item label="Outro" value="Outro"></Picker.Item>
                            </Picker>
                        </View>
                        <Text>Peso aproximado <Text className="text-red-600">*</Text></Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker selectedValue={peso} onValueChange={setPeso}>
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
                        <Text>Marca <Text className="text-red-600">*</Text></Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker selectedValue={marca} onValueChange={setMarca}>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Animal" value="Animal"></Picker.Item>
                                <Picker.Item label="Odyssey" value="Odyssey"></Picker.Item>
                            </Picker>
                        </View>
                        <Text>Modelo da peça</Text>
                        <TextInput value={modelo} onChangeText={setModelo} className="border-2 border-black rounded-lg p-3" placeholder="Thunderbolt"></TextInput>
                        <Text>Descrição</Text>
                        <TextInput value={descricao} onChangeText={setDescricao} numberOfLines={5} multiline={true} textAlignVertical="top" className="border-2 border-black rounded-lg pl-3 pt-3"></TextInput>
                        <View className="mt-8">
                            <SpecialAspects categoria={categoria} onChangeState={updateFilho}></SpecialAspects>
                        </View>
                        <View className="flex justify-center items-center">
                            <TouchableOpacity className="bg-red-400 p-4" onPress={validateForm}>
                                <Text>Anunciar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity className="bg-green-400 p-4" onPress={testar}>
                                <Text>TESTAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </ScrollView>
            <BottomBar></BottomBar>
        </View>
    )
}