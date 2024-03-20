import { View, Text } from "react-native"
import {Picker} from '@react-native-picker/picker';
import { useState } from "react";

export default function SpecialAspects({categoria} : {categoria:string}){

    const[tipoCubo, setTipoCubo] = useState()
    const[freecoaster, setFreecoaster] = useState(true)

    if (categoria == "abracadeiras"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Diâmetro</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Quadro 25.4mm" value="25.4mm"></Picker.Item>
                        <Picker.Item label="Quadro 27.2mm" value="27.2mm"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "aros"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo de folha</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Folha única" value="folhaUnica"></Picker.Item>
                        <Picker.Item label="Folha dupla" value="folhaDupla"></Picker.Item>
                    </Picker>
                </View>
                <Text>Furos</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="32 furos" value="32furos"></Picker.Item>
                        <Picker.Item label="36 furos" value="36furos"></Picker.Item>
                    </Picker>
                </View>
                <Text>Grossura dos raios</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Raio fino" value="raioFino"></Picker.Item>
                        <Picker.Item label="Raio grosso" value="raioGrosso"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "bancos"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo de banco</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Pivotal" value="pivotal"></Picker.Item>
                        <Picker.Item label="Tripod" value="tripod"></Picker.Item>
                        <Picker.Item label="Combo" value="combo"></Picker.Item>
                        <Picker.Item label="Carrinho" value="carrinho"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho do canote</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Não acompanha" value="naoAcompanha"></Picker.Item>
                        <Picker.Item label="50mm" value="50mm"></Picker.Item>
                        <Picker.Item label="100mm" value="100mm"></Picker.Item>
                        <Picker.Item label="150mm" value="150mm"></Picker.Item>
                        <Picker.Item label="200mm" value="200mm"></Picker.Item>
                        <Picker.Item label="250mm" value="250mm"></Picker.Item>
                        <Picker.Item label="300mm" value="300mm"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "bikesCompletas"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Modalidade da Bike</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Street" value="street"></Picker.Item>
                        <Picker.Item label="Park" value="park"></Picker.Item>
                        <Picker.Item label="Dirt" value="dirt"></Picker.Item>
                        <Picker.Item label="Race" value="race"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "camaras"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho do aro</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="aro 12" value="aro12"></Picker.Item>
                        <Picker.Item label="aro 14" value="aro14"></Picker.Item>
                        <Picker.Item label="aro 16" value="aro16"></Picker.Item>
                        <Picker.Item label="aro 20" value="aro20"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de válvula da Câmara</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Americana" value="americana"></Picker.Item>
                        <Picker.Item label="Presta" value="presta"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "canotes"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Pivotal" value="pivotal"></Picker.Item>
                        <Picker.Item label="Tripod" value="tripod"></Picker.Item>
                        <Picker.Item label="Carrinho" value="carrinho"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho do canote</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="50mm" value="50mm"></Picker.Item>
                        <Picker.Item label="100mm" value="100mm"></Picker.Item>
                        <Picker.Item label="150mm" value="150mm"></Picker.Item>
                        <Picker.Item label="200mm" value="200mm"></Picker.Item>
                        <Picker.Item label="250mm" value="250mm"></Picker.Item>
                        <Picker.Item label="300mm" value="300mm"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "coroas"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Quantidade de dentes</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="25D" value="25d"></Picker.Item>
                        <Picker.Item label="28D" value="28d"></Picker.Item>
                        <Picker.Item label="30D" value="30d"></Picker.Item>
                        <Picker.Item label="Outra quantidade" value="outraQuantidade"></Picker.Item>
                    </Picker>
                </View>
                <Text>Possui protetor?</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="sim"></Picker.Item>
                        <Picker.Item label="Não" value="nao"></Picker.Item>
                    </Picker>
                </View>
                <Text>Possui adaptador de eixo?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="simAdaptador"></Picker.Item>
                        <Picker.Item label="Não" value="naoAdaptador"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    }  else if (categoria == "correntes"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo de elo</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Normal" value="normal"></Picker.Item>
                        <Picker.Item label="Half Link" value="halfLink"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "cubosDianteiros"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Quantidade de furos</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="48 Furos" value="48furos"></Picker.Item>
                        <Picker.Item label="36 Furos" value="36furos"></Picker.Item>
                        <Picker.Item label="32 Furos" value="32furos"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de eixo</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Macho" value="macho"></Picker.Item>
                        <Picker.Item label="Fêmea" value="femea"></Picker.Item>
                        <Picker.Item label="Blocagem" value="blocagem"></Picker.Item>
                    </Picker>
                </View>
                <Text>Material do eixo</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Alumínio" value="aluminio"></Picker.Item>
                        <Picker.Item label="Aço" value="aco"></Picker.Item>
                        <Picker.Item label="Cromo" value="cromo"></Picker.Item>
                        <Picker.Item label="Titânio" value="titanio"></Picker.Item>
                    </Picker>
                </View>
                <Text>Material dos parafusos</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Alumínio" value="aluminio"></Picker.Item>
                        <Picker.Item label="Aço" value="aco"></Picker.Item>
                        <Picker.Item label="Cromo" value="cromo"></Picker.Item>
                        <Picker.Item label="Titânio" value="titanio"></Picker.Item>
                    </Picker>
                </View>
                <Text>Acompanha protetor?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="simProtetor"></Picker.Item>
                        <Picker.Item label="Não" value="naoProtetor"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "cubosTraseiros"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tração</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="RHD - Direita" value="RHD"></Picker.Item>
                        <Picker.Item label="LHD - Esquerda" value="LHD"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho do cog</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="9 dentes" value="9dentes"></Picker.Item>
                        <Picker.Item label="10 dentes" value="10dentes"></Picker.Item>
                        <Picker.Item label="11 dentes" value="11dentes"></Picker.Item>
                        <Picker.Item label="12 dentes" value="12dentes"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo do cubo</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={tipoCubo} onValueChange={(value) => {setTipoCubo(value); if(value == "freecoaster"){setFreecoaster(false)}else{setFreecoaster(true)}}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Catraca" value="catraca"></Picker.Item>
                        <Picker.Item label="K7 (Cassete)" value="k7"></Picker.Item>
                        <Picker.Item label="Freecoaster" value="freecoaster"></Picker.Item>
                    </Picker>
                </View>
                {freecoaster && (
                    <View>
                        <Text>Quantidade de travas</Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="3 travas" value="3 travas"></Picker.Item>
                                <Picker.Item label="4 travas" value="4 travas"></Picker.Item>
                                <Picker.Item label="6 travas" value="6 travas"></Picker.Item>
                                <Picker.Item label="9 travas" value="9 travas"></Picker.Item>
                            </Picker>
                        </View>
                    </View>
                )}
                <Text>Quantidade de furos</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="48 Furos" value="48furos"></Picker.Item>
                        <Picker.Item label="36 Furos" value="36furos"></Picker.Item>
                        <Picker.Item label="32 Furos" value="32furos"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de eixo</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Macho" value="macho"></Picker.Item>
                        <Picker.Item label="Fêmea" value="femea"></Picker.Item>
                        <Picker.Item label="Blocagem" value="blocagem"></Picker.Item>
                    </Picker>
                </View>
                <Text>Material do eixo</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Alumínio" value="aluminio"></Picker.Item>
                        <Picker.Item label="Aço" value="aco"></Picker.Item>
                        <Picker.Item label="Cromo" value="cromo"></Picker.Item>
                        <Picker.Item label="Titânio" value="titanio"></Picker.Item>
                    </Picker>
                </View>
                <Text>Material dos parafusos</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Alumínio" value="aluminio"></Picker.Item>
                        <Picker.Item label="Aço" value="aco"></Picker.Item>
                        <Picker.Item label="Cromo" value="cromo"></Picker.Item>
                        <Picker.Item label="Titânio" value="titanio"></Picker.Item>
                    </Picker>
                </View>
                <Text>Acompanha protetor?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="simProtetor"></Picker.Item>
                        <Picker.Item label="Não" value="naoProtetor"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    }  else if (categoria == "eixoCentral"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Quantidade de estrias</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="8 estrias" value="8estrias"></Picker.Item>
                        <Picker.Item label="48 estrias" value="48 estrias"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho do rolamento para o eixo</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="19mm" value="19mm"></Picker.Item>
                        <Picker.Item label="22mm" value="22mm"></Picker.Item>
                        <Picker.Item label="24mm" value="24mm"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else{
        return(
            <View>
                
            </View>
        )}
}