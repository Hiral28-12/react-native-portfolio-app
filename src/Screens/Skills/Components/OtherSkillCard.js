import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GradientBorderView from '../Components/GradientBorderView';
import { spacing, typography } from '../../../Theme/typography';
import colors from '../../../Theme/colors';

const OtherSkillCard = ({ item }) => {
  return (
    <GradientBorderView style={styles.wrapper} borderRadius={14}>
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </GradientBorderView>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: spacing.xxl },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
  title: {
    ...typography.bodySmall,
    color: colors.white,
    marginLeft: spacing.lg,
  },
});

export default OtherSkillCard;
