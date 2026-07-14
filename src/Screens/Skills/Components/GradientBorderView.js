import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, StyleSheet } from 'react-native';

const GradientBorderView = ({
  children,
  borderRadius = 18,
  borderWidth = 1.2,
  colors = ['#A855F7', '#00E5FF'],
  style,
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        {
          borderRadius,
          padding: borderWidth,
        },
        style,
      ]}
    >
      <View
        style={[
          styles.inner,
          {
            borderRadius: borderRadius - borderWidth,
          },
        ]}
      >
        {children}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  inner: {
    backgroundColor: '#090B18',
    overflow: 'hidden',
  },
});

export default GradientBorderView;
