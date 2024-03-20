import { Text, TouchableOpacity } from "react-native"
import { Link } from "expo-router"

export default function Button({text, color, route}){
    if(color == "blue"){
    return(
        <Link className="bg-blue-500 p-3 rounded-lg w-40" href={route} asChild>
            <TouchableOpacity>
                <Text className="text-white text-center">{text}</Text>
            </TouchableOpacity>
        </Link>
    )} else if(color == "red"){
        return(
            <Link className="bg-red-500 p-3 rounded-lg w-40" href={route} asChild>
            <TouchableOpacity>
                <Text className="text-white text-center">{text}</Text>
            </TouchableOpacity>
        </Link>
        )
    } else if(color == "green"){
        return(
            <Link className="bg-green-500 p-3 rounded-lg w-40" href={route} asChild>
            <TouchableOpacity>
                <Text className="text-white text-center">{text}</Text>
            </TouchableOpacity>
        </Link>
        )
    } else {
        return(
            <Link className="bg-gray-500 p-3 rounded-lg w-40" href={route} asChild>
            <TouchableOpacity>
                <Text className="text-white text-center">{text}</Text>
            </TouchableOpacity>
        </Link>
        )
    }
}