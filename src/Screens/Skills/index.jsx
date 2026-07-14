import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ScrollView,
  FlatList,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import SkillCard from './Components/SkillCard';
import OtherSkillCard from './Components/OtherSkillCard';
import SoftSkillCard from './Components/SoftSkillCard';
import {
  technicalSkills,
  otherSkills,
  softSkills,
} from '../../Constants/skillsData';
import styles from './styles';

const SkillsScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('../../Assets/Images/skill_bg.png')}
        style={styles.bg}
        resizeMode="contain"
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <Text style={styles.heading}>Skills</Text>
            <Text style={styles.subHeading}>
              Technologies and tools I use to bring ideas to life.
            </Text>
            {/* Technical Skills*/}
            <Text style={styles.sectionTitle}>Technical Skills</Text>
            <FlatList
              data={technicalSkills}
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
              numColumns={2}
              scrollEnabled={false}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <SoftSkillCard item={item} />}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SkillsScreen;
