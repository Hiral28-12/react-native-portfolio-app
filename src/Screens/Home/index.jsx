import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import GradientButton from '../../Components/GradientButton';
import { tabNames } from '../../Constants/screenNames';
import RNBlobUtil from 'react-native-blob-util';
import { Svgs } from '../../Assets/SVG';
import { GradientText } from '../../Utils/hooks';
import Header from '../../Components/Header';
import CircularProgress from '../Skills/Components/CircularProgress';
import styles from './style';

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

const handleSocialPress = type => {
  if (type === 'linkedin') {
    Linking.openURL('https://linkedin.com/in/hiral-prajapati-226200274');
  } else if (type === 'github') {
    Linking.openURL('https://github.com/Hiral28-12');
  } else if (type === 'mail') {
    Linking.openURL('mailto:hiralprajapati289@gmail.com');
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
            icon={Svgs.file}
          />
          <GradientButton
            title="Contact Me"
            outline
            onPress={() => navigation.navigate(tabNames.CONTACT)}
            style={styles.btn}
            icon={Svgs.contact}
          />
          {/* Social Icons */}
          <View style={styles.socialRow}>
            <TouchableOpacity onPress={() => handleSocialPress('linkedin')}>
              <View style={styles.socialButton}>
                <CircularProgress size={50} strokeWidth={4} animated />
                <View style={styles.socialInner}>
                  <Svgs.linkedin width={26} height={26} />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSocialPress('github')}>
              <View style={styles.socialButton}>
                <CircularProgress size={50} strokeWidth={4} animated />
                <View style={styles.socialInner}>
                  <Svgs.github width={26} height={26} />
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleSocialPress('mail')}>
              <View style={styles.socialButton}>
                <CircularProgress size={50} strokeWidth={4} animated />
                <View style={styles.socialInner}>
                  <Svgs.mail width={26} height={26} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;
