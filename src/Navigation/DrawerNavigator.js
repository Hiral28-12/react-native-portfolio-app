import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabNavigator from './MainTabNavigator';
import DrawerContent from './DrawerContent';
import NotificationsScreen from '../Screens/Notifications';
import SettingsScreen from '../Screens/Settings';
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
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
