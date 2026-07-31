import React, { useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  FlatList,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import Header from '../../Components/Header';
import SkillCard from './Components/SkillCard';
import OtherSkillCard from './Components/OtherSkillCard';
import SoftSkillCard from './Components/SoftSkillCard';
import {
  technicalSkills,
  otherSkills,
  softSkills,
  skillTabs,
} from '../../Constants/skillsData';
import styles from './styles';
import { GradientText } from '../../Utils/hooks';
import CategoryTabs from '../../Components/CategoryTabs/CategoryTabs';

const SkillsScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredTechnicalSkills = useMemo(() => {
    if (selectedCategory === 'All') {
      return technicalSkills;
    }
    return technicalSkills.filter(skill =>
      skill.categories?.includes(selectedCategory),
    );
  }, [selectedCategory]);

  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('../../Assets/Images/skill_bg.png')}
        style={styles.bg}
        resizeMode="contain"
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            {/* Header */}
            <Header
              navigation={navigation}
              title="Skills"
              titleSuffix=" Me"
              showNotification={true}
            />
            {/* Title */}
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Skills</Text>
              <GradientText
                style={styles.titleGradient}
                text="What I Work With"
              />
              <Text style={styles.subTitle}>
                Crafting reliable and user-focused applications with modern
                development tools.
              </Text>
            </View>
            {/* section Container */}
            <View style={styles.sectionContainer}>
              {/* Technical Skills*/}
              <Text style={styles.sectionTitle}>Technical Skills</Text>
              <View style={styles.tabContainer}>
                <CategoryTabs
                  data={skillTabs}
                  selected={selectedCategory}
                  onPress={setSelectedCategory}
                />
              </View>
              <FlatList
                data={filteredTechnicalSkills}
                numColumns={3}
                scrollEnabled={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <SkillCard item={item} />}
              />
              {/* Other Skills */}
              <Text style={styles.sectionTitle}>Other Skills</Text>
              <FlatList
                data={otherSkills}
                scrollEnabled={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <OtherSkillCard item={item} />}
              />
              {/* Soft Skills */}
              <Text style={styles.sectionTitle}>Soft Skills</Text>
              <FlatList
                data={softSkills}
                numColumns={3}
                scrollEnabled={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <SoftSkillCard item={item} />}
              />
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SkillsScreen;
