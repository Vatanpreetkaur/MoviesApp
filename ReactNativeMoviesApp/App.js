import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { config } from '@gluestack-ui/config';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './src/components/layout/Header';
import MainScreen from './src/components/screens/MainScreen'; 
import MoreDetailsScreen from './src/components/screens/MoreDetailsScreen'; 


const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen 
              name="Main" 
              component={MainScreen} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="MoreDetailsScreen" 
              component={MoreDetailsScreen} 
              options={{ 
                title: 'Details', 
                headerShown: true  
              }} 
            />
            
          </Stack.Navigator>
        </NavigationContainer>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
};

export default App;
