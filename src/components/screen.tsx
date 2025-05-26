import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { Pressable, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ChevronLeftIcon, Icon } from './ui/icon';

export function Screen({
  children,
  showHeader,
}: {
  children: ReactNode;
  showHeader?: boolean;
}) {
  const { goBack } = useNavigation();

  return (
    <SafeAreaView className="flex-1 p-2 pt-4">
      <LinearGradient
        colors={['#1a237e', '#4a148c', '#000000']}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
      {showHeader && (
        <View className="w-full">
          <Pressable className="w-8 h-8" onPress={() => goBack()}>
            <Icon as={ChevronLeftIcon} className="w-8 h-8" />
          </Pressable>
        </View>
      )}

      {children}
    </SafeAreaView>
  );
}
