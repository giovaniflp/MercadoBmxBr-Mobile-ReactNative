import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from './screens/HomePage';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import AppMain from './screens/AppMain';
import SearchScreen from './screens/SearchScreen';

export default function App() {

  const rotasPages = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <rotasPages.Navigator screenOptions={{headerShown: false}}>
        <rotasPages.Screen name="HomePage" component={HomePage} options={{ headerShown: false }}/>
        <rotasPages.Screen name="LoginScreen" component={LoginScreen} />
        <rotasPages.Screen name="RegisterScreen" component={RegisterScreen}/>
        <rotasPages.Screen name="AppMain" component={AppMain}/>
        <rotasPages.Screen name="SearchScreen" component={SearchScreen}/>
      </rotasPages.Navigator>
    </NavigationContainer>
  );
}

