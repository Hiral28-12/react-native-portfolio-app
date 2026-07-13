import React, { useRef, useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './Style';
import { width } from '../../Theme/typography';
import SplashItem from './Components/SplashItem';
import { splashData } from '../../Constants/splashData';
import screenNames from '../../Constants/screenNames';

const SplashScreen = ({ navigation }) => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSkip = () => navigation.replace(screenNames.HOME);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < splashData.length - 1) {
        flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      } else {
        clearInterval(timer);
        navigation.replace(screenNames.HOME);
      }
    }, 2500);
    return () => clearInterval(timer);
  }, [currentIndex, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={splashData}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SplashItem
            item={item}
            currentIndex={currentIndex}
            total={splashData.length}
            onSkip={handleSkip}
          />
        )}
        onMomentumScrollEnd={event => {
          const index = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
      />
    </View>
  );
};
export default SplashScreen;
