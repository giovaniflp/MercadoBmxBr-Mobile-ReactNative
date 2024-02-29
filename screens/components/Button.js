import { Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';

export default function Button({text, color, route}){

    const changePage = useNavigation();

    if(color == "blue"){
    return(
        <TouchableOpacity className="bg-blue-500 p-3 rounded-lg w-40" onPress={()=>changePage.navigate(route)}>
            <Text className="text-white text-center">{text}</Text>
        </TouchableOpacity>
    )} else if(color == "red"){
        return(
            <TouchableOpacity className="bg-red-500 p-3 rounded-lg w-40" onPress={()=>changePage.navigate(route)}>
                <Text className="text-white text-center">{text}</Text>
            </TouchableOpacity>
        )
    } else if(color == "green"){
        return(
            <TouchableOpacity className="bg-green-500 p-3 rounded-lg w-40" onPress={()=>changePage.navigate(route)}>
                <Text className="text-white text-center">{text}</Text>
            </TouchableOpacity>
        )
    } else {
        return(
            <TouchableOpacity className="bg-gray-500 p-3 rounded-lg w-40" onPress={()=>changePage.navigate(route)}>
                <Text className="text-white text-center">{text}</Text>
            </TouchableOpacity>
        )
    }
}