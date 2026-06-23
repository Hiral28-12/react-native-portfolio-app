import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient colors={['#4F46E5', '#8B5CF6']} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default GradientButton;
