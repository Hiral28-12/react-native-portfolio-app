import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../Theme/colors';
import { typography, spacing } from '../../Theme/typography';
import { Svgs } from '../../Assets/SVG';

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
