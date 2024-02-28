import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from './screens/HomePage';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import SearchScreen from './screens/SearchScreen';
import HomeScreen from './screens/HomeScreen';
import FullAdScreen from './screens/FullAdScreen';
import CategoryScreen from './screens/CategoryScreen';

export default function App() {

  const rotasPages = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <rotasPages.Navigator screenOptions={{headerShown: false}}>
        <rotasPages.Screen name="HomePage" component={HomePage}/>
        <rotasPages.Screen name="LoginScreen" component={LoginScreen} />
        <rotasPages.Screen name="RegisterScreen" component={RegisterScreen}/>
        <rotasPages.Screen name="HomeScreen" component={HomeScreen}/>
        <rotasPages.Screen name="SearchScreen" component={SearchScreen}/>
        <rotasPages.Screen name="FullAdScreen" component={FullAdScreen}/>
        <rotasPages.Screen name="CategoryScreen" component={CategoryScreen}/>
      </rotasPages.Navigator>
    </NavigationContainer>
  );
}

