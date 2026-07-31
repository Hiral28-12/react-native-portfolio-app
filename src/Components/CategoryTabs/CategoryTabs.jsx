import React, { useEffect, useRef, useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { spacing, typography, width } from '../../Theme/typography';
import colors from '../../Theme/colors';
import GradientButton from '../GradientButton';

const CategoryTabs = ({
  data,
  selected,
  onPress,
  contentContainerStyle,
  itemContainerStyle,
  activeTextStyle,
  inactiveTextStyle,
}) => {
  const flatListRef = useRef(null);
  const selectedIndex = data.findIndex(item => item === selected);

  const scrollToSelected = useCallback(() => {
    if (selectedIndex < 0 || !flatListRef.current) return;
    flatListRef.current.scrollToIndex({
      index: selectedIndex,
      animated: true,
      viewPosition: 0.5,
    });
  }, [selectedIndex]);

  useEffect(() => {
    const timer = setTimeout(scrollToSelected, 100);
    return () => clearTimeout(timer);
  }, [scrollToSelected]);

  const renderItem = ({ item }) => {
    const isActive = selected === item;

    return (
      <GradientButton
        title={item}
        onPress={() => onPress(item)}
        outline={!isActive}
        height={42}
        borderRadius={spacing.borderRadius.xl}
        style={[styles.itemContainer, itemContainerStyle]}
        textStyle={
          isActive
            ? [styles.activeText, activeTextStyle]
            : [styles.inactiveText, inactiveTextStyle]
        }
      />
    );
  };

  return (
    <FlatList
      ref={flatListRef}
      horizontal
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.list, contentContainerStyle]}
      onScrollToIndexFailed={() => {
        setTimeout(scrollToSelected, 200);
      }}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginRight: spacing.md,
    width: width - spacing.xxxl * 8,
    marginTop: spacing.xxl,
    alignSelf: 'flex-start',
  },
  list: { paddingHorizontal: spacing.lg },
  activeText: { ...typography.bodySmall },
  inactiveText: { color: colors.textSecondary, ...typography.caption },
});

export default CategoryTabs;
