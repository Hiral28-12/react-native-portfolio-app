import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const SkillCard = ({title}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 20,
    marginBottom: 15,
  },

  title: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default SkillCard;