import React from 'react';
import {View, StyleSheet} from 'react-native';

const PaginationDots = ({currentIndex, total}) => {
  return (
    <View style={styles.container}>
      {[...Array(total)].map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentIndex === index && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );
};

export default PaginationDots;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 40,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: '#555',
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: '#9333EA',
    width: 22,
  },
});