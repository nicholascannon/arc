import { registerRootComponent } from 'expo';
import 'expo-dev-client';

import { App } from './app';
import './global.css';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
