import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RNBlobUtil from 'react-native-blob-util';
import CircularProgress from '../Components/CircularProgress';
import { useNavigationState } from '@react-navigation/native';
import colors from '../Theme/colors';
import { typography, spacing } from '../Theme/typography';
import { tabNames } from '../Constants/screenNames';
import { Svgs } from '../Assets/SVG';
import { GradientText } from '../Utils/hooks';

const NAV_ITEMS = [
  { label: 'Home', route: tabNames.HOME, Icon: Svgs.home },
  { label: 'About Me', route: tabNames.ABOUT, Icon: Svgs.about },
  { label: 'Projects', route: tabNames.PROJECTS, Icon: Svgs.projects },
  { label: 'Skills', route: tabNames.SKILLS, Icon: Svgs.skills },
  {
    label: 'Journey',
    route: 'Journey',
    Icon: Svgs.journey,
    tabRoute: tabNames.ABOUT,
  },
  { label: 'Contact', route: tabNames.CONTACT, Icon: Svgs.contact },
  { label: 'Notifications', route: 'Notifications', Icon: Svgs.notification },
  { label: 'Resume', route: 'Resume', Icon: Svgs.file },
  { label: 'Settings', route: 'Settings', Icon: Svgs.settings },
];

const DrawerContent = ({ navigation }) => {
  const activeRoute = useNavigationState(s => {
    const mainRoute = s?.routes?.[s?.index];
    const tabState = mainRoute?.state;
    return tabState?.routeNames?.[tabState?.index];
  });

  const handleResumePress = async () => {
    const destPath = `${RNBlobUtil.fs.dirs.DownloadDir}/hiral_resume.pdf`;
    const alreadyExists = await RNBlobUtil.fs.exists(destPath);
    if (alreadyExists) {
      RNBlobUtil.android.actionViewIntent(destPath, 'application/pdf');
      return;
    }
    try {
      const res = await RNBlobUtil.config({
        path: destPath,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          title: 'hiral_resume.pdf',
          description: 'Downloading resume...',
          mime: 'application/pdf',
        },
      }).fetch('GET', 'https://hiralprajapati.dev/hiral_resume.pdf');
      RNBlobUtil.android.actionViewIntent(res.path(), 'application/pdf');
    } catch (e) {
      console.log('Resume download error:', e);
    }
  };

  return (
    <View style={styles.root}>
      {/* Close button */}
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => navigation.closeDrawer()}
      >
        <Text style={styles.closeX}>
          <Svgs.cross width={24} height={24} stroke={colors.white} />
        </Text>
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile */}
        <View style={styles.profileSection}>
          <View style={styles.avatarWrapper}>
            <CircularProgress size={100} strokeWidth={3} animated />
            <Image
              source={require('../Assets/Images/profil_illustration.png')}
              style={styles.avatar}
            />
          </View>

          <View style={styles.nameRow}>
            <Text style={styles.hiText}>Hi, I'm </Text>
            <GradientText text="Hiral Prajapati" style={styles.hiralText} />
            <Text style={styles.wave}> 👋</Text>
          </View>
          <Text style={styles.role}>
            React Native & Front-End Web Developer
          </Text>
          <View style={styles.divider} />
        </View>

        {/* Nav Items */}
        <View style={styles.navList}>
          {NAV_ITEMS.map(({ label, route, tabRoute, Icon }) => {
            const focused = activeRoute === (tabRoute || route);
            return (
              <TouchableOpacity
                key={route}
                style={[styles.navItem, focused && styles.navItemActive]}
                onPress={() => {
                  navigation.closeDrawer();
                  if (route === 'Journey') {
                    navigation.navigate('Main', {
                      screen: tabNames.ABOUT,
                      params: { scrollToJourney: true },
                    });
                  } else if (
                    route !== 'Notifications' &&
                    route !== 'Resume' &&
                    route !== 'Settings'
                  ) {
                    navigation.navigate('Main', { screen: route });
                  } else if (route === 'Resume') {
                    handleResumePress();
                  } else {
                    navigation.navigate(route);
                  }
                }}
              >
                {focused ? (
                  <LinearGradient
                    colors={['#D946EF', '#8B5CF6']}
                    style={styles.iconWrapActive}
                  >
                    <Icon width={20} height={20} stroke={colors.white} />
                  </LinearGradient>
                ) : (
                  <View style={styles.iconWrap}>
                    <Icon width={20} height={20} stroke={colors.white} />
                  </View>
                )}
                <Text
                  style={[styles.navLabel, focused && styles.navLabelActive]}
                >
                  {label}
                </Text>
                <Svgs.right
                  width={16}
                  height={16}
                  stroke={focused ? colors.secondary : colors.textSecondary}
                  style={styles.chevron}
                />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Astronaut illustration */}
        <Image
          source={require('../Assets/Images/drawer_illu.png')}
          style={styles.illustration}
          resizeMode="cover"
        />
      </ScrollView>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn} onPress={() => navigation.navigate('Splash')}>
        <LinearGradient
          colors={['#D946EF33', '#8B5CF633']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.logoutGradient}
        >
          <Svgs.logout width={20} height={20} stroke={colors.white} />
          <Text style={styles.logoutText}>Logout</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#080B1A' },

  closeBtn: {
    position: 'absolute',
    top: spacing.xl,
    right: spacing.lg,
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
  },
  closeX: { color: colors.white, fontSize: 14 },

  scroll: { paddingBottom: spacing.xl },

  profileSection: {
    alignItems: 'center',
    paddingTop: spacing.xxl * 2,
    paddingHorizontal: spacing.xl,
  },

  avatarWrapper: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  avatar: {
    width: 94,
    height: 94,
    borderRadius: 47,
    resizeMode: 'cover',
    position: 'absolute',
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  hiText: { ...typography.h3, color: colors.white },
  hiralText: { ...typography.cursiveSemi },
  wave: { fontSize: 20 },

  role: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: 4,
    textAlign: 'center',
  },

  divider: {
    width: '40%',
    height: 2,
    borderRadius: 1,
    backgroundColor: colors.secondary + '66',
    marginTop: spacing.md,
  },

  navList: { paddingTop: spacing.md, paddingHorizontal: spacing.md },

  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    borderRadius: 12,
    marginBottom: 2,
    marginHorizontal: spacing.md,
  },
  navItemActive: { backgroundColor: '#1E1040' },

  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  iconWrapActive: {
    width: 36,
    height: 36,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },

  navLabel: { ...typography.body, color: colors.white, flex: 1 },
  navLabelActive: { color: colors.white, fontFamily: 'Poppins-SemiBold' },
  chevron: { marginLeft: 'auto' },

  illustration: {
    width: '100%',
    height: 200,
    marginTop: spacing.md,
  },

  logoutBtn: {
    marginHorizontal: spacing.xl,
    marginBottom: spacing.xl,
    borderRadius: 30,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.secondary + '66',
  },
  logoutGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    gap: spacing.sm,
  },
  logoutText: {
    ...typography.body,
    color: colors.white,
    fontFamily: 'Poppins-SemiBold',
  },
});
