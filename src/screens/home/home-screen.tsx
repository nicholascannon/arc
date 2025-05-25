import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';

import { Screen } from '@/components/screen';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export function HomeScreen() {
  const { navigate } = useNavigation();

  return (
    <Screen>
      <Heading size="5xl">Hello World!</Heading>

      <Pressable onPress={() => navigate('Details')}>
        <Text>Go details</Text>
      </Pressable>
    </Screen>
  );
}
