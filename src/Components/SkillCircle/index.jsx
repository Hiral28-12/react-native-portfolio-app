import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const SkillCircle = ({percentage, title}) => {
  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        size={90}
        width={7}
        fill={percentage}
        tintColor="#8B5CF6"
        tintColorSecondary="#3B82F6"
        backgroundColor="#1F2937"
        rotation={0}
        lineCap="round">
        {() => (
          <Text style={styles.percent}>
            {percentage}
            <Text style={styles.sign}>%</Text>
          </Text>
        )}
      </AnimatedCircularProgress>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default SkillCircle;

const styles = StyleSheet.create({
  container: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 30,
  },

  percent: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },

  sign: {
    fontSize: 15,
  },

  title: {
    marginTop: 12,
    color: '#E5E7EB',
    fontSize: 15,
    fontWeight: '600',
  },
});