import { useNavigation } from '@react-navigation/native';

import { Screen } from '@/components/layouts/screen';
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { ChevronRightIcon } from '@/components/ui/icon';

export function HomeScreen() {
  const { navigate } = useNavigation();

  return (
    <Screen>
      <Heading size="5xl">Hello World!</Heading>

      <Button size="xl" variant="outline" onPress={() => navigate('Details')}>
        <ButtonText>Go details</ButtonText>
        <ButtonIcon as={ChevronRightIcon} />
      </Button>
    </Screen>
  );
}
