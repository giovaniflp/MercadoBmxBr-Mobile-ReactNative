import { TouchableOpacity, Image } from "react-native"

export default function VerifiedStores(){
    return(
        <TouchableOpacity >
            <Image style={{resizeMode:"contain"}} className="w-40 h-40" source={require('../../public/images/planetaBmxLogo.png')}></Image>
        </TouchableOpacity>
    )
}