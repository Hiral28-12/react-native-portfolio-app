import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from './CircularProgress';
import { Svgs } from '../../../Assets/SVG';
import { spacing, typography } from '../../../Theme/typography';
import colors from '../../../Theme/colors';

const SoftSkillCard = ({ item }) => {
  const Icon = Svgs[item.icon];
  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <CircularProgress progress={item.percent} size={72} />

        <View style={styles.iconContainer}>
          {Icon && <Icon width={24} height={24} />}
        </View>
      </View>

      <Text style={styles.percent}>{item.percent}%</Text>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', marginVertical: 15 },
  progress: { justifyContent: 'center', alignItems: 'center' },
  iconContainer: { position: 'absolute' },
  percent: {
    ...typography.bodySmall,
    color: colors.white,
    paddingBottom: spacing.sm,
    marginTop: spacing.md,
  },
  title: {
    ...typography.bodySmall,
    color: colors.white,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
});

export default SoftSkillCard;
