import { Text, TouchableOpacity } from "react-native"
import { Link } from "expo-router"

export default function Button({text, color, route}){
    if(color == "blue"){
    return(
        <TouchableOpacity className="bg-blue-500 p-3 rounded-lg w-40">
            <Link href={route}>
                <Text className="text-white text-center">{text}</Text>
            </Link>
        </TouchableOpacity>
    )} else if(color == "red"){
        return(
            <TouchableOpacity className="bg-red-500 p-3 rounded-lg w-40">
                <Link href={route}>
                    <Text className="text-white text-center">{text}</Text>
                </Link>
            </TouchableOpacity>
        )
    } else if(color == "green"){
        return(
            <TouchableOpacity className="bg-green-500 p-3 rounded-lg w-40">
                <Link href={route}>
                    <Text className="text-white text-center">{text}</Text>
                </Link>
            </TouchableOpacity>
        )
    } else {
        return(
            <TouchableOpacity className="bg-gray-500 p-3 rounded-lg w-40">
                <Link href={route}>
                    <Text className="text-white text-center">{text}</Text>
                </Link>
            </TouchableOpacity>
        )
    }
}