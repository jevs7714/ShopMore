import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { icons, images } from '../constants';
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView className="bg-orange-300 h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={icons.ShoppingCart}
            className="w-[130px] h-[84px] mt-7"
            resizeMode="contain"
          />

          <View className="relative mt-4 ">
            <Text className="text-4xl text-black font-bold text-justify">
              Call Smart, Call with  <Text className="text-indigo-700">ShopMore</Text>.
            </Text>

          </View>


          <Image
            source={images.ShopMore}
            className="max-2-[380px] w-full h-[200px]"
            resizeMode="contain"
          />

          <View className="relative mb-7 ">
            <Text className="text-sm text-gray-700 font-bold text-justify">
              Shop Big, Spend Smart with ShopMore!
            </Text>

          </View>

          <CustomButton
            title="Get Started"
            handlePress={() => { router.push('/sign-in') }}
            containerStyle="w-full mt-1"
          />
        </View>

      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}

