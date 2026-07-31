import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Svgs } from '../../Assets/SVG';
import colors from '../../Theme/colors';
import { spacing, typography } from '../../Theme/typography';
import { GradientText } from '../../Utils/hooks';

const Header = ({ navigation, title, showNotification = true, titleSuffix }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Svgs.menu width={24} height={24} fill={colors.white} />
        </TouchableOpacity>
        <View style={styles.titleRow}>
          {title ? <Text style={styles.topBarTitle}>{title}</Text> : null}
          {titleSuffix ? (
            <GradientText text={titleSuffix} style={styles.topBarTitleGradient} />
          ) : null}
        </View>
      </View>

      {showNotification && (
        <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Notifications')}>
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
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacing.md,
  },
  topBarTitle: {
    ...typography.h3,
    color: colors.white,
  },
  topBarTitleGradient: {
    ...typography.cursiveTitle,
    fontSize: 22,
    marginLeft: 4,
  },
});
