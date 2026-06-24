import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screenNames, { Splash } from '../Screens';
import MainTabNavigator from './MainTabNavigator';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={screenNames.SPLASH}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={screenNames.SPLASH} component={Splash} />
        <Stack.Screen name={screenNames.HOME} component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
