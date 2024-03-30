import { View, Text } from "react-native"
import {Picker} from '@react-native-picker/picker';
import { useEffect, useState } from "react";

export default function SpecialAspects({categoria, onChangeState} : {categoria:string, onChangeState: any}){

    const onChange = () => {
        onChangeState({
            abracadeiraDiametro: abracadeiraDiametro,
            aroTipoFolha: aroTipoFolha,
            aroFuros: aroFuros,
            aroGrossura: aroGrossura,
            bancoTipo: bancoTipo,
            bancoCanoteTamanho: bancoCanoteTamanho,
            bikeCompletaModalidade: bikeCompletaModalidade,
            camaraAroTamanho: camaraAroTamanho,
            camaraTipoValvula: camaraTipoValvula,
            canoteTipo: canoteTipo,
            canoteTamanho: canoteTamanho,
            coroaDentes: coroaDentes,
            coroaProtetor: coroaProtetor,
            coroaAdaptador: coroaAdaptador,
            correnteTipoElo: correnteTipoElo,
            cuboDianteiroFuros: cuboDianteiroFuros,
            cuboDianteiroTipoEixo: cuboDianteiroTipoEixo,
            cuboDianteiroMaterialEixo: cuboDianteiroMaterialEixo,
            cuboDianteiroMaterialParafusos: cuboDianteiroMaterialParafusos,
            cuboDianteiroProtetor: cuboDianteiroProtetor,
            tipoCubo: tipoCubo,
            freecoaster: freecoaster,
            cuboTraseiroTracao: cuboTraseiroTracao,
            cuboTraseiroCog: cuboTraseiroCog,
            cuboTraseiroTravas: cuboTraseiroTravas,
            cuboTraseiroFuros: cuboTraseiroFuros,
            cuboTraseiroTipoEixo: cuboTraseiroTipoEixo,
            cuboTraseiroMaterialEixo: cuboTraseiroMaterialEixo,
            cuboTraseiroMaterialParafusos: cuboTraseiroMaterialParafusos,
            cuboTraseiroProtetor: cuboTraseiroProtetor,
            eixoCentralEstrias: eixoCentralEstrias,
            eixoCentralTamanho: eixoCentralTamanho,
            freioPeca: freioPeca,
            garfoOffset: garfoOffset,
            garfoTampa: garfoTampa,
            guidaoTamanho: guidaoTamanho,
            guidaoLargura: guidaoLargura,
            guidaoAngulo: guidaoAngulo,
            guidaoTipo: guidaoTipo,
            manoplaTamanho: manoplaTamanho,
            manoplaBarEnds: manoplaBarEnds,
            mesaTamanho: mesaTamanho,
            mesaAltura: mesaAltura,
            mesaTipo: mesaTipo,
            mesaFabricacao: mesaFabricacao,
            movimentoCentralTipo: movimentoCentralTipo,
            movimentoCentralRolamento: movimentoCentralRolamento,
            movimentoCentralAcompanha: movimentoCentralAcompanha,
            movimentoDirecaoTipo: movimentoDirecaoTipo,
            movimentoDirecaoTampa: movimentoDirecaoTampa,
            movimentoDirecaoAcompanha: movimentoDirecaoAcompanha,
            pedalRosca: pedalRosca,
            pedalConstrucao: pedalConstrucao,
            pedaleiraQuantidade: pedaleiraQuantidade,
            pedaleiraEncaixe: pedaleiraEncaixe,
            pedaleiraTamanho: pedaleiraTamanho,
            pedivelaTracao: pedivelaTracao,
            pedivelaTamanho: pedivelaTamanho,
            pedivelaRolamento: pedivelaRolamento,
            pedivelaEstrias: pedivelaEstrias,
            pedivelaAcompanha: pedivelaAcompanha,
            pedivelaConstrucao: pedivelaConstrucao,
            pneuAro: pneuAro,
            pneuBandaLateral: pneuBandaLateral,
            pneuIndicacao: pneuIndicacao,
            pneuTamanho: pneuTamanho,
            quadroAbracadeira: quadroAbracadeira,
            quadroCentral: quadroCentral,
            quadroDirecao: quadroDirecao,
            quadroEsticador: quadroEsticador,
            quadroMedida: quadroMedida,
            quadroModalidade: quadroModalidade,
            quadroPinos: quadroPinos,
            quadroTamanhoAro: quadroTamanhoAro,
            quadroTolerancia: quadroTolerancia,
            protetorLado: protetorLado,
            raioTipo: raioTipo,
            raioTamanho: raioTamanho
        });
    };

    const setNull = () => {
        setAbracadeiraDiametro(null);
        setAroTipoFolha(null);
        setArosFuros(null);
        setAroGrossura(null);
        setBancoTipo(null);
        setBancoCanoteTamanho(null);
        setBikeCompletaModalidade(null);
        setCamaraAroTamanho(null);
        setCamaraTipoValvula(null);
        setCanoteTipo(null);
        setCanoteTamanho(null);
        setCoroaDentes(null);
        setCoroaProtetor(null);
        setCoroaAdaptador(null);
        setCorrenteTipoElo(null);
        setCuboDianteiroFuros(null);
        setCuboDianteiroTipoEixo(null);
        setCuboDianteiroMaterialEixo(null);
        setCuboDianteiroMaterialParafusos(null);
        setCuboDianteiroProtetor(null);
        setTipoCubo(null);
        setFreecoaster(true);
        setCuboTraseiroTracao(null);
        setCuboTraseiroCog(null);
        setCuboTraseiroTravas(null);
        setCuboTraseiroFuros(null);
        setCuboTraseiroTipoEixo(null);
        setCuboTraseiroMaterialEixo(null);
        setCuboTraseiroMaterialParafusos(null);
        setCuboTraseiroProtetor(null);
        setEixoCentralEstrias(null);
        setEixoCentralTamanho(null);
        setFreioPeca(null);
        setGarfoOffset(null);
        setGarfoTampa(null);
        setGuidaoTamanho(null);
        setGuidaoLargura(null);
        setGuidaoAngulo(null);
        setGuidaoTipo(null);
        setManoplaTamanho(null);
        setManoplaBarEnds(null);
        setMesaTamanho(null);
        setMesaAltura(null);
        setMesaTipo(null);
        setMesaFabricacao(null);
        setMovimentoCentralTipo(null);
        setMovimentoCentralRolamento(null);
        setMovimentoCentralAcompanha(null);
        setMovimentoDirecaoTipo(null);
        setMovimentoDirecaoTampa(null);
        setMovimentoDirecaoAcompanha(null);
        setPedalRosca(null);
        setPedalConstrucao(null);
        setPedaleiraQuantidade(null);
        setPedaleiraEncaixe(null);
        setPedaleiraTamanho(null);
        setPedivelaTracao(null);
        setPedivelaTamanho(null);
        setPedivelaRolamento(null);
        setPedivelaEstrias(null);
        setPedivelaAcompanha(null);
        setPedivelaConstrucao(null);
        setPneuAro(null);
        setPneuBandaLateral(null);
        setPneuIndicacao(null);
        setPneuTamanho(null);
        setQuadroAbracadeira(null);
        setQuadroCentral(null);
        setQuadroDirecao(null);
        setQuadroEsticador(null);
        setQuadroMedida(null);
        setQuadroModalidade(null);
        setQuadroPinos(null);
        setQuadroTamanhoAro(null);
        setQuadroTolerancia(null);
        setProtetorLado(null);
        setRaioTipo(null);
        setRaioTamanho(null);
    };

    useEffect(() => {
        onChange()
    })

    useEffect(() => {
        setNull()
    }, [categoria])

    const [abracadeiraDiametro, setAbracadeiraDiametro] = useState(null)
    const [aroTipoFolha, setAroTipoFolha] = useState(null)
    const [aroFuros, setArosFuros] = useState(null)
    const [aroGrossura, setAroGrossura] = useState(null)
    const [bancoTipo, setBancoTipo] = useState(null)
    const [bancoCanoteTamanho, setBancoCanoteTamanho] = useState(null)
    const [bikeCompletaModalidade, setBikeCompletaModalidade] = useState(null)
    const [camaraAroTamanho, setCamaraAroTamanho] = useState(null)
    const [camaraTipoValvula, setCamaraTipoValvula] = useState(null)
    const [canoteTipo, setCanoteTipo] = useState(null)
    const [canoteTamanho, setCanoteTamanho] = useState(null)
    const [coroaDentes, setCoroaDentes] = useState(null)
    const [coroaProtetor, setCoroaProtetor] = useState(null)
    const [coroaAdaptador, setCoroaAdaptador] = useState(null)
    const [correnteTipoElo, setCorrenteTipoElo] = useState(null)
    const [cuboDianteiroFuros, setCuboDianteiroFuros] = useState(null)
    const [cuboDianteiroTipoEixo, setCuboDianteiroTipoEixo] = useState(null)
    const [cuboDianteiroMaterialEixo, setCuboDianteiroMaterialEixo] = useState(null)
    const [cuboDianteiroMaterialParafusos, setCuboDianteiroMaterialParafusos] = useState(null)
    const [cuboDianteiroProtetor, setCuboDianteiroProtetor] = useState(null)

    const[tipoCubo, setTipoCubo] = useState()
    const[freecoaster, setFreecoaster] = useState(true)

    const [cuboTraseiroTracao, setCuboTraseiroTracao] = useState(null)
    const [cuboTraseiroCog, setCuboTraseiroCog] = useState(null)
    const [cuboTraseiroTravas, setCuboTraseiroTravas] = useState(null)
    const [cuboTraseiroFuros, setCuboTraseiroFuros] = useState(null)
    const [cuboTraseiroTipoEixo, setCuboTraseiroTipoEixo] = useState(null)
    const [cuboTraseiroMaterialEixo, setCuboTraseiroMaterialEixo] = useState(null)
    const [cuboTraseiroMaterialParafusos, setCuboTraseiroMaterialParafusos] = useState(null)
    const [cuboTraseiroProtetor, setCuboTraseiroProtetor] = useState(null)
    const [eixoCentralEstrias, setEixoCentralEstrias] = useState(null)
    const [eixoCentralTamanho, setEixoCentralTamanho] = useState(null)
    const [freioPeca, setFreioPeca] = useState(null)
    const [garfoOffset, setGarfoOffset] = useState(null)
    const [garfoTampa, setGarfoTampa] = useState(null)
    const [guidaoTamanho, setGuidaoTamanho] = useState(null)
    const [guidaoLargura, setGuidaoLargura] = useState(null)
    const [guidaoAngulo, setGuidaoAngulo] = useState(null)
    const [guidaoTipo, setGuidaoTipo] = useState(null)
    const [manoplaTamanho, setManoplaTamanho] = useState(null)
    const [manoplaBarEnds, setManoplaBarEnds] = useState(null)
    const [mesaTamanho, setMesaTamanho] = useState(null)
    const [mesaAltura, setMesaAltura] = useState(null)
    const [mesaTipo, setMesaTipo] = useState(null)
    const [mesaFabricacao, setMesaFabricacao] = useState(null)
    const [movimentoCentralTipo, setMovimentoCentralTipo] = useState(null)
    const [movimentoCentralRolamento, setMovimentoCentralRolamento] = useState(null)
    const [movimentoCentralAcompanha, setMovimentoCentralAcompanha] = useState(null)
    const [movimentoDirecaoTipo, setMovimentoDirecaoTipo] = useState(null)
    const [movimentoDirecaoTampa, setMovimentoDirecaoTampa] = useState(null)
    const [movimentoDirecaoAcompanha, setMovimentoDirecaoAcompanha] = useState(null)
    const [pedalRosca, setPedalRosca] = useState(null)
    const [pedalConstrucao, setPedalConstrucao] = useState(null)
    const [pedaleiraQuantidade, setPedaleiraQuantidade] = useState(null)
    const [pedaleiraEncaixe, setPedaleiraEncaixe] = useState(null)
    const [pedaleiraTamanho, setPedaleiraTamanho] = useState(null)
    const [pedivelaTracao, setPedivelaTracao] = useState(null)
    const [pedivelaTamanho, setPedivelaTamanho] = useState(null)
    const [pedivelaRolamento, setPedivelaRolamento] = useState(null)
    const [pedivelaEstrias, setPedivelaEstrias] = useState(null)
    const [pedivelaAcompanha, setPedivelaAcompanha] = useState(null)
    const [pedivelaConstrucao, setPedivelaConstrucao] = useState(null)
    const [pneuAro, setPneuAro] = useState(null)
    const [pneuBandaLateral, setPneuBandaLateral] = useState(null)
    const [pneuIndicacao, setPneuIndicacao] = useState(null)
    const [pneuTamanho, setPneuTamanho] = useState(null)
    const [quadroAbracadeira, setQuadroAbracadeira] = useState(null)
    const [quadroCentral, setQuadroCentral] = useState(null)
    const [quadroDirecao, setQuadroDirecao] = useState(null)
    const [quadroEsticador, setQuadroEsticador] = useState(null)
    const [quadroMedida, setQuadroMedida] = useState(null)
    const [quadroModalidade, setQuadroModalidade] = useState(null)
    const [quadroPinos, setQuadroPinos] = useState(null)
    const [quadroTamanhoAro, setQuadroTamanhoAro] = useState(null)
    const [quadroTolerancia, setQuadroTolerancia] = useState(null)
    const [protetorLado, setProtetorLado] = useState(null)
    const [raioTipo, setRaioTipo] = useState(null)
    const [raioTamanho, setRaioTamanho] = useState(null)

    if (categoria == "Abraçadeira"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Diâmetro</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={abracadeiraDiametro} onValueChange={(value)=>{setAbracadeiraDiametro(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="25.4mm de Diâmetro" value="25.4mm de Diâmetro"></Picker.Item>
                        <Picker.Item label="27.2mm de Diâmetro" value="27,2mm de Diâmetro"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Aro"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo de folha</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={aroTipoFolha} onValueChange={(value)=>{setAroTipoFolha(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Folha única" value="Folha única"></Picker.Item>
                        <Picker.Item label="Folha dupla" value="Folha dupla"></Picker.Item>
                        <Picker.Item label="Jante Caixão" value="Jante Caixão"></Picker.Item>
                        <Picker.Item label="Jante Aero" value="Jante Aero"></Picker.Item>
                    </Picker>
                </View>
                <Text>Furos</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={aroFuros} onValueChange={(value)=>{setArosFuros(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="32 furos" value="32 furos"></Picker.Item>
                        <Picker.Item label="36 furos" value="36 furos"></Picker.Item>
                    </Picker>
                </View>
                <Text>Grossura dos raios</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={aroGrossura} onValueChange={(value)=>{setAroGrossura(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Raio fino" value="Raio fino"></Picker.Item>
                        <Picker.Item label="Raio grosso" value="Raio grosso"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Banco"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo de banco</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={bancoTipo} onValueChange={(value)=>{setBancoTipo(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Pivotal" value="Pivotal"></Picker.Item>
                        <Picker.Item label="Tripod" value="Tripod"></Picker.Item>
                        <Picker.Item label="Combo" value="Combo"></Picker.Item>
                        <Picker.Item label="Carrinho" value="Carrinho"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho do canote</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={bancoCanoteTamanho} onValueChange={(value)=>{setBancoCanoteTamanho(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Não acompanha" value="Não Acompanha"></Picker.Item>
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
    } else if (categoria == "Bike Completa"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Modalidade da Bike</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={bikeCompletaModalidade} onValueChange={(value)=>{setBikeCompletaModalidade(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Street" value="Street"></Picker.Item>
                        <Picker.Item label="Park" value="Park"></Picker.Item>
                        <Picker.Item label="Dirt" value="Dirt"></Picker.Item>
                        <Picker.Item label="Race" value="Race"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Câmara"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho do aro</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={camaraAroTamanho} onValueChange={(value)=>{setCamaraAroTamanho(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="aro 12" value="Aro 12"></Picker.Item>
                        <Picker.Item label="aro 14" value="Aro 14"></Picker.Item>
                        <Picker.Item label="aro 16" value="Aro 16"></Picker.Item>
                        <Picker.Item label="aro 20" value="Aro 20"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de válvula da Câmara</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={camaraTipoValvula} onValueChange={(value)=>{setCamaraTipoValvula(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Americana" value="Americana"></Picker.Item>
                        <Picker.Item label="Presta" value="Presta"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Canote"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={canoteTipo} onValueChange={(value)=>{setCanoteTipo(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Pivotal" value="Pivotal"></Picker.Item>
                        <Picker.Item label="Tripod" value="Tripod"></Picker.Item>
                        <Picker.Item label="Carrinho" value="Carrinho"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho do canote</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={canoteTamanho} onValueChange={(value)=>{setCanoteTamanho(value); onChange()}}>
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
    } else if (categoria == "Coroa"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Quantidade de dentes</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={coroaDentes} onValueChange={(value)=>{setCoroaDentes(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="25D" value="25 dentes"></Picker.Item>
                        <Picker.Item label="28D" value="28 dentes"></Picker.Item>
                        <Picker.Item label="30D" value="30 dentes"></Picker.Item>
                        <Picker.Item label="Outra quantidade" value="Outra quantidade"></Picker.Item>
                    </Picker>
                </View>
                <Text>Possui protetor?</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={coroaProtetor} onValueChange={(value)=>{setCoroaProtetor(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="Sim"></Picker.Item>
                        <Picker.Item label="Não" value="Não"></Picker.Item>
                    </Picker>
                </View>
                <Text>Possui adaptador de eixo?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={coroaAdaptador} onValueChange={(value)=>{setCoroaAdaptador(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="Sim"></Picker.Item>
                        <Picker.Item label="Não" value="Não"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    }  else if (categoria == "Corrente"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo de elo</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={correnteTipoElo} onValueChange={(value)=>{setCorrenteTipoElo(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Normal" value="Normal"></Picker.Item>
                        <Picker.Item label="Half Link" value="Half link"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Cubo Dianteiro"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Quantidade de furos</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={cuboDianteiroFuros} onValueChange={(value)=>{setCuboDianteiroFuros(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="48 Furos" value="48 furos"></Picker.Item>
                        <Picker.Item label="36 Furos" value="36 furos"></Picker.Item>
                        <Picker.Item label="32 Furos" value="32 furos"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de eixo</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={cuboDianteiroTipoEixo} onValueChange={(value)=>{setCuboDianteiroTipoEixo(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Macho" value="Macho"></Picker.Item>
                        <Picker.Item label="Fêmea" value="Fêmea"></Picker.Item>
                        <Picker.Item label="Blocagem" value="Blocagem"></Picker.Item>
                    </Picker>
                </View>
                <Text>Material do eixo</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={cuboDianteiroMaterialEixo} onValueChange={(value)=>{setCuboDianteiroMaterialEixo(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Alumínio" value="Alumínio"></Picker.Item>
                        <Picker.Item label="Aço" value="Aço"></Picker.Item>
                        <Picker.Item label="Cromo" value="Cromo"></Picker.Item>
                        <Picker.Item label="Titânio" value="Titânio"></Picker.Item>
                    </Picker>
                </View>
                <Text>Material dos parafusos</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={cuboDianteiroMaterialParafusos} onValueChange={(value)=>{setCuboDianteiroMaterialParafusos(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Alumínio" value="Alumínio"></Picker.Item>
                        <Picker.Item label="Aço" value="Aço"></Picker.Item>
                        <Picker.Item label="Cromo" value="Cromo"></Picker.Item>
                        <Picker.Item label="Titânio" value="Titânio"></Picker.Item>
                    </Picker>
                </View>
                <Text>Acompanha protetor?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={cuboDianteiroProtetor} onValueChange={(value)=>{setCuboDianteiroProtetor(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="Sim"></Picker.Item>
                        <Picker.Item label="Não" value="Não"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Cubo Traseiro"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tração</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={cuboTraseiroTracao} onValueChange={(value)=>{setCuboTraseiroTracao(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="RHD - Direita" value="RHD - Direita"></Picker.Item>
                        <Picker.Item label="LHD - Esquerda" value="LHD - Esquerda"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho do cog</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={cuboTraseiroCog} onValueChange={(value)=>{setCuboTraseiroCog(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="9 dentes" value="9 dentes"></Picker.Item>
                        <Picker.Item label="10 dentes" value="10 dentes"></Picker.Item>
                        <Picker.Item label="11 dentes" value="11 dentes"></Picker.Item>
                        <Picker.Item label="12 dentes" value="12 dentes"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo do cubo</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={tipoCubo} onValueChange={(value) => {setTipoCubo(value); if(value == "freecoaster"){setFreecoaster(false)}else{setFreecoaster(true)}}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Catraca" value="Catraca"></Picker.Item>
                        <Picker.Item label="K7 (Cassete)" value="K7 (Cassete)"></Picker.Item>
                        <Picker.Item label="Freecoaster" value="Freecoaster"></Picker.Item>
                    </Picker>
                </View>
                {freecoaster && (
                    <View>
                        <Text>Quantidade de travas</Text>
                        <View className="border-2 border-black rounded-lg">
                            <Picker selectedValue={cuboTraseiroTravas} onValueChange={(value)=>{setCuboTraseiroTravas(value); onChange()}}>
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
                    <Picker selectedValue={cuboTraseiroFuros} onValueChange={(value)=>{setCuboTraseiroFuros(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="48 Furos" value="48 furos"></Picker.Item>
                        <Picker.Item label="36 Furos" value="36 furos"></Picker.Item>
                        <Picker.Item label="32 Furos" value="32 furos"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de eixo</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={cuboTraseiroTipoEixo} onValueChange={(value)=>{setCuboTraseiroTipoEixo(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Macho" value="Macho"></Picker.Item>
                        <Picker.Item label="Fêmea" value="Fêmea"></Picker.Item>
                        <Picker.Item label="Blocagem" value="Blocagem"></Picker.Item>
                    </Picker>
                </View>
                <Text>Material do eixo</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={cuboTraseiroMaterialEixo} onValueChange={(value)=>{setCuboTraseiroMaterialEixo(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Alumínio" value="Alumínio"></Picker.Item>
                        <Picker.Item label="Aço" value="Aço"></Picker.Item>
                        <Picker.Item label="Cromo" value="Cromo"></Picker.Item>
                        <Picker.Item label="Titânio" value="Titânio"></Picker.Item>
                    </Picker>
                </View>
                <Text>Material dos parafusos</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={cuboTraseiroMaterialParafusos} onValueChange={(value)=>{setCuboTraseiroMaterialParafusos(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Alumínio" value="Alumínio"></Picker.Item>
                        <Picker.Item label="Aço" value="Aço"></Picker.Item>
                        <Picker.Item label="Cromo" value="Cromo"></Picker.Item>
                        <Picker.Item label="Titânio" value="Titânio"></Picker.Item>
                    </Picker>
                </View>
                <Text>Acompanha protetor?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={cuboTraseiroProtetor} onValueChange={(value)=>{setCuboTraseiroProtetor(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="Sim"></Picker.Item>
                        <Picker.Item label="Não" value="Não"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    }  else if (categoria == "Eixo Central"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Quantidade de estrias</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={eixoCentralEstrias} onValueChange={(value)=>{setEixoCentralEstrias(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="8 estrias" value="8 estrias"></Picker.Item>
                        <Picker.Item label="48 estrias" value="48 estrias"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho do rolamento para o eixo</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={eixoCentralTamanho} onValueChange={(value)=>{setEixoCentralTamanho(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="19mm" value="19mm"></Picker.Item>
                        <Picker.Item label="22mm" value="22mm"></Picker.Item>
                        <Picker.Item label="24mm" value="24mm"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Freio"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Qual a peça?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={freioPeca} onValueChange={(value)=>{setFreioPeca(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="U-brake" value="U-brake"></Picker.Item>
                        <Picker.Item label="Parafuso Guia" value="Parafuso guia"></Picker.Item>
                        <Picker.Item label="Pino de Freio" value="Pino de freio"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Garfo"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho do Offset</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={garfoOffset} onValueChange={(value)=>{setGarfoOffset(value); onChange()}}>
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
                    <Picker selectedValue={garfoTampa} onValueChange={(value)=>{setGarfoTampa(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Tampa comum" value="Tampa comum"></Picker.Item>
                        <Picker.Item label="Tampa de rosca" value="Tampa de rosca"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Guidão"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho do Guidão (ou tamanho aproximado)</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={guidaoTamanho} onValueChange={(value)=>{setGuidaoTamanho(value); onChange()}}>
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
                    <Picker selectedValue={guidaoLargura} onValueChange={(value)=>{setGuidaoLargura(value); onChange()}}>
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
                    <Picker selectedValue={guidaoAngulo} onValueChange={(value)=>{setGuidaoAngulo(value); onChange()}}>
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
                    <Picker selectedValue={guidaoAngulo} onValueChange={(value)=>{setGuidaoAngulo(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="3" value="3"></Picker.Item>
                        <Picker.Item label="2" value="2"></Picker.Item>
                        <Picker.Item label="1" value="1"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de guidão</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={guidaoTipo} onValueChange={(value)=>{setGuidaoTipo(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="2 Peças" value="2 peças"></Picker.Item>
                        <Picker.Item label="4 Peças" value="4 peças"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Manopla"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho (ou aproximado)</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={manoplaTamanho} onValueChange={(value)=>{setManoplaTamanho(value); onChange()}}>
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
                    <Picker selectedValue={manoplaBarEnds} onValueChange={(value)=>{setManoplaBarEnds(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="Sim"></Picker.Item>
                        <Picker.Item label="Não" value="Não"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Mesa"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho (ou aproximado)</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={mesaTamanho} onValueChange={(value)=>{setMesaTamanho(value); onChange()}}>
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
                    <Picker selectedValue={mesaAltura} onValueChange={(value)=>{setMesaAltura(value); onChange()}}>
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
                    <Picker selectedValue={mesaTipo} onValueChange={(value)=>{setMesaTipo(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Topload" value="Topload"></Picker.Item>
                        <Picker.Item label="Frontload" value="Frontload"></Picker.Item>
                    </Picker>
                </View>
                <Text>Estilo de fabricação</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={mesaFabricacao} onValueChange={(value)=>{setMesaFabricacao(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Forjada" value="Forjada"></Picker.Item>
                        <Picker.Item label="CNC" value="Cnc"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Movimento Central"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo de central</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={movimentoCentralTipo} onValueChange={(value)=>{setMovimentoCentralTipo(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Euro" value="Euro"></Picker.Item>
                        <Picker.Item label="Spanish" value="Spanish"></Picker.Item>
                        <Picker.Item label="Mid" value="Mid"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho do rolamento</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={movimentoCentralRolamento} onValueChange={(value)=>{setMovimentoCentralRolamento(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="19mm" value="19mm"></Picker.Item>
                        <Picker.Item label="22mm" value="22mm"></Picker.Item>
                        <Picker.Item label="24mm" value="24mm"></Picker.Item>
                    </Picker>
                </View>
                <Text>Acompanha espaçadores e cones?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={movimentoCentralAcompanha} onValueChange={(value)=>{setMovimentoCentralAcompanha(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="Sim"></Picker.Item>
                        <Picker.Item label="Não" value="Não"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Movimento de Direção"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo de caixa</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={movimentoDirecaoTipo} onValueChange={(value)=>{setMovimentoDirecaoTipo(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Rolamento" value="Rolamento"></Picker.Item>
                        <Picker.Item label="Esfera" value="Esfera"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho da tampa (ou aproximado)</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={movimentoDirecaoTampa} onValueChange={(value)=>{setMovimentoDirecaoTampa(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="15mm" value="15mm"></Picker.Item>
                        <Picker.Item label="10mm" value="10mm"></Picker.Item>
                        <Picker.Item label="5mm" value="5mm"></Picker.Item>
                    </Picker>
                </View>
                <Text>Acompanha espaçadores ou anel de compressão?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={movimentoDirecaoAcompanha} onValueChange={(value)=>{setMovimentoDirecaoAcompanha(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="Sim"></Picker.Item>
                        <Picker.Item label="Não" value="Não"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Pedal"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho da rosca</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={pedalRosca} onValueChange={(value)=>{setPedalRosca(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Rosca fina" value="Rosca fina"></Picker.Item>
                        <Picker.Item label="Rosca grossa" value="Rosca grossa"></Picker.Item>
                    </Picker>
                </View>
                <Text>Construção interna</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={pedalConstrucao} onValueChange={(value)=>{setPedalConstrucao(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Rolamento" value="Rolamento"></Picker.Item>
                        <Picker.Item label="Esfera" value="Esfera"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Pedaleira"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Vendido unidade ou par</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={pedaleiraQuantidade} onValueChange={(value)=>{setPedaleiraQuantidade(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Unidade" value="Unidade"></Picker.Item>
                        <Picker.Item label="Par" value="Par"></Picker.Item>
                    </Picker>
                </View>
                <Text>Encaixe</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={pedaleiraEncaixe} onValueChange={(value)=>{setPedaleiraEncaixe(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Dianteiro" value="Dianteiro"></Picker.Item>
                        <Picker.Item label="Traseiro" value="Traseiro"></Picker.Item>
                        <Picker.Item label="Ambos" value="Ambos"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho (ou aproximado)</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={pedaleiraTamanho} onValueChange={(value)=>{setPedaleiraTamanho(value); onChange()}}>
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
    } else if (categoria == "Pedivela"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo de tração</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={pedivelaTracao} onValueChange={(value)=>{setPedivelaTracao(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="RHD - Direito" value="RHD - Direito"></Picker.Item>
                        <Picker.Item label="LHD - Esquerdo" value="LHD - Esquerdo"></Picker.Item>
                        <Picker.Item label="Ambos" value="Ambos"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho do rolamento</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={pedivelaRolamento} onValueChange={(value)=>{setPedivelaRolamento(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="19mm" value="19mm"></Picker.Item>
                        <Picker.Item label="22mm" value="22mm"></Picker.Item>
                        <Picker.Item label="24mm" value="24mm"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de construção</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={pedivelaConstrucao} onValueChange={(value)=>{setPedivelaConstrucao(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="3 Peças" value="3 peças"></Picker.Item>
                        <Picker.Item label="2 Peças" value="2 peças"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho dos braços</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={pedivelaTamanho} onValueChange={(value)=>{setPedivelaTamanho(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="185mm" value="185mm"></Picker.Item>
                        <Picker.Item label="180mm" value="180mm"></Picker.Item>
                        <Picker.Item label="175mm" value="175mm"></Picker.Item>
                        <Picker.Item label="170mm" value="170mm"></Picker.Item>
                        <Picker.Item label="165mm" value="165mm"></Picker.Item>
                        <Picker.Item label="160mm" value="160mm"></Picker.Item>
                        <Picker.Item label="155mm" value="155mm"></Picker.Item>
                        <Picker.Item label="Tamanhos Diferentes" value="Tamanhos diferentes"></Picker.Item>
                    </Picker>
                </View>
                <Text>Quantidade de estrias</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={pedivelaEstrias} onValueChange={(value)=>{setPedivelaEstrias(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="8 Estrias" value="8 estrias"></Picker.Item>
                        <Picker.Item label="48 Estrias" value="48 estrias"></Picker.Item>
                    </Picker>
                </View>
                <Text>Acompanha eixo?</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={pedivelaAcompanha} onValueChange={(value)=>{setPedivelaAcompanha(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="Sim"></Picker.Item>
                        <Picker.Item label="Não" value="Não"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Pneu"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho do aro</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={pneuAro} onValueChange={(value)=>{setPneuAro(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Aro 12" value="Aro 12"></Picker.Item>
                        <Picker.Item label="Aro 14" value="Aro 14"></Picker.Item>
                        <Picker.Item label="Aro 16" value="Aro 16"></Picker.Item>
                        <Picker.Item label="Aro 18" value="Aro 18"></Picker.Item>
                        <Picker.Item label="Aro 20" value="Aro 20"></Picker.Item>
                    </Picker>
                </View>
                <Text>Indicação do pneu</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={pneuIndicacao} onValueChange={(value)=>{setPneuIndicacao(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Modalidade Street" value="Modalidade Street"></Picker.Item>
                        <Picker.Item label="Modalidade Park" value="Modalidade Park"></Picker.Item>
                        <Picker.Item label="Modalidade Dirt" value="Modalidade Dirt"></Picker.Item>
                        <Picker.Item label="Modalidade Flatland" value="Modalidade Flatland"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho do pneu</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={pneuTamanho} onValueChange={(value)=>{setPneuTamanho(value); onChange()}}>
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
                    <Picker selectedValue={pneuBandaLateral} onValueChange={(value)=>{setPneuBandaLateral(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Arame" value="Arame"></Picker.Item>
                        <Picker.Item label="Kevlar" value="Kevlar"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    }  else if (categoria == "Quadro"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tamanho do aro</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={quadroTamanhoAro} onValueChange={(value)=>{setQuadroTamanhoAro(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Aro 12" value="Aro 12"></Picker.Item>
                        <Picker.Item label="Aro 14" value="Aro 14"></Picker.Item>
                        <Picker.Item label="Aro 16" value="Aro 16"></Picker.Item>
                        <Picker.Item label="Aro 18" value="Aro 18"></Picker.Item>
                        <Picker.Item label="Aro 20" value="Aro 20"></Picker.Item>
                    </Picker>
                </View>
                <Text>Medida do quadro (ou aproximado)</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={quadroMedida} onValueChange={(value)=>{setQuadroMedida(value); onChange()}}>
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
                    <Picker selectedValue={quadroModalidade} onValueChange={(value)=>{setQuadroModalidade(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Street" value="Street"></Picker.Item>
                        <Picker.Item label="Park" value="Park"></Picker.Item>
                        <Picker.Item label="Dirt" value="Dirt"></Picker.Item>
                        <Picker.Item label="Flatland" value="Flatland"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de central</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={quadroCentral} onValueChange={(value)=>{setQuadroCentral(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Rosca" value="Rosca"></Picker.Item>
                        <Picker.Item label="Spanish" value="Spanish"></Picker.Item>
                        <Picker.Item label="Mid" value="Mid"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de direção</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={quadroDirecao} onValueChange={(value)=>{setQuadroDirecao(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Integrada" value="Integrada"></Picker.Item>
                        <Picker.Item label="Esfera" value="Esfera"></Picker.Item>
                    </Picker>
                </View>
                <Text>Possui esticador de corrente?</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={quadroEsticador} onValueChange={(value)=>{setQuadroEsticador(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="Sim"></Picker.Item>
                        <Picker.Item label="Não" value="Não"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tolerância máxima de pneu</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={quadroTolerancia} onValueChange={(value)=>{setQuadroTolerancia(value); onChange()}}>
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
                    <Picker selectedValue={quadroPinos} onValueChange={(value)=>{setQuadroPinos(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Sim" value="Sim"></Picker.Item>
                        <Picker.Item label="Não" value="Não"></Picker.Item>
                        <Picker.Item label="Pinos removíveis" value="Pinos removíveis"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tipo de abraçadeira</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={quadroAbracadeira} onValueChange={(value)=>{setQuadroAbracadeira(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Integrada" value="Integrada"></Picker.Item>
                        <Picker.Item label="Separada" value="Separada"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    }  else if (categoria == "Protetor"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Lado</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={protetorLado} onValueChange={(value)=>{setProtetorLado(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Lado do cog" value="Lado do cog"></Picker.Item>
                        <Picker.Item label="Lado oposto ao cog" value="Lado oposto ao cog"></Picker.Item>
                        <Picker.Item label="Protetor dianteiro" value="Protetor dianteiro"></Picker.Item>
                    </Picker>
                </View>
            </View>
        )
    } else if (categoria == "Raios"){
        return(
            <View>
                <Text className="text-2xl mb-8">Aspectos Específicos</Text>
                <Text>Tipo de raio</Text>
                <View className="border-2 border-black rounded-lg">
                    <Picker selectedValue={raioTipo} onValueChange={(value)=>{setRaioTipo(value); onChange()}}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                        <Picker.Item label="Grosso" value="Grosso"></Picker.Item>
                        <Picker.Item label="Fino" value="Fino"></Picker.Item>
                    </Picker>
                </View>
                <Text>Tamanho</Text>
                <View className="border-2 border-black rounded-lg mb-8">
                    <Picker selectedValue={raioTamanho} onValueChange={(value)=>{setRaioTamanho(value); onChange()}}>
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