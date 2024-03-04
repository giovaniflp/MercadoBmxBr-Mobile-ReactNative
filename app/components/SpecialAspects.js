import { View, Text } from "react-native"
import {Picker} from '@react-native-picker/picker';

export default function SpecialAspects({categoria}){
    if (categoria == "abracadeiras"){
        return(
            <View>
                <Text>Diâmetro</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.item label="Selecione uma opção" value={null}></Picker.item>
                        <Picker.item label="Quadro 25.4mm" value="25.4mm"></Picker.item>
                        <Picker.item label="Quadro 27.2mm" value="27.2mm"></Picker.item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "aros"){
        return(
            <View>
                <Text>Tipo de folha</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.item label="Selecione uma opção" value={null}></Picker.item>
                        <Picker.item label="Folha única" value="folhaUnica"></Picker.item>
                        <Picker.item label="Folha dupla" value="folhaDupla"></Picker.item>
                    </Picker>
                </View>
                <Text>Furos</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.item label="Selecione uma opção" value={null}></Picker.item>
                        <Picker.item label="32 furos" value="32furos"></Picker.item>
                        <Picker.item label="36 furos" value="36furos"></Picker.item>
                    </Picker>
                </View>
                <Text>Grossura dos raios</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.item label="Selecione uma opção" value={null}></Picker.item>
                        <Picker.item label="Raio fino" value="raioFino"></Picker.item>
                        <Picker.item label="Raio grosso" value="raioGrosso"></Picker.item>
                    </Picker>
                </View>
            </View>
        )
    } else{
        return(
            <View>
                <Text>Nada Selecionado</Text>
            </View>
        )}
}