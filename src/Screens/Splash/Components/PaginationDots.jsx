import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing } from '../../../Theme/typography';
import colors from '../../../Theme/colors';

const PaginationDots = ({ currentIndex, total }) => {
  return (
    <View style={styles.container}>
      {[...Array(total)].map((_, index) => (
        <View
          key={index}
          style={[styles.dot, currentIndex === index && styles.activeDot]}
        />
      ))}
    </View>
  );
};

export default PaginationDots;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.md,
    paddingBottom: spacing.xxxl + spacing.lg,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: colors.textTertiary,
    marginHorizontal: spacing.xs,
  },
  activeDot: { backgroundColor: colors.NeonPink, width: 22 },
});
