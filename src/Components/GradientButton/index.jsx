import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../Theme/colors';
import { typography, spacing } from '../../Theme/typography';

const GradientButton = ({
  title,
  onPress,
  style,
  textStyle,
  gradientColors = [colors.gradient[0], colors.gradient[1], colors.gradient[2]],
  outline = false,
  height = 55,
  borderRadius = spacing.borderRadius.lg,
  icon: Icon = null,
}) => {
  if (outline) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.outlineBtn, { height, borderRadius }, style]}
      >
        {Icon && (
          <Icon
            width={18}
            height={18}
            color={colors.white}
            style={styles.icon}
          />
        )}
        <Text style={[styles.outlineText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ borderRadius }, style]}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.gradient, { height, borderRadius }]}
      >
        {Icon && (
          <Icon
            width={24}
            height={24}
            stroke={colors.white}
            color={colors.white}
            style={styles.icon}
          />
        )}
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  gradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    ...typography.h4,
    color: colors.white,
  },
  outlineBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1.5,
    borderColor: colors.secondary,
  },
  outlineText: {
    ...typography.h4,
    color: colors.white,
  },
});
