import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Register from './screens/Register';
import Menupanel from './screens/Menupanel';
import Welcomen from './screens/Welcome';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}  initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Menupanel" component={Menupanel} />
        <Stack.Screen name="Welcome"  component={Welcomen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}