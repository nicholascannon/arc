import { useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native';

import { Screen } from '@/components/ui/screen';

export function DetailsScreen() {
  const { goBack } = useNavigation();

  return (
    <Screen>
      <Pressable onPress={() => goBack()}>
        <Text>Go home</Text>
      </Pressable>
    </Screen>
  );
}
