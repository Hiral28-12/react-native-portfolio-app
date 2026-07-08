import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Theme/colors';
import { typography, spacing, width } from '../../Theme/typography';
import GradientButton from '../../Components/GradientButton';
import { tabNames } from '../../Constants/screenNames';
import RNBlobUtil from 'react-native-blob-util';
import { Svgs } from '../../Assets/SVG';

const downloadCV = async () => {
  const src = RNBlobUtil.fs.asset('hiral_resume.pdf');
  const dest = `${RNBlobUtil.fs.dirs.DownloadDir}/Hiral_Resume.pdf`;

  await RNBlobUtil.fs.cp(src, dest);
  RNBlobUtil.android.actionViewIntent(dest, 'application/pdf');

  try {
    await RNBlobUtil.fs.cp(src, dest);
    RNBlobUtil.android.actionViewIntent(dest, 'application/pdf');
  } catch (e) {
    console.error('Download failed', e);
  }
};

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('../../Assets/Images/home_background.png')}
        style={styles.bg}
        resizeMode="cover"
      >
        {/* Top bar */}
        <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.topBarTitle}
            onPress={() => navigation.openDrawer()}
          >
            <Svgs.menu width={24} height={24} fill={colors.white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bellWrap}>
            <Svgs.notification width={24} height={24} fill={colors.white} />
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
            title="Download CV"
            icon={Svgs.download}
            onPress={downloadCV}
            style={styles.btn}
          />
          <GradientButton
            title="Contact Me"
            outline
            onPress={() => navigation.navigate(tabNames.CONTACT)}
            style={styles.btn}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, paddingBottom: -30 },
  bg: { width: '100%', height: '100%' },
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

  btn: { width: width - spacing.xl * 2, marginTop: spacing.md },
});
