import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useNavigationState } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../Theme/colors';
import { typography, spacing } from '../Theme/typography';
import { tabNames } from '../Constants/screenNames';
import { Svgs } from '../Assets/SVG';

const NAV_ITEMS = [
  { label: 'Home', route: tabNames.HOME, Icon: Svgs.home },
  { label: 'About', route: tabNames.ABOUT, Icon: Svgs.about },
  { label: 'Skills', route: tabNames.SKILLS, Icon: Svgs.skills },
  { label: 'Projects', route: tabNames.PROJECTS, Icon: Svgs.projects },
  { label: 'Contact', route: tabNames.CONTACT, Icon: Svgs.contact },
];

const DrawerContent = ({ navigation }) => {
  const activeRoute = useNavigationState(s => {
    const mainRoute = s?.routes?.[s?.index];
    const tabState = mainRoute?.state;
    return tabState?.routeNames?.[tabState?.index];
  });

  return (
    <DrawerContentScrollView
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      {/* Profile */}
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.profileSection}
      >
        <LinearGradient
          colors={[colors.primary, colors.secondary, colors.accent]}
          style={styles.avatarBorder}
        >
          <Image
            source={require('../Assets/Images/splash_developer.png')}
            style={styles.avatar}
          />
        </LinearGradient>
        <Text style={styles.name}>Hiral Prajapati</Text>
        <Text style={styles.role}>Front-End & Back-End Developer</Text>
      </LinearGradient>

      {/* Nav Items */}
      <View style={styles.navList}>
        {NAV_ITEMS.map(({ label, route, Icon }) => {
          const focused = activeRoute === route;
          return (
            <TouchableOpacity
              key={route}
              style={[styles.navItem, focused && styles.navItemActive]}
              onPress={() => {
                navigation.closeDrawer();
                navigation.navigate(route);
              }}
            >
              <Icon
                width={20}
                height={20}
                fill={focused ? colors.secondary : colors.textSecondary}
                stroke={focused ? colors.secondary : colors.textSecondary}
              />
              <Text style={[styles.navLabel, focused && styles.navLabelActive]}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },

  profileSection: {
    paddingTop: spacing.xl * 2,
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
  },
  avatarBorder: {
    width: 90,
    height: 90,
    borderRadius: 45,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  avatar: { width: 84, height: 84, borderRadius: 42, resizeMode: 'cover' },
  name: { ...typography.h3, color: colors.white, marginBottom: 4 },
  role: { ...typography.caption, color: colors.white + 'CC', textAlign: 'center' },

  navList: { paddingTop: spacing.lg, paddingHorizontal: spacing.md },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderRadius: 12,
    marginBottom: 4,
    gap: spacing.md,
  },
  navItemActive: { backgroundColor: colors.primary + '22' },
  navLabel: { ...typography.body, color: colors.textSecondary },
  navLabelActive: { color: colors.secondary, fontFamily: 'Poppins-SemiBold' },
});
