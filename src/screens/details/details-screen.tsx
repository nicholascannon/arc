import { useNavigation } from '@react-navigation/native';
import { Pressable, Text, View } from 'react-native';

export function DetailsScreen() {
  const { goBack } = useNavigation();

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Pressable onPress={() => goBack()}>
        <Text>Go home</Text>
      </Pressable>
    </View>
  );
}
