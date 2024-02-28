import { TouchableOpacity, Image, View, ScrollView } from "react-native"

export default function VerifiedStores(){
    return(
        <View>
            <ScrollView horizontal={true}>
                <View  className="flex flex-row gap-4">
                    <TouchableOpacity>
                        <Image style={{resizeMode:"contain"}} className="w-40 h-40" source={require('../../public/images/dreamBmxLogo.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image style={{resizeMode:"contain"}} className="w-40 h-40" source={require('../../public/images/planetaBmxLogo.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{resizeMode:"contain"}} className="w-40 h-40" source={require('../../public/images/dracBmx.png')}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{resizeMode:"contain"}} className="w-40 h-40" source={require('../../public/images/bmxPride.png')}></Image>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}