import React from 'react';
import { Text, View } from 'react-native';
import { typography, spacing, colors } from '../../Theme';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text>Hiral Prajapati</Text>
      <Text style={[typography.h1, { color: colors.text }]}>Welcome</Text>
      <View style={{ padding: spacing.screenPadding }} />
    </SafeAreaView>
  );
};

export default HomeScreen;
