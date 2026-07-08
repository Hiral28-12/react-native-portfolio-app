import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabNavigator from './MainTabNavigator';
import DrawerContent from './DrawerContent';
import colors from '../Theme/colors';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: { width: 280, backgroundColor: colors.background },
        overlayColor: colors.black + '99',
        swipeEdgeWidth: 50,
      }}
    >
      <Drawer.Screen name="Main" component={MainTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
