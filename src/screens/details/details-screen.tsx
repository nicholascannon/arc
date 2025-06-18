import { View } from 'react-native';

import { Screen } from '@/components/layouts/screen';
import { Heading } from '@/components/ui/heading';

export function DetailsScreen() {
  return (
    <Screen showHeader>
      <View className="px-4">
        <Heading size="2xl">Details</Heading>
      </View>
    </Screen>
  );
}
