import { useState, useEffect } from "react";
import axiosInstance from "../../server/axios";
import * as ImagePicker from 'expo-image-picker';
import * as SecureStore from 'expo-secure-store';
import BottomBar from "../../components/BottomBar";
import { Picker } from "@react-native-picker/picker";
import { TextInput, Button } from "react-native-paper";
import { router, useLocalSearchParams } from "expo-router";
import { ActivityIndicator, MD2Colors  } from "react-native-paper";
import SpecialAspectsEdit from "../../components/SpecialAspectEdit";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { BannerAd, BannerAdSize } from "react-native-google-mobile-ads";

export default function EditAdScreen(){

    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)

    const { ad } = useLocalSearchParams()

    const getAdData = async () => {
        setLoading(true)
        try{

            const token = await SecureStore.getItemAsync('session');
            const config = {
            headers: {
                Authorization: "Bearer " + token
            }
            }
            const response = await axiosInstance.get("/api/advertisements/" + ad, config)
            setAdData(response.data)
            setCategory(response.data.categoria)
            setMarca(response.data.marca)
            setModelo(response.data.modelo)
            setPreco(response.data.preco.toString());
            setLocalidade(response.data.localidade)
            setEstadoDaPeca(response.data.estadoDaPeca)
            setGrauDeDesgaste(response.data.grauDeDesgaste)
            setCor(response.data.cor)
            setMaterial(response.data.material)
            setPeso(response.data.peso)
            setDescricao(response.data.descricao)
            setWhatsapp(response.data.whatsapp)
            // ESPECIFICOS ABAIXO
            setAbracadeiraDiametro(response.data.abracadeiraDiametro)
            setAroTipoFolha(response.data.aroTipoFolha)
            setArosFuros(response.data.aroFuros)
            setAroGrossura(response.data.aroGrossura)
            setBancoTipo(response.data.bancoTipo)
            setBancoCanoteTamanho(response.data.bancoCanoteTamanho)
            setBikeCompletaModalidade(response.data.bikeCompletaModalidade)
            setCamaraAroTamanho(response.data.camaraAroTamanho)
            setCamaraTipoValvula(response.data.camaraTipoValvula)
            setCanoteTipo(response.data.canoteTipo)
            setCanoteTamanho(response.data.canoteTamanho)
            setCoroaDentes(response.data.coroaDentes)
            setCoroaProtetor(response.data.coroaProtetor)
            setCoroaAdaptador(response.data.coroaAdaptador)
            setCorrenteTipoElo(response.data.correnteTipoElo)
            setCuboDianteiroFuros(response.data.cuboDianteiroFuros)
            setCuboDianteiroTipoEixo(response.data.cuboDianteiroTipoEixo)
            setCuboDianteiroMaterialEixo(response.data.cuboDianteiroMaterialEixo)
            setCuboDianteiroMaterialParafusos(response.data.cuboDianteiroMaterialParafusos)
            setCuboDianteiroProtetor(response.data.cuboDianteiroProtetor)
            setTipoCubo(response.data.tipoCubo)
            setFreecoaster(response.data.freecoaster)
            setCuboTraseiroTracao(response.data.cuboTraseiroTracao)
            setCuboTraseiroCog(response.data.cuboTraseiroCog)
            setCuboTraseiroTravas(response.data.cuboTraseiroTravas)
            setCuboTraseiroFuros(response.data.cuboTraseiroFuros)
            setCuboTraseiroTipoEixo(response.data.cuboTraseiroTipoEixo)
            setCuboTraseiroMaterialEixo(response.data.cuboTraseiroMaterialEixo)
            setCuboTraseiroMaterialParafusos(response.data.cuboTraseiroMaterialParafusos)
            setCuboTraseiroProtetor(response.data.cuboTraseiroProtetor)
            setEixoCentralEstrias(response.data.eixoCentralEstrias)
            setEixoCentralTamanho(response.data.eixoCentralTamanho)
            setFreioPeca(response.data.freioPeca)
            setGarfoOffset(response.data.garfoOffset)
            setGarfoTampa(response.data.garfoTampa)
            setGuidaoTamanho(response.data.guidaoTamanho)
            setGuidaoLargura(response.data.guidaoLargura)
            setGuidaoAngulo(response.data.guidaoAngulo)
            setGuidaoTipo(response.data.guidaoTipo)
            setManoplaTamanho(response.data.manoplaTamanho)
            setManoplaBarEnds(response.data.manoplaBarEnds)
            setMesaTamanho(response.data.mesaTamanho)
            setMesaAltura(response.data.mesaAltura)
            setMesaTipo(response.data.mesaTipo)
            setMesaFabricacao(response.data.mesaFabricacao)
            setMovimentoCentralTipo(response.data.movimentoCentralTipo)
            setMovimentoCentralRolamento(response.data.movimentoCentralRolamento)
            setMovimentoCentralAcompanha(response.data.movimentoCentralAcompanha)
            setMovimentoDirecaoTipo(response.data.movimentoDirecaoTipo)
            setMovimentoDirecaoTampa(response.data.movimentoDirecaoTampa)
            setMovimentoDirecaoAcompanha(response.data.movimentoDirecaoAcompanha)
            setPedalRosca(response.data.pedalRosca)
            setPedalConstrucao(response.data.pedalConstrucao)
            setPedaleiraQuantidade(response.data.pedaleiraQuantidade)
            setPedaleiraEncaixe(response.data.pedaleiraEncaixe)
            setPedaleiraTamanho(response.data.pedaleiraTamanho)
            setPedivelaTracao(response.data.pedivelaTracao)
            setPedivelaTamanho(response.data.pedivelaTamanho)
            setPedivelaRolamento(response.data.pedivelaRolamento)
            setPedivelaEstrias(response.data.pedivelaEstrias)
            setPedivelaAcompanha(response.data.pedivelaAcompanha)
            setPedivelaConstrucao(response.data.pedivelaConstrucao)
            setPneuAro(response.data.pneuAro)
            setPneuBandaLateral(response.data.pneuBandaLateral)
            setPneuIndicacao(response.data.pneuIndicacao)
            setPneuTamanho(response.data.pneuTamanho)
            setQuadroAbracadeira(response.data.quadroAbracadeira)
            setQuadroCentral(response.data.quadroCentral)
            setQuadroDirecao(response.data.quadroDirecao)
            setQuadroEsticador(response.data.quadroEsticador)
            setQuadroMedida(response.data.quadroMedida)
            setQuadroModalidade(response.data.quadroModalidade)
            setQuadroPinos(response.data.quadroPinos)
            setQuadroTamanhoAro(response.data.quadroTamanhoAro)
            setQuadroTolerancia(response.data.quadroTolerancia)
            setProtetorLado(response.data.protetorLado)
            setRaioTipo(response.data.raioTipo)
            setRaioTamanho(response.data.raioTamanho)
        } catch(e){
            console.log(e)
            alert("Erro ao carregar dados do anúncio.")
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getAdData()
    },[])

    const [adData, setAdData] = useState([])

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
    //Obrigatorios
    const [marca, setMarca] = useState("");
    const [modelo, setModelo] = useState("");
    const [preco, setPreco] = useState("");
    const [localidade, setLocalidade] = useState("");

    const [estadoDaPeca, setEstadoDaPeca] = useState("");
    const [grauDeDesgaste, setGrauDeDesgaste] = useState("");
    const [cor, setCor] = useState("");
    const [material, setMaterial] = useState("");
    const [peso, setPeso] = useState("");
    const [descricao, setDescricao] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [nomeUsuario, setNomeUsuario] = useState("")
    const [idUsuario, setIdUsuario] = useState("")
    
    const [subCategory, setSubCategory] = useState(true);
    const [categoria, setCategory] = useState(null);
    
    
    const updateFilho = (filhoData) => {
        setAbracadeiraDiametro(filhoData.abracadeiraDiametro);
        setAroTipoFolha(filhoData.aroTipoFolha);
        setArosFuros(filhoData.aroFuros);
        setAroGrossura(filhoData.aroGrossura);
        setBancoTipo(filhoData.bancoTipo);
        setBancoCanoteTamanho(filhoData.bancoCanoteTamanho);
        setBikeCompletaModalidade(filhoData.bikeCompletaModalidade);
        setCamaraAroTamanho(filhoData.camaraAroTamanho);
        setCamaraTipoValvula(filhoData.camaraTipoValvula);
        setCanoteTipo(filhoData.canoteTipo);
        setCanoteTamanho(filhoData.canoteTamanho);
        setCoroaDentes(filhoData.coroaDentes);
        setCoroaProtetor(filhoData.coroaProtetor);
        setCoroaAdaptador(filhoData.coroaAdaptador);
        setCorrenteTipoElo(filhoData.correnteTipoElo);
        setCuboDianteiroFuros(filhoData.cuboDianteiroFuros);
        setCuboDianteiroTipoEixo(filhoData.cuboDianteiroTipoEixo);
        setCuboDianteiroMaterialEixo(filhoData.cuboDianteiroMaterialEixo);
        setCuboDianteiroMaterialParafusos(filhoData.cuboDianteiroMaterialParafusos);
        setCuboDianteiroProtetor(filhoData.cuboDianteiroProtetor);
        setTipoCubo(filhoData.tipoCubo);
        setFreecoaster(filhoData.freecoaster);
        setCuboTraseiroTracao(filhoData.cuboTraseiroTracao);
        setCuboTraseiroCog(filhoData.cuboTraseiroCog);
        setCuboTraseiroTravas(filhoData.cuboTraseiroTravas);
        setCuboTraseiroFuros(filhoData.cuboTraseiroFuros);
        setCuboTraseiroTipoEixo(filhoData.cuboTraseiroTipoEixo);
        setCuboTraseiroMaterialEixo(filhoData.cuboTraseiroMaterialEixo);
        setCuboTraseiroMaterialParafusos(filhoData.cuboTraseiroMaterialParafusos);
        setCuboTraseiroProtetor(filhoData.cuboTraseiroProtetor);
        setEixoCentralEstrias(filhoData.eixoCentralEstrias);
        setEixoCentralTamanho(filhoData.eixoCentralTamanho);
        setFreioPeca(filhoData.freioPeca);
        setGarfoOffset(filhoData.garfoOffset);
        setGarfoTampa(filhoData.garfoTampa);
        setGuidaoTamanho(filhoData.guidaoTamanho);
        setGuidaoLargura(filhoData.guidaoLargura);
        setGuidaoAngulo(filhoData.guidaoAngulo);
        setGuidaoTipo(filhoData.guidaoTipo);
        setManoplaTamanho(filhoData.manoplaTamanho);
        setManoplaBarEnds(filhoData.manoplaBarEnds);
        setMesaTamanho(filhoData.mesaTamanho);
        setMesaAltura(filhoData.mesaAltura);
        setMesaTipo(filhoData.mesaTipo);
        setMesaFabricacao(filhoData.mesaFabricacao);
        setMovimentoCentralTipo(filhoData.movimentoCentralTipo);
        setMovimentoCentralRolamento(filhoData.movimentoCentralRolamento);
        setMovimentoCentralAcompanha(filhoData.movimentoCentralAcompanha);
        setMovimentoDirecaoTipo(filhoData.movimentoDirecaoTipo);
        setMovimentoDirecaoTampa(filhoData.movimentoDirecaoTampa);
        setMovimentoDirecaoAcompanha(filhoData.movimentoDirecaoAcompanha);
        setPedalRosca(filhoData.pedalRosca);
        setPedalConstrucao(filhoData.pedalConstrucao);
        setPedaleiraQuantidade(filhoData.pedaleiraQuantidade);
        setPedaleiraEncaixe(filhoData.pedaleiraEncaixe);
        setPedaleiraTamanho(filhoData.pedaleiraTamanho);
        setPedivelaTracao(filhoData.pedivelaTracao);
        setPedivelaTamanho(filhoData.pedivelaTamanho);
        setPedivelaRolamento(filhoData.pedivelaRolamento);
        setPedivelaEstrias(filhoData.pedivelaEstrias);
        setPedivelaAcompanha(filhoData.pedivelaAcompanha);
        setPedivelaConstrucao(filhoData.pedivelaConstrucao);
        setPneuAro(filhoData.pneuAro);
        setPneuBandaLateral(filhoData.pneuBandaLateral);
        setPneuIndicacao(filhoData.pneuIndicacao);
        setPneuTamanho(filhoData.pneuTamanho);
        setQuadroAbracadeira(filhoData.quadroAbracadeira);
        setQuadroCentral(filhoData.quadroCentral);
        setQuadroDirecao(filhoData.quadroDirecao);
        setQuadroEsticador(filhoData.quadroEsticador);
        setQuadroMedida(filhoData.quadroMedida);
        setQuadroModalidade(filhoData.quadroModalidade);
        setQuadroPinos(filhoData.quadroPinos);
        setQuadroTamanhoAro(filhoData.quadroTamanhoAro);
        setQuadroTolerancia(filhoData.quadroTolerancia);
        setProtetorLado(filhoData.protetorLado);
        setRaioTipo(filhoData.raioTipo);
        setRaioTamanho(filhoData.raioTamanho);
    };
    
    useEffect(() => {
        updateFilho({
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
    }, [
        abracadeiraDiametro,
        aroTipoFolha,
        aroFuros,
        aroGrossura,
        bancoTipo,
        bancoCanoteTamanho,
        bikeCompletaModalidade,
        camaraAroTamanho,
        camaraTipoValvula,
        canoteTipo,
        canoteTamanho,
        coroaDentes,
        coroaProtetor,
        coroaAdaptador,
        correnteTipoElo,
        cuboDianteiroFuros,
        cuboDianteiroTipoEixo,
        cuboDianteiroMaterialEixo,
        cuboDianteiroMaterialParafusos,
        cuboDianteiroProtetor,
        tipoCubo,
        freecoaster,
        cuboTraseiroTracao,
        cuboTraseiroCog,
        cuboTraseiroTravas,
        cuboTraseiroFuros,
        cuboTraseiroTipoEixo,
        cuboTraseiroMaterialEixo,
        cuboTraseiroMaterialParafusos,
        cuboTraseiroProtetor,
        eixoCentralEstrias,
        eixoCentralTamanho,
        freioPeca,
        garfoOffset,
        garfoTampa,
        guidaoTamanho,
        guidaoLargura,
        guidaoAngulo,
        guidaoTipo,
        manoplaTamanho,
        manoplaBarEnds,
        mesaTamanho,
        mesaAltura,
        mesaTipo,
        mesaFabricacao,
        movimentoCentralTipo,
        movimentoCentralRolamento,
        movimentoCentralAcompanha,
        movimentoDirecaoTipo,
        movimentoDirecaoTampa,
        movimentoDirecaoAcompanha,
        pedalRosca,
        pedalConstrucao,
        pedaleiraQuantidade,
        pedaleiraEncaixe,
        pedaleiraTamanho,
        pedivelaTracao,
        pedivelaTamanho,
        pedivelaRolamento,
        pedivelaEstrias,
        pedivelaAcompanha,
        pedivelaConstrucao,
        pneuAro,
        pneuBandaLateral,
        pneuIndicacao,
        pneuTamanho,
        quadroAbracadeira,
        quadroCentral,
        quadroDirecao,
        quadroEsticador,
        quadroMedida,
        quadroModalidade,
        quadroPinos,
        quadroTamanhoAro,
        quadroTolerancia,
        protetorLado,
        raioTipo,
        raioTamanho
    ]);

    const getDataJwt = async() => {
        try{
            const token = await SecureStore.getItemAsync('session');
            const config = {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            const response = await axiosInstance.get("/api/token/jwtDecode", config)
            setNomeUsuario(response.data.name);
            setIdUsuario(response.data.jti);
        }
        catch(error){
            console.log(error)
        }
    }
    
    useEffect(()=>{
        getDataJwt()   
    }, [])
    
    const [imagem, setImagem] = useState(null);
    const [uploadImagem, setUploadImagem] = useState(null);

    const pickImage = async () => {
        try{
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
        catch(error){
            console.log(error)
            alert("O formato da imagem não é suportado, tente outro formato.")
        }
    }
    
    const submitForm = async () => {
        setLoading2(true)
        try{
            const whatsappRegex = /^([1-9]{2})9[0-9]{8}$/;
            if(whatsappRegex.test(whatsapp) === false){
                alert("Número de WhatsApp inválido");
            } else{
                const formRequestData = {
                    categoria: categoria,
                    marca: marca,
                    modelo: modelo,
                    preco: preco,
                    localidade: localidade,
                    estadoDaPeca: estadoDaPeca,
                    grauDeDesgaste: grauDeDesgaste,
                    cor: cor,
                    material: material,
                    peso: peso,
                    descricao: descricao,
                    whatsapp: whatsapp,
                    // ESPECIFICOS ABAIXO
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
                    raioTamanho: raioTamanho,
                    nomeUsuario: nomeUsuario,
                    idUsuario: idUsuario,
                    imagem: uploadImagem
                };
                try {
                    if(imagem){
                        console.log(formRequestData)
                        const token = await SecureStore.getItemAsync('session');
                        const formData = new FormData();
                        formData.append("file", {
                            name: Date.now() + ".png",
                            type: "image/png",
                            uri: imagem
                        });
                        const response = await axiosInstance.post("/api/advertisements/upload", formData, {
                            headers: {
                                "Authorization": "Bearer " + token,
                                "Content-Type": "multipart/form-data"
                            }
                        })
                        if(response.status === 200){
                            formRequestData.imagem = response.data;
                            try{
                                const response2 = await axiosInstance.patch("/api/advertisements/patch/" + ad, formRequestData, { headers: { "Authorization": "Bearer " + token } });
                                alert("Anúncio criado com sucesso");
                                router.push({
                                pathname: "/FullAdScreen/[id]",
                                params: {
                                    id: response2.data.id
                                }
                            });
                            } catch (error) {
                                alert("Erro ao enviar formulário, tente novamente");
                            }
                        } else {
                            alert("Erro ao enviar imagem, tente novamente");
                        }
                    } else {
                        console.log(formRequestData)
                        try{
                            const token = await SecureStore.getItemAsync('session');
                            const response2 = await axiosInstance.patch("/api/advertisements/patch/" + ad, formRequestData, { headers: { "Authorization": "Bearer " + token } });
                            alert("Anúncio editado com sucesso");
                            router.push({
                            pathname: "/FullAdScreen/[id]",
                            params: {
                                id: response2.data.id
                            }
                        });
                        } catch (error) {
                            console.log(error);
                        }
                    }  
                } catch (error) {
                    alert("Erro ao enviar imagem, tente novamente");
                }
            }
        }
        catch(error){
            console.log(error)
            alert("Erro ao enviar formulário, tente novamente")
        }
        finally{
            setLoading2(false)
        }
    }
    
    const validateForm = () => {
        // Adicionar data pelo back end
        if (categoria && marca && preco && localidade && estadoDaPeca && grauDeDesgaste && cor && material && peso && whatsapp) {
            submitForm();
        } else {
            alert("Preencha todos os campos obrigatórios");
        }
    }

    return(
        <View className="h-full pt-8 bg-white">
            {loading && <ActivityIndicator className="absolute top-0 left-0 right-0 bottom-0 z-10" animating={true} color={MD2Colors.purpleA700} size={100}></ActivityIndicator>}
            <ScrollView className="mb-12">
            <View className="border bg-purple-100 border-black rounded-md m-4">
                <Picker selectedValue={categoria} 
                onValueChange={(itemValue)=> {setCategory(itemValue); setSubCategory(true)}}>
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
                                    <Image className="w-8 h-8" source={require("../../../public/icons/photoAdd.png")}></Image>
                                </TouchableOpacity>
                            </View>
                            <Text className="text-sm"><Text className="text-red-600">*</Text>Obrigatório</Text>
                            <View className="flex justify-center items-center">
                            {imagem ? (
                                <Image className="rounded-lg mt-8" source={{uri: imagem}} style={{width: 300, height: 300, resizeMode:"contain"}} />
                                ) : (
                                <Image className="rounded-lg mt-8" source={{uri: adData.imagem}} style={{width: 300, height: 300, resizeMode:"contain"}} />
                            )}
                            </View>
                        </View>
                        <Text className="mt-8 text-lg">Preço em R$ <Text className="text-red-600">*</Text></Text>
                        <TextInput maxLength={10} mode="outlined" value={preco} onChangeText={setPreco} placeholder="Ex: R$ 40" className="bg-purple-100 mb-6" outlineColor="black" keyboardType="numeric"></TextInput>
                        <Text className="text-lg">Whatsapp (DDD e Número) para contato <Text className="text-red-600">*</Text></Text>
                        <TextInput maxLength={16} value={whatsapp} onChangeText={setWhatsapp} mode="outlined" className="bg-purple-100 mb-6" outlineColor="black" placeholder="129XXXXXXXX" keyboardType="numeric"></TextInput>
                        <Text className="text-lg">Estado da peça <Text className="text-red-600">*</Text></Text>
                        <View className="border bg-purple-100 border-black rounded-md mb-6">
                            <Picker selectedValue={estadoDaPeca} onValueChange={setEstadoDaPeca}>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Novo" value="Novo"></Picker.Item>
                                <Picker.Item label="Usado" value="Usado"></Picker.Item>
                            </Picker>
                        </View>
                        <Text className="text-lg">Grau de desgaste <Text className="text-red-600">*</Text></Text>
                        <View className="border bg-purple-100 border-black rounded-md mb-6">
                            <Picker selectedValue={grauDeDesgaste} onValueChange={setGrauDeDesgaste}>
                                <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                                <Picker.Item label="Nenhum" value="Nenhum"></Picker.Item>
                                <Picker.Item label="Pouco" value="Pouco"></Picker.Item>
                                <Picker.Item label="Médio" value="Médio"></Picker.Item>
                                <Picker.Item label="Grande" value="Grande"></Picker.Item>
                                <Picker.Item label="Quebrado" value="Quebrado"></Picker.Item>
                            </Picker>
                        </View>
                        <Text className="text-lg">Localidade <Text className="text-red-600">*</Text></Text>
                        <View className="border bg-purple-100 border-black rounded-md mb-6">
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
                        <Text className="text-lg">Cor <Text className="text-red-600">*</Text></Text>
                        <View className="border bg-purple-100 border-black rounded-md mb-6">
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
                        <Text className="text-lg">Material <Text className="text-red-600">*</Text></Text>
                        <View className="border bg-purple-100 border-black rounded-md mb-6">
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
                        <Text className="text-lg">Peso aproximado <Text className="text-red-600">*</Text></Text>
                        <View className="border bg-purple-100 border-black rounded-md mb-6">
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
                        <Text className="text-lg">Marca <Text className="text-red-600">*</Text></Text>
                        <View className="border bg-purple-100 border-black rounded-md mb-6">
                        <Picker selectedValue={marca} onValueChange={setMarca}>
                        <Picker.Item label="Selecione uma opção" value={null}></Picker.Item>
                            <Picker.Item label="OUTRA MARCA" value="OUTRA MARCA" />
                            <Picker.Item label="Animal" value="Animal" />
                            <Picker.Item label="BSD" value="BSD" />
                            <Picker.Item label="Cinema" value="Cinema" />
                            <Picker.Item label="Colony" value="Colony" />
                            <Picker.Item label="Cult" value="Cult" />
                            <Picker.Item label="Demolition" value="Demolition" />
                            <Picker.Item label="Division" value="Division" />
                            <Picker.Item label="Drb" value="Drb" />
                            <Picker.Item label="Eclat" value="Eclat" />
                            <Picker.Item label="Federal" value="Federal" />
                            <Picker.Item label="Fiend" value="Fiend" />
                            <Picker.Item label="FitBikeCo" value="FitBikeCo" />
                            <Picker.Item label="Fly" value="Fly" />
                            <Picker.Item label="G-Sport" value="G-Sport" />
                            <Picker.Item label="Gios" value="Gios" />
                            <Picker.Item label="Haro" value="Haro" />
                            <Picker.Item label="Kink" value="Kink" />
                            <Picker.Item label="Magic Flute" value="Magic Flute" />
                            <Picker.Item label="Master Bikes" value="Master Bikes" />
                            <Picker.Item label="Merrit" value="Merrit" />
                            <Picker.Item label="Mob" value="Mob" />
                            <Picker.Item label="Odyssey" value="Odyssey" />
                            <Picker.Item label="Polso" value="Polso" />
                            <Picker.Item label="Primo" value="Primo" />
                            <Picker.Item label="Profile" value="Profile" />
                            <Picker.Item label="Pro-X" value="Pro-X" />
                            <Picker.Item label="Sunday" value="Sunday" />
                            <Picker.Item label="United" value="United" />
                            <Picker.Item label="Volume" value="Volume" />
                            <Picker.Item label="We The People" value="We The People" />
                        </Picker>
                        </View>
                        <Text className="text-lg">Modelo da peça</Text>
                        <TextInput value={modelo} mode="outlined" className="bg-purple-100 mb-6" outlineColor="black" onChangeText={setModelo} maxLength={32} placeholder="Ex: Thunderbolt"></TextInput>
                        <Text className="text-lg">Descrição</Text>
                        <TextInput value={descricao} mode="outlined" className="bg-purple-100 pt-4" outlineColor="black" onChangeText={setDescricao} numberOfLines={10} maxLength={500} multiline={true} right={<TextInput.Affix text="/500" />} textAlignVertical="top"></TextInput>
                        <View className="mt-8">
                            <SpecialAspectsEdit categoria={categoria} onChangeState={updateFilho} data={adData}></SpecialAspectsEdit>
                        </View>
                        <View className="flex justify-center items-center mb-10">
                            {loading2 ? <ActivityIndicator animating={true} color={MD2Colors.green500} size={40}/> :  <Button mode="contained" className="bg-green-500 w-40" onPress={validateForm}>Editar</Button>}
                        </View>
                        <View className="flex justify-center items-center">
                            <BannerAd unitId="ca-app-pub-6872790638818192/9849043938" size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}></BannerAd>
                        </View>
                    </View>
                )}
            </ScrollView>
            <BottomBar screen="MenuScreen"></BottomBar>
        </View>
    )
}