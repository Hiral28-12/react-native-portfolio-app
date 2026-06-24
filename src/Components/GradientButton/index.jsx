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
  gradientColors = [colors.secondary, colors.primary, colors.accent],
  outline = false,
  height = 55,
  borderRadius = spacing.borderRadius.lg,
}) => {
  if (outline) {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.outlineBtn, { height, borderRadius }, style]}
      >
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
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton;

const styles = StyleSheet.create({
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...typography.h4,
    color: colors.white,
  },
  outlineBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.secondary,
  },
  outlineText: {
    ...typography.h4,
    color: colors.white,
  },
});
