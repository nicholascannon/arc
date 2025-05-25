import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';

import { Screen } from '@/components/ui/screen';

export function HomeScreen() {
  const { navigate } = useNavigation();

  return (
    <Screen>
      <Text className="text-2xl font-bold">Hello World!</Text>

      <Pressable onPress={() => navigate('Details')}>
        <Text>Go details</Text>
      </Pressable>
    </Screen>
  );
}
