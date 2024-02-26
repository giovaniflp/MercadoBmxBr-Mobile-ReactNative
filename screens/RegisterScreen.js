import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen(){

    const changePage = useNavigation();

    return(
        <View className="flex justify-center items-center h-full">
            <Text>
                Faça seu cadastro!
            </Text>
            <View>
                <Text>Nome</Text>
                <TextInput placeholder="Insira aqui seu nome"></TextInput>
            </View>
            <View>
                <Text>Email</Text>
                <TextInput placeholder="Insira aqui seu email" inputMode="email"></TextInput>
            </View>
            <View>
                <Text>Senha</Text>
                <TextInput placeholder="Insira aqui sua senha" secureTextEntry={true}></TextInput>
            </View>
            <View>
                <Text>Confirme sua senha</Text>
                <TextInput placeholder="Insira aqui sua senha novamente" secureTextEntry={true}></TextInput>
            </View>
            <View>
                <TouchableOpacity>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>changePage.navigate('HomePage')}>
                    <Text>Home Page</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}