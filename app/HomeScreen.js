import { View, Text, ScrollView } from "react-native";
import BottomBar from "./components/BottomBar";
import HomeAd from "./components/HomeAd";
import VerifiedStores from "./components/VerifiedStores";

export default function HomeScreen() {
  return (
    <View className="flex h-full mt-8 p-4">
      <View>
        <ScrollView className="flex">
          <View>
            <Text className="text-3xl">Lojas Verificadas</Text>
            <VerifiedStores></VerifiedStores>
          </View>
          <View className="mb-8">
            <Text className="text-3xl">Peças Novas</Text>
            <ScrollView horizontal={true}>
              <View className="flex flex-row">
                <HomeAd></HomeAd>
                <HomeAd></HomeAd>
                <HomeAd></HomeAd>
              </View>
            </ScrollView>
          </View>
          <View className="mb-8">
            <Text className="text-3xl">Peças Usadas</Text>
            <ScrollView horizontal={true}>
              <View className="flex flex-row">
                <HomeAd></HomeAd>
                <HomeAd></HomeAd>
                <HomeAd></HomeAd>
              </View>
            </ScrollView>
          </View>
          <View className="mb-20">
            <Text className="text-3xl">Peças para Doação</Text>
            <ScrollView horizontal={true}>
              <View className="flex flex-row">
                <HomeAd></HomeAd>
                <HomeAd></HomeAd>
                <HomeAd></HomeAd>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
      <BottomBar></BottomBar>
    </View>
  );
}