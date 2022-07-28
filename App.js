import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DripsyProvider, makeTheme } from 'dripsy';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// You can import from local files
import { Text, View } from 'dripsy';
// or any pure javascript modules available in npm

const Home = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <DripsyProvider theme={makeTheme({})}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </DripsyProvider>
  );
}
