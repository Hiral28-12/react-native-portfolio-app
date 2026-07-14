import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../Theme/colors';
import { typography, spacing, width } from '../../Theme/typography';
import GradientButton from '../../Components/GradientButton';
import { tabNames } from '../../Constants/screenNames';
import RNBlobUtil from 'react-native-blob-util';
import { Svgs } from '../../Assets/SVG';
import { GradientText } from '../../Utils/hooks';
import Header from '../../Components/Header';

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
        {/* <View style={styles.topBar}>
          <TouchableOpacity
            style={styles.topBarTitle}
            onPress={() => navigation.openDrawer()}
          >
            <Svgs.menu width={24} height={24} fill={colors.white} />
          </TouchableOpacity>
        </View> */}

        <Header navigation={navigation} title="" showNotification={true} />

        {/* Greeting */}
        <View style={styles.content}>
          <Text style={styles.greeting}>Hi, I'm</Text>
          {/* Name */}
          <GradientText text={'Hiral\nPrajapati'} style={styles.nameCursive} />

          {/* Role */}
          <Text style={styles.role}>
            React Native & Front-End Web Developer
          </Text>
          {/* Description */}
          <Text style={styles.description}>
            I build beautiful digital products that solve real problems.
          </Text>

          {/* Buttons */}
          <GradientButton
            title="Download CV"
            onPress={downloadCV}
            style={styles.btn}
          />
          <GradientButton
            title="Contact Me"
            outline
            onPress={() => navigation.navigate(tabNames.CONTACT)}
            style={styles.btn}
          />
          {/* Social Icons */}
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialButton}>
              <Svgs.linkedin width={30} height={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Svgs.github width={30} height={30} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Svgs.mail width={30} height={30} />
            </TouchableOpacity>
          </View>
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
  content: {
    paddingHorizontal: spacing.xl,
    width: '60%',
    marginTop: spacing.xxl,
  },
  greeting: {
    ...typography.h3,
    color: colors.textSecondary,
    alignSelf: 'flex-start',
    marginTop: spacing.xxl,
  },
  nameCursive: {
    marginTop: spacing.xs,
    fontFamily: 'DancingScript-Bold',
    fontSize: 40,
    lineHeight: 48,
  },
  role: {
    ...typography.bodySmall,
    color: colors.white,
    alignSelf: 'flex-start',
    marginTop: spacing.xs,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'left',
    marginTop: spacing.xl,
    lineHeight: 26,
  },
  btn: {
    width: width - spacing.xxl * 10,
    marginTop: spacing.xxl,
    alignSelf: 'flex-start',
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },

  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.08)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.15)',
  },
});
