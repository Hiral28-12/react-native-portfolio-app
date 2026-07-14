import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../Theme/colors';
import ContactCard from './Components/ContactCard';
import { Svgs } from '../../Assets/SVG';
import Header from '../../Components/Header';

const ContactScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('../../Assets/Images/sec_bg.png')}
        style={styles.bg}
        resizeMode="cover"
      >
        <Header navigation={navigation} title="Contact Me" />
        <ContactCard
          icon={Svgs.contact}
          title="Email"
          value="hiralprajapati289@gmail.com"
          onPress={() => {}}
        />

        <ContactCard
          icon={Svgs.contact}
          title="Phone"
          value="+91 7600206518"
          onPress={() => {}}
        />

        <ContactCard
          icon={Svgs.contact}
          title="LinkedIn"
          value="linkedin.com/in/hiral-prajapati"
          onPress={() => {}}
        />

        <ContactCard
          icon={Svgs.contact}
          title="GitHub"
          value="github.com/Hiral28-12"
          onPress={() => {}}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
});
