import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Screen({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView className="flex-1 dark">
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

      {children}
    </SafeAreaView>
  );
}
