import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import colors from '../../../Theme/colors';
import { typography, spacing } from '../../../Theme/typography';

const { width } = Dimensions.get('window');

const SplashItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
    </View>
  );
};

export default SplashItem;

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xxl,
  },

  lottie: {
    width: 280,
    height: 280,
  },

  image: {
    width: 450,
    height: 450,
    resizeMode: 'contain',
  },

  title: {
    ...typography.h2,
    color: colors.textPrimary,
    textAlign: 'center',
    marginTop: spacing.xl,
  },

  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
});
