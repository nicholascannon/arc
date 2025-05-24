/* eslint-disable @typescript-eslint/no-namespace */
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Details } from './screens/details';
import { Home } from './screens/home';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screens: {
    Home,
    Details,
  },
  screenOptions: {
    headerShown: false,
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends RootStackParamList {}
  }
}
