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
    } else if (categoria == "freios"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Qual a peça?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="U-brake" value="uBrake"></Picker.Item>
                        <Picker.Item label="Parafuso Guia" value="parafusoGuia"></Picker.Item>
                        <Picker.Item label="Pino de Freio" value="pinoDeFreio"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "garfos"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho do Offset</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="15mm" value="15mm"></Picker.Item>
                        <Picker.Item label="20mm" value="20mm"></Picker.Item>
                        <Picker.Item label="22mm" value="22mm"></Picker.Item>
                        <Picker.Item label="25mm" value="25mm"></Picker.Item>
                        <Picker.Item label="28mm" value="28mm"></Picker.Item>
                        <Picker.Item label="32mm" value="30mm"></Picker.Item>
                        <Picker.Item label="32mm" value="32mm"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de tampa</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Tampa comum" value="tampaComum"></Picker.Item>
                        <Picker.Item label="Tampa de rosca" value="tampaDeRosca"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "guidoes"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho do Guidão (ou tamanho aproximado)</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="10" value="10"></Picker.Item>
                        <Picker.Item label="9.75" value="9.75"></Picker.Item>
                        <Picker.Item label="9.5" value="9.5"></Picker.Item>
                        <Picker.Item label="9.25" value="9.25"></Picker.Item>
                        <Picker.Item label="9" value="9"></Picker.Item>
                        <Picker.Item label="8.75" value="8.75"></Picker.Item>
                        <Picker.Item label="8.5" value="8.5"></Picker.Item>
                        <Picker.Item label="8.25" value="8.25"></Picker.Item>
                        <Picker.Item label="8" value="8"></Picker.Item>
                    </Picker>
                </View>
                <Text>Largura (ou aproximado)</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="30" value="30"></Picker.Item>
                        <Picker.Item label="29.75" value="29.75"></Picker.Item>
                        <Picker.Item label="29.5" value="29.5"></Picker.Item>
                        <Picker.Item label="29.25" value="29.25"></Picker.Item>
                        <Picker.Item label="29" value="29"></Picker.Item>
                    </Picker>
                </View>
                <Text>Ângulo do recuo (ou apromixado)</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="13" value="13"></Picker.Item>
                        <Picker.Item label="12" value="12"></Picker.Item>
                        <Picker.Item label="11" value="11"></Picker.Item>
                        <Picker.Item label="10" value="10"></Picker.Item>
                        <Picker.Item label="9" value="9"></Picker.Item>
                    </Picker>
                </View>
                <Text>Ângulo da elevação (ou apromixado)</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="3" value="3"></Picker.Item>
                        <Picker.Item label="2" value="2"></Picker.Item>
                        <Picker.Item label="1" value="1"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de guidão</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="2 Peças" value="2pecas"></Picker.Item>
                        <Picker.Item label="4 Peças" value="4pecas"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "manoplas"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho (ou aproximado)</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="180mm" value="180mm"></Picker.Item>
                        <Picker.Item label="175mm" value="175mm"></Picker.Item>
                        <Picker.Item label="170mm" value="170mm"></Picker.Item>
                        <Picker.Item label="165mm" value="165mm"></Picker.Item>
                        <Picker.Item label="160mm" value="160mm"></Picker.Item>
                        <Picker.Item label="155mm" value="155mm"></Picker.Item>
                        <Picker.Item label="150mm" value="150mm"></Picker.Item>
                        <Picker.Item label="145mm" value="145mm"></Picker.Item>
                        <Picker.Item label="140mm" value="140mm"></Picker.Item>
                        <Picker.Item label="135mm" value="135mm"></Picker.Item>
                        <Picker.Item label="130mm" value="130mm"></Picker.Item>
                    </Picker>
                </View>
                <Text>Acompanha bar ends?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="sim"></Picker.Item>
                        <Picker.Item label="Não" value="nao"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "mesas"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho (ou aproximado)</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="60mm" value="60mm"></Picker.Item>
                        <Picker.Item label="55mm" value="55mm"></Picker.Item>
                        <Picker.Item label="53mm" value="53mm"></Picker.Item>
                        <Picker.Item label="52mm" value="52mm"></Picker.Item>
                        <Picker.Item label="51mm" value="51mm"></Picker.Item>
                        <Picker.Item label="50mm" value="50mm"></Picker.Item>
                        <Picker.Item label="48mm" value="48mm"></Picker.Item>
                        <Picker.Item label="45mm" value="45mm"></Picker.Item>
                    </Picker>
                </View>
                <Text>Altura (ou aproximada)</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="35mm" value="35mm"></Picker.Item>
                        <Picker.Item label="30mm" value="30mm"></Picker.Item>
                        <Picker.Item label="25mm" value="25mm"></Picker.Item>
                        <Picker.Item label="20mm" value="20mm"></Picker.Item>
                        <Picker.Item label="15mm" value="15mm"></Picker.Item>
                        <Picker.Item label="10mm" value="10mm"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Topload" value="topload"></Picker.Item>
                        <Picker.Item label="Frontload" value="frontload"></Picker.Item>
                    </Picker>
                </View>
                <Text>Estilo de fabricação</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Forjada" value="forjada"></Picker.Item>
                        <Picker.Item label="CNC" value="cnc"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "movCentral"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo de central</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Euro" value="euro"></Picker.Item>
                        <Picker.Item label="Spanish" value="spanish"></Picker.Item>
                        <Picker.Item label="Mid" value="mid"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho do rolamento</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="19mm" value="19mm"></Picker.Item>
                        <Picker.Item label="22mm" value="22mm"></Picker.Item>
                        <Picker.Item label="24mm" value="24mm"></Picker.Item>
                    </Picker>
                </View>
                <Text>Acompanha espaçadores e cones?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="sim"></Picker.Item>
                        <Picker.Item label="Não" value="nao"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "movDirecao"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo de caixa</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Rolamento" value="rolamento"></Picker.Item>
                        <Picker.Item label="Esfera" value="esfera"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho da tampa (ou aproximado)</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="15mm" value="15mm"></Picker.Item>
                        <Picker.Item label="10mm" value="10mm"></Picker.Item>
                        <Picker.Item label="5mm" value="5mm"></Picker.Item>
                    </Picker>
                </View>
                <Text>Acompanha espaçadores ou anel de compressão?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="sim"></Picker.Item>
                        <Picker.Item label="Não" value="nao"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "pedais"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho da rosca</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Rosca fina" value="roscaFina"></Picker.Item>
                        <Picker.Item label="Rosca grossa" value="roscaGrossa"></Picker.Item>
                    </Picker>
                </View>
                <Text>Construção interna</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Rolamento" value="rolamento"></Picker.Item>
                        <Picker.Item label="Esfera" value="esfera"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "pedaleiras"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Vendido unidade ou par</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Unidade" value="unidade"></Picker.Item>
                        <Picker.Item label="Par" value="par"></Picker.Item>
                    </Picker>
                </View>
                <Text>Encaixe</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Dianteiro" value="dianteiro"></Picker.Item>
                        <Picker.Item label="Traseiro" value="traseiro"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho (ou aproximado)</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="130mm" value="130mm"></Picker.Item>
                        <Picker.Item label="125mm" value="125mm"></Picker.Item>
                        <Picker.Item label="120mm" value="120mm"></Picker.Item>
                        <Picker.Item label="115mm" value="115mm"></Picker.Item>
                        <Picker.Item label="110mm" value="110mm"></Picker.Item>
                        <Picker.Item label="105mm" value="105mm"></Picker.Item>
                        <Picker.Item label="100mm" value="100mm"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "pedivelas"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo de tração</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="RHD" value="rhd"></Picker.Item>
                        <Picker.Item label="LHD" value="lhd"></Picker.Item>
                        <Picker.Item label="Ambos" value="ambos"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho do rolamento</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="19mm" value="19mm"></Picker.Item>
                        <Picker.Item label="22mm" value="22mm"></Picker.Item>
                        <Picker.Item label="24mm" value="24mm"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de construção</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="3 Peças" value="3pecas"></Picker.Item>
                        <Picker.Item label="2 Peças" value="2pecas"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho dos braços</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="185mm" value="185mm"></Picker.Item>
                        <Picker.Item label="180mm" value="180mm"></Picker.Item>
                        <Picker.Item label="175mm" value="175mm"></Picker.Item>
                        <Picker.Item label="170mm" value="170mm"></Picker.Item>
                        <Picker.Item label="165mm" value="165mm"></Picker.Item>
                        <Picker.Item label="160mm" value="160mm"></Picker.Item>
                        <Picker.Item label="155mm" value="155mm"></Picker.Item>
                    </Picker>
                </View>
                <Text>Quantidade de estrias</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="8 Estrias" value="8estrias"></Picker.Item>
                        <Picker.Item label="48 Estrias" value="48estrias"></Picker.Item>
                    </Picker>
                </View>
                <Text>Acompanha eixo?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="sim"></Picker.Item>
                        <Picker.Item label="Não" value="nao"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "pneus"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho do aro</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Aro 12" value="aro12"></Picker.Item>
                        <Picker.Item label="Aro 14" value="aro14"></Picker.Item>
                        <Picker.Item label="Aro 16" value="aro16"></Picker.Item>
                        <Picker.Item label="Aro 18" value="aro18"></Picker.Item>
                        <Picker.Item label="Aro 20" value="aro20"></Picker.Item>
                    </Picker>
                </View>
                <Text>Indicação do pneu</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Modalidade Street" value="modalidadeStreet"></Picker.Item>
                        <Picker.Item label="Modalidade Park" value="modalidadePark"></Picker.Item>
                        <Picker.Item label="Modalidade Dirt" value="modalidadeDirt"></Picker.Item>
                        <Picker.Item label="Modalidade Flatland" value="modalidadeFlatland"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho do pneu</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="1.75" value="1.75"></Picker.Item>
                        <Picker.Item label="1.80" value="1.80"></Picker.Item>
                        <Picker.Item label="1.90" value="1.90"></Picker.Item>
                        <Picker.Item label="1.95" value="1.95"></Picker.Item>
                        <Picker.Item label="2.00" value="2.00"></Picker.Item>
                        <Picker.Item label="2.10" value="2.10"></Picker.Item>
                        <Picker.Item label="2.15" value="2.15"></Picker.Item>
                        <Picker.Item label="2.20" value="2.20"></Picker.Item>
                        <Picker.Item label="2.25" value="2.25"></Picker.Item>
                        <Picker.Item label="2.30" value="2.30"></Picker.Item>
                        <Picker.Item label="2.35" value="2.35"></Picker.Item>
                        <Picker.Item label="2.40" value="2.40"></Picker.Item>
                        <Picker.Item label="2.50" value="2.50"></Picker.Item>
                    </Picker>
                </View>
                <Text>Construção da banda lateral</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Arame" value="Arame"></Picker.Item>
                        <Picker.Item label="Kevlar" value="Kevlar"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    }  else if (categoria == "quadros"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho do aro</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Aro 12" value="aro12"></Picker.Item>
                        <Picker.Item label="Aro 14" value="aro14"></Picker.Item>
                        <Picker.Item label="Aro 16" value="aro16"></Picker.Item>
                        <Picker.Item label="Aro 18" value="aro18"></Picker.Item>
                        <Picker.Item label="Aro 20" value="aro20"></Picker.Item>
                    </Picker>
                </View>
                <Text>Medida do quadro (ou aproximado)</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="20.0" value="20.0"></Picker.Item>
                        <Picker.Item label="20.25" value="20.25"></Picker.Item>
                        <Picker.Item label="20.40" value="20.40"></Picker.Item>
                        <Picker.Item label="20.50" value="20.50"></Picker.Item>
                        <Picker.Item label="20.60" value="20.60"></Picker.Item>
                        <Picker.Item label="20.75" value="20.75"></Picker.Item>
                        <Picker.Item label="20.80" value="20.80"></Picker.Item>
                        <Picker.Item label="21.0" value="21.0"></Picker.Item>
                        <Picker.Item label="21.25" value="21.25"></Picker.Item>
                    </Picker>
                </View>
                <Text>Modalidade indicada</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Street" value="street"></Picker.Item>
                        <Picker.Item label="Park" value="park"></Picker.Item>
                        <Picker.Item label="Dirt" value="dirt"></Picker.Item>
                        <Picker.Item label="Flatland" value="flatland"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de central</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Rosca" value="rosca"></Picker.Item>
                        <Picker.Item label="Spanish" value="spanish"></Picker.Item>
                        <Picker.Item label="Mid" value="mid"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de direção</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Integrada" value="integrada"></Picker.Item>
                        <Picker.Item label="Esfera" value="esfera"></Picker.Item>
                    </Picker>
                </View>
                <Text>Possui esticador de corrente?</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="sim"></Picker.Item>
                        <Picker.Item label="Não" value="nao"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tolerância máxima de pneu</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="2.0" value="2.0"></Picker.Item>
                        <Picker.Item label="2.10" value="2.10"></Picker.Item>
                        <Picker.Item label="2.15" value="2.15"></Picker.Item>
                        <Picker.Item label="2.20" value="2.20"></Picker.Item>
                        <Picker.Item label="2.25" value="2.25"></Picker.Item>
                        <Picker.Item label="2.30" value="2.30"></Picker.Item>
                        <Picker.Item label="2.35" value="2.35"></Picker.Item>
                        <Picker.Item label="2.40" value="2.40"></Picker.Item>
                        <Picker.Item label="2.50" value="2.50"></Picker.Item>
                    </Picker>
                </View>
                <Text>Possui pinos de freio?</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="sim"></Picker.Item>
                        <Picker.Item label="Não" value="nao"></Picker.Item>
                        <Picker.Item label="Pinos removíveis" value="pinosRemoviveis"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de abraçadeira</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Integrada" value="integrada"></Picker.Item>
                        <Picker.Item label="Separada" value="separada"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    }  else if (categoria == "protetores"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Lado</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Lado do cog" value="ladoDoCog"></Picker.Item>
                        <Picker.Item label="Lado oposto ao cog" value="ladoOpostoAoCog"></Picker.Item>
                        <Picker.Item label="Protetor dianteiro" value="protetorDianteiro"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "raios"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo de raio</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Grosso" value="grosso"></Picker.Item>
                        <Picker.Item label="Fino" value="fino"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="175mm" value="175mm"></Picker.Item>
                        <Picker.Item label="180mm" value="180mm"></Picker.Item>
                        <Picker.Item label="183mm" value="183mm"></Picker.Item>
                        <Picker.Item label="184mm" value="184mm"></Picker.Item>
                        <Picker.Item label="185mm" value="185mm"></Picker.Item>
                        <Picker.Item label="187mm" value="187mm"></Picker.Item>
                        <Picker.Item label="190mm" value="190mm"></Picker.Item>
                        <Picker.Item label="195mm" value="195mm"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    }  else{
        return(
            <View>
                
            </View>
        )}
}