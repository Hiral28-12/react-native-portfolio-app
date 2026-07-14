import React from 'react';
import { FlatList } from 'react-native';
import { spacing } from '../../../Theme/typography';
import styles from '../Style';
import GradientButton from '../../../Components/GradientButton';

const CategoryTabs = ({ data, selected, onPress }) => {
  const renderItem = ({ item }) => {
    const isActive = selected === item;

    return (
      <GradientButton
        title={item}
        onPress={() => onPress(item)}
        outline={!isActive}
        height={42}
        borderRadius={spacing.borderRadius.xl}
        style={styles.itemContainer}
        textStyle={isActive ? styles.activeText : styles.inactiveText}
      />
    );
  };

  return (
    <FlatList
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
};

export default CategoryTabs;
