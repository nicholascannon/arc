import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';

export function Home() {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold">Hello World!</Text>

      <Pressable onPress={() => navigate('Details')}>
        <Text>Go details</Text>
      </Pressable>
    </View>
  );
}
