import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../../../Theme/colors';
import { typography, spacing, width } from '../../../Theme/typography';

const SplashItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      {item.titleCursive ? (
        <Text style={styles.title}>
          <Text style={styles.titleWhite}>{item.title} </Text>
          <Text style={styles.titleCursive}>{item.titleCursive}</Text>
        </Text>
      ) : (
        <Text style={styles.title}>{item.title}</Text>
      )}
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

  image: {
    width: 450,
    height: 450,
    resizeMode: 'contain',
  },

  title: {
    ...typography.h2,
    color: colors.white,
    textAlign: 'center',
    marginTop: spacing.xl,
  },

  titleWhite: {
    ...typography.h2,
    color: colors.white,
  },

  titleCursive: {
    ...typography.cursiveTitle,
    color: colors.secondary,
  },

  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.sm,
  },
});
