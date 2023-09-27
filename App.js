import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import Login from './src/pages/login/login';
import Registrar from './src/pages/register/register';
//import Login from './components/login/login';
//import Registrar from './components/registrar/registrar'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Registrar" options={{headerShown: false}} component={Registrar} />

      </Stack.Navigator>
    </NavigationContainer>


    //<Login></Login>
    //<Login></Login>
    //<Registrar></Registrar>
  )
}


