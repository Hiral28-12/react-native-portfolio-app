import React, { useRef, useState } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import GradientButton from '../../Components/GradientButton';
import { styles } from './Style';
import { Svgs } from '../../Assets/SVG';
import { width } from '../../Theme/typography';
import SplashItem from './Components/SplashItem';
import PaginationDots from './Components/PaginationDots';
import { splashData } from './Data/splashData';
import screenNames from '../index';
import colors from '../../Theme/colors';

const SplashScreen = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < splashData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
      });
    } else {
      navigation.replace(screenNames.HOME);
    }
  };

  const handleSkip = () => {
    navigation.replace(screenNames.HOME);
  };

  const handleBack = () => {
    flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {currentIndex > 0 ? (
          <TouchableOpacity onPress={handleBack}>
            <Svgs.back width={24} height={24} fill={colors.secondary} />
          </TouchableOpacity>
        ) : (
          <View />
        )}
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={splashData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ width }}>
            <SplashItem item={item} />
          </View>
        )}
        onMomentumScrollEnd={event => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />

      <PaginationDots currentIndex={currentIndex} total={splashData.length} />

      <GradientButton
        title={currentIndex === splashData.length - 1 ? 'Get Started' : 'Next'}
        onPress={handleNext}
        style={styles.nextButton}
      />
    </View>
  );
};
export default SplashScreen;
