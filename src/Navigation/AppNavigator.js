import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenNames from '../Constants/screenNames';
import Splash from '../Screens/Splash';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screenNames.SPLASH}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={screenNames.SPLASH} component={Splash} />
        <Stack.Screen name={screenNames.HOME} component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
