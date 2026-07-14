import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import colors from '../../../Theme/colors';
import { typography, spacing, width } from '../../../Theme/typography';
import { GradientText } from '../../../Utils/hooks';
import PaginationDots from './PaginationDots';

const SplashItem = ({ item, currentIndex, total, onSkip }) => {
  const isLastSlide = !!item.titleCursive;

  return (
    <ImageBackground
      source={item.image}
      style={styles.container}
      resizeMode="contain"
    >
      {/* Skip */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={onSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {isLastSlide ? (
          <Text style={styles.titleSecondary}>{item.title}</Text>
        ) : item.title ? (
          <Text style={styles.title}>{item.title}</Text>
        ) : null}
        {item.gradient ? (
          <GradientText text={item.gradient} style={styles.gradientText} />
        ) : null}
        {item.subtitle ? (
          <Text style={styles.subtitle}>{item.subtitle}</Text>
        ) : null}
        {item.titleCursive ? (
          <GradientText text={item.titleCursive} style={styles.titleCursive} />
        ) : null}
      </View>

      {/* Bottom */}
      <PaginationDots currentIndex={currentIndex} total={total} />
    </ImageBackground>
  );
};

export default SplashItem;

const styles = StyleSheet.create({
  container: { width, flex: 1 },
  topRow: {
    alignItems: 'flex-end',
    paddingTop: 60,
    paddingHorizontal: spacing.xl,
  },
  skipText: { ...typography.bodySmall, color: colors.secondary },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: spacing.xxl,
  },
  titleSecondary: {
    ...typography.h2,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  title: {
    ...typography.h2,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  gradientText: { ...typography.h2, textAlign: 'center' },
  subtitle: {
    ...typography.body,
    color: colors.white,
    textAlign: 'center',
  },
  titleCursive: {
    ...typography.cursiveTitle,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
});
