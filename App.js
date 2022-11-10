//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Navigationservice from './src/navigation/Navigationservice';
import Dashboard from './src/navigation/Dasboard';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Favourites from './src/screens/Favourites';
import { Provider } from 'react-redux';
import {store} from './src/redux/store'
// create a component

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={ref => Navigationservice.setTopLevelNavigator(ref)}>
        <Stack.Navigator
          initialRouteName="Login"  
          screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen
            name='Login'
            component={Login}
            options={{
              headerShown: false,
            }}
            />
          <Stack.Screen
            name='Favourites'
            component={Favourites}
            options={{
              headerShown: false,
            }}
            />
        <Stack.Screen
            name='Home'
            component={Home}
            options={{
              headerShown: false,
            }}
            />
        <Stack.Screen
            name='Dashboard'
            component={Dashboard}
            options={{
              headerShown: false,
            }}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

export default App;
