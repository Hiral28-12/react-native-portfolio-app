import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../Theme/colors';
import MaskedView from '@react-native-masked-view/masked-view';

export const GradientText = ({ text, style }) => (
  <MaskedView maskElement={<Text style={style}>{text}</Text>}>
    <LinearGradient
      colors={colors.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      {/* Invisible text only to define the size */}
      <Text style={[style, { opacity: 0 }]}>{text}</Text>
    </LinearGradient>
  </MaskedView>
);
