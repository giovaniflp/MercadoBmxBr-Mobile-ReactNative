import { Linking } from "react-native"
import { TouchableOpacity, Image, View, ScrollView } from "react-native"

export default function VerifiedStores(){
    return(
        <View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View  className="flex flex-row gap-4 px-4">
                    <TouchableOpacity onPress={()=>{Linking.openURL("https://www.dreambmx.com.br/")}}>
                        <Image style={{resizeMode:"contain"}} className="w-40 h-40" source={require('../../public/images/dreamBmxLogo.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL("https://www.planetabmx.com/paginas/home/home.php")}}>
                        <Image style={{resizeMode:"contain"}} className="w-40 h-40" source={require('../../public/images/planetaBmxLogo.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL("https://dracbmx.com.br/")}}>
                        <Image style={{resizeMode:"contain"}} className="w-40 h-40" source={require('../../public/images/dracBmx.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{Linking.openURL("https://www.bmxpride.com/")}}>
                        <Image style={{resizeMode:"contain"}} className="w-40 h-40" source={require('../../public/images/bmxPride.png')}></Image>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}