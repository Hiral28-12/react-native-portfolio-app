import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GradientBorderView from '../Components/GradientBorderView';
import { Svgs } from '../../../Assets/SVG';
import { spacing, typography } from '../../../Theme/typography';
import colors from '../../../Theme/colors';

const OtherSkillCard = ({ item }) => {
  const Icon = Svgs[item.icon];
  return (
    <GradientBorderView style={styles.wrapper} borderRadius={14}>
      <View style={styles.container}>
        {Icon && <Icon width={30} height={30} />}
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
