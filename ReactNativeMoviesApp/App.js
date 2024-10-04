// import { GluestackUIProvider} from "@gluestack-ui/themed"
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, View } from 'react-native';
// import Header from "./src/components/layout/Header";
// import { config } from '@gluestack-ui/config'
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import MoviesContainer from "./src/components/containers/MoviesContainer";
// import TVShowsContainer from "./src/components/containers/TVShowsContainer";
// import SearchContainer from "./src/components/containers/SearchContainer";

// const Tab = createMaterialTopTabNavigator();

// const App = () => {
//   return (
//     <SafeAreaProvider>
//     <GluestackUIProvider config={config}>
//     <StatusBar style='auto'/>
//     <Header/>
//     </GluestackUIProvider>

//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Movies" component={MoviesContainer} />
//         <Tab.Screen name="TV Shows" component={TVShowsContainer} />
//         <Tab.Screen name="Search" component={SearchContainer} />
//       </Tab.Navigator>
//     </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;


import { GluestackUIProvider } from '@gluestack-ui/themed'
import { StatusBar } from 'expo-status-bar';
import { config } from '@gluestack-ui/config'
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Header from './src/components/layout/Header';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoviesContainer from './src/components/containers/MoviesContainer'; 
import MovieDetailsScreen from './src/components/screens/MovieDetailScreen';

const App = () => {
  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <Header />
        <StatusBar style='auto' />
        {/* <NavigationContainer>
          <Stack.Navigator initialRouteName="Movies">
            <Stack.Screen name="Movies" component={MoviesContainer} options={{ headerShown: false }} />
            <Stack.Screen name="MovieDetailScreen" component={MovieDetailsScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer> */}
      </GluestackUIProvider>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App