import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Theme/colors';
import { typography, spacing, width } from '../../Theme/typography';
import GradientButton from '../../Components/GradientButton';
import { Svgs } from '../../Assets/SVG';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        {/* Background orbs */}

        {/* Top bar */}
        <View style={styles.topBar}>
          <Text style={styles.topBarTitle}>
            <Svgs.menu width={24} height={24} fill={colors.white} />
          </Text>
          <TouchableOpacity style={styles.bellWrap}>
            <Text style={styles.bellIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Greeting */}
        <View style={styles.content}>
          <Text style={styles.greeting}>Hi, I'm</Text>
          {/* Name */}
          <Text style={styles.nameRow}>
            <Text style={styles.nameCursive}>Hiral{'\n'}</Text>
            <Text style={styles.nameCursive}>Prajapati</Text>
          </Text>

          {/* Role */}
          <Text style={styles.role}>Front-End & Back-End Developer</Text>

          {/* Profile image */}
          <View style={styles.imageWrap}>
            <LinearGradient
              colors={[colors.primary, colors.secondary, colors.accent]}
              style={styles.imageGradientBorder}
            >
              <Image
                source={require('../../Assets/Images/splash_developer.png')}
                style={styles.profileImage}
              />
            </LinearGradient>
          </View>

          {/* Description */}
          <Text style={styles.description}>
            I build beautiful digital products that solve real problems.
          </Text>

          {/* Buttons */}
          <GradientButton
            title="⬇  Download CV"
            onPress={() => {}}
            style={styles.btn}
          />
          <GradientButton
            title="Contact Me"
            outline
            onPress={() => navigation.navigate('Contact')}
            style={styles.btn}
          />

          {/* Stats */}
          {/* <View style={styles.statsRow}>
            {[
              { value: '2+', label: 'Years\nExperience' },
              { value: '20+', label: 'Projects\nCompleted' },
              { value: '10+', label: 'Happy\nClients' },
            ].map((s, i) => (
              <View key={i} style={styles.statItem}>
                <Text style={styles.statValue}>{s.value}</Text>
                <Text style={styles.statLabel}>{s.label}</Text>
              </View>
            ))} */}
          {/* </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  scroll: { paddingBottom: 40 },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  topBarTitle: { ...typography.h3, color: colors.white },
  bellWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIcon: { fontSize: 18 },

  content: { paddingHorizontal: spacing.xl, alignItems: 'center' },

  greeting: {
    ...typography.h3,
    color: colors.textSecondary,
    alignSelf: 'flex-start',
    marginTop: spacing.xl,
  },

  nameRow: { alignSelf: 'flex-start', marginTop: spacing.xs },
  nameCursive: {
    fontFamily: 'DancingScript-Bold',
    fontSize: 40,
    color: colors.secondary,
    lineHeight: 48,
  },

  role: {
    ...typography.bodySmall,
    color: colors.white,
    alignSelf: 'flex-start',
    marginTop: spacing.xs,
  },

  imageWrap: { marginTop: spacing.xl, alignItems: 'center' },
  imageGradientBorder: {
    width: 200,
    height: 200,
    borderRadius: 100,
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 194,
    height: 194,
    borderRadius: 97,
    resizeMode: 'cover',
  },
  badge: {
    position: 'absolute',
    bottom: 10,
    right: width / 2 - 130,
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: spacing.borderRadius.md,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  badgeText: {
    color: colors.secondary,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },

  description: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xl,
    lineHeight: 26,
  },

  btn: {
    width: width - spacing.xl * 2,
    marginTop: spacing.md,
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width - spacing.xl * 2,
    marginTop: spacing.xl,
    backgroundColor: colors.surface,
    borderRadius: spacing.borderRadius.xl,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  statItem: { flex: 1, alignItems: 'center' },
  statValue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: colors.secondary,
  },
  statLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 2,
  },
});
