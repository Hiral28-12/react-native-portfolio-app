import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import colors from '../../../Theme/colors';
import { typography, spacing } from '../../../Theme/typography';
import { Svgs } from '../../../Assets/SVG';

const ContactCard = ({ icon, title, value, onPress }) => {
  const Icon = icon;

  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.card} onPress={onPress}>
      <View style={styles.leftContainer}>
        <View style={styles.iconContainer}>
          {Icon && <Icon width={22} height={22} fill={colors.primary} />}
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      </View>

      <Svgs.right width={18} height={18} fill={colors.white} />
    </TouchableOpacity>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#131B35',

    borderRadius: 18,

    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,

    marginBottom: spacing.md,

    borderWidth: 1,
    borderColor: '#232F56',
  },

  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconContainer: {
    width: 52,
    height: 52,

    borderRadius: 26,

    backgroundColor: 'rgba(139,92,246,0.15)',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: spacing.md,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    ...typography.bodyMedium,
    color: '#9CA3AF',
    marginBottom: 4,
  },

  value: {
    ...typography.bodyLarge,
    color: colors.white,
  },
});
