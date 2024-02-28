import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen(){

    const changePage = useNavigation();

    return(
        <ImageBackground source={require('../public/images/brandWPP.jpg')}>
            <View className="flex justify-center items-center h-full">
                <View className="bg-black p-12 rounded-lg">
                    <Text className="text-white text-center text-3xl">
                        Faça seu cadastro!
                    </Text>
                    <View className="my-4">
                        <Text className="text-white">Nome</Text>
                        <TextInput className="text-white border-2 border-white rounded-lg p-1" placeholder="Insira aqui seu nome"></TextInput>
                    </View>
                    <View className="mb-4">
                        <Text className="text-white">Email</Text>
                        <TextInput className="text-white border-2 border-white rounded-lg p-1" placeholder="Insira aqui seu email" inputMode="email"></TextInput>
                    </View>
                    <View className="mb-4">
                        <Text className="text-white">Senha</Text>
                        <TextInput className="text-white border-2 border-white rounded-lg p-1" placeholder="Insira aqui sua senha" secureTextEntry={true}></TextInput>
                    </View>
                    <View className="mb-4">
                        <Text className="text-white">Confirme sua senha</Text>
                        <TextInput className="text-white border-2 border-white rounded-lg p-1" placeholder="Insira aqui sua senha novamente" secureTextEntry={true}></TextInput>
                    </View>
                    <View className="bg-white p-2 rounded-lg">
                        <TouchableOpacity>
                            <Text className="text-center">Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                    <View className="bg-white p-2 rounded-lg mt-4">
                        <TouchableOpacity onPress={()=>changePage.navigate('HomePage')}>
                            <Text className="text-center">Tela Principal</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}