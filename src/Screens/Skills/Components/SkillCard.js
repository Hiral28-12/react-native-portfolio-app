import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GradientBorderView from '../Components/GradientBorderView';
import CircularProgress from './CircularProgress';
import { Svgs } from '../../../Assets/SVG';
import { spacing, typography } from '../../../Theme/typography';
import colors from '../../../Theme/colors';

const SkillCard = ({ item }) => {
  const Icon = Svgs[item.icon];
  return (
    <GradientBorderView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.percent}>{item.percent}%</Text>

        <View style={styles.progress}>
          <CircularProgress progress={item.percent} />

          <View style={styles.iconContainer}>
            {Icon && <Icon width={35} height={35} />}
          </View>
        </View>

        <Text style={styles.title}>{item.title}</Text>
      </View>
    </GradientBorderView>
  );
};

const styles = StyleSheet.create({
  wrapper: { flex: 1, margin: spacing.sm },
  container: {
    alignItems: 'center',
    paddingVertical: 18,
    minHeight: 150,
    justifyContent: 'space-between',
  },
  percent: {
    ...typography.bodySmall,
    color: '#FFFFFF',
    paddingBottom: spacing.sm,
  },
  progress: { justifyContent: 'center', alignItems: 'center' },
  iconContainer: { position: 'absolute' },
  title: {
    ...typography.bodySmall,
    color: colors.white,
    marginTop: spacing.md,
  },
});

export default SkillCard;
