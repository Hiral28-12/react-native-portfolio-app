import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import { styles } from './Style';
import { Svgs } from '../../Assets/SVG';

const BackIcon = Svgs.back;
import SplashItem from './Components/SplashItem';
import PaginationDots from './Components/PaginationDots';
import { splashData } from './Data/splashData';

const { width } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < splashData.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
      });
    } else {
      navigation.replace('Home');
    }
  };

  const handleSkip = () => {
    navigation.replace('Home');
  };

  const handleBack = () => {
    flatListRef.current?.scrollToIndex({ index: currentIndex - 1 });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        {currentIndex > 0 ? (
          <TouchableOpacity onPress={handleBack}>
            <BackIcon width={24} height={24} fill="#9333EA" />
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

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextText}>
          {currentIndex === splashData.length - 1 ? 'Get Started' : 'Next'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default SplashScreen;
