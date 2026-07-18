import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../../Theme/colors';
import { typography, spacing } from '../../../Theme/typography';
import { Svgs } from '../../../Assets/SVG';

const ContactCard = ({
  icon,
  title,
  value,
  onPress,
  iconColor = colors.primary,
  borderColor = '#6D28D9',
}) => {
  const Icon = icon;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.card, { borderColor }]}
      onPress={onPress}
    >
      <View style={styles.leftContainer}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: `${iconColor}22`,
              borderColor: `${iconColor}55`,
              borderWidth: 1,
            },
          ]}
        >
          {Icon && <Icon width={22} height={22} fill={iconColor} />}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.value} numberOfLines={1}>
            {value}
          </Text>
        </View>
      </View>
      <View style={[styles.arrowContainer, { borderColor: iconColor }]}>
        <Svgs.right width={14} height={14} fill={iconColor} />
      </View>
    </TouchableOpacity>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0D1226',
    borderRadius: 14,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    marginBottom: spacing.md,
    borderWidth: 1,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    ...typography.h4,
    color: colors.white,
    marginBottom: 2,
  },
  value: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  arrowContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.sm,
  },
});
