import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GradientBorderView from '../Components/GradientBorderView';
import CircularProgress from '../../../Components/CircularProgress';
import { Svgs } from '../../../Assets/SVG';
import { spacing, typography } from '../../../Theme/typography';
import colors from '../../../Theme/colors';

const SkillCard = ({ item }) => {
  const Icon = Svgs[item.icon];
  return (
    <GradientBorderView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.progress}>
          <CircularProgress animated />

          <View style={styles.iconContainer}>
            {Icon && <Icon width={35} height={35} />}
          </View>
        </View>

        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    </GradientBorderView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, margin: spacing.sm },
  container: {
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: spacing.sm,
    justifyContent: 'space-between',
  },
  progress: { justifyContent: 'center', alignItems: 'center' },
  iconContainer: { position: 'absolute' },
  title: {
    ...typography.bodySmall,
    color: colors.white,
    marginTop: spacing.md,
    textAlignVertical: 'center',
    textAlign: 'center',
    width: '100%',
    maxWidth: 90,
    lineHeight: 18,
    height: 36,
  },
});

export default SkillCard;
