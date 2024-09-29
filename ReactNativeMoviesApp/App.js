import { GluestackUIProvider} from "@gluestack-ui/themed"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from "./src/components/layout/Header";
import { config } from '@gluestack-ui/config'
import { SafeAreaProvider } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaProvider>
    <GluestackUIProvider config={config}>
    <StatusBar style='auto'/>
    <Header/>
    </GluestackUIProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
