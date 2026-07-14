import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Svgs } from '../../Assets/SVG';
import colors from '../../Theme/colors';
import { spacing, typography } from '../../Theme/typography';

const Header = ({ navigation, title, showNotification = true }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Svgs.menu width={24} height={24} fill={colors.white} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>{title}</Text>
      </View>

      {showNotification && (
        <TouchableOpacity activeOpacity={0.8}>
          <Svgs.notification width={24} height={24} fill={colors.white} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBarTitle: {
    ...typography.h3,
    color: colors.white,
    marginLeft: spacing.md,
  },
});
