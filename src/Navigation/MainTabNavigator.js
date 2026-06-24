import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import screenNames, { Home, About, Skills, Project, Contact } from '../Screens';
import colors from '../Theme/colors';
import { typography } from '../Theme/typography';
import { Svgs } from '../Assets/SVG';

const Tab = createBottomTabNavigator();

const TAB_SVGS = {
  [screenNames.HOME]: Svgs.home,
  [screenNames.ABOUT]: Svgs.about,
  [screenNames.SKILLS]: Svgs.skills,
  [screenNames.PROJECTS]: Svgs.projects,
  [screenNames.CONTACT]: Svgs.contact,
};

const TabIcon = ({ name, focused }) => {
  const Icon = TAB_SVGS[name];
  const color = focused ? colors.white : colors.textSecondary;
  return (
    <View style={[tabStyles.iconWrap, focused && tabStyles.iconWrapActive]}>
      <Icon width={22} height={22} fill={color} stroke={color} />
    </View>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: tabStyles.bar,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelStyle: tabStyles.label,
        tabBarIcon: ({ focused }) => (
          <TabIcon name={route.name} focused={focused} />
        ),
      })}
    >
      <Tab.Screen
        name={screenNames.HOME}
        component={Home}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name={screenNames.ABOUT}
        component={About}
        options={{ tabBarLabel: 'About' }}
      />
      <Tab.Screen
        name={screenNames.SKILLS}
        component={Skills}
        options={{ tabBarLabel: 'Skills' }}
      />
      <Tab.Screen
        name={screenNames.PROJECTS}
        component={Project}
        options={{ tabBarLabel: 'Projects' }}
      />
      <Tab.Screen
        name={screenNames.CONTACT}
        component={Contact}
        options={{ tabBarLabel: 'Contact' }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

const tabStyles = StyleSheet.create({
  bar: {
    backgroundColor: colors.surface,
    borderTopWidth: 0,
    height: 65,
    paddingBottom: 8,
    paddingTop: 6,
    elevation: 20,
    shadowColor: colors.secondary,
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  label: {
    ...typography.caption,
    fontSize: 10,
  },
  iconWrap: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  iconWrapActive: {
    backgroundColor: colors.primary + '33',
  },

});
