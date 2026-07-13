import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../Theme/colors';
import { typography, spacing } from '../../Theme/typography';
import { Svgs } from '../../Assets/SVG';
import ContactCard from '../../Components/ContactCard';

const ContactScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Svgs.menu width={24} height={24} fill={colors.white} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Contact Me</Text>
        <TouchableOpacity>
          <Svgs.notification width={24} height={24} fill={colors.white} />
        </TouchableOpacity>
      </View>
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
    </SafeAreaView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  topBarTitle: { ...typography.h3, color: colors.white },
});
