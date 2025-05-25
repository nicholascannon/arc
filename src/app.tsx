import { GluestackUIProvider } from './components/ui/gluestack-ui-provider';
import { Navigation } from './navigation';

export function App() {
  return (
    <GluestackUIProvider mode="dark">
      <Navigation />
    </GluestackUIProvider>
  );
}
