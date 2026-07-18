import React from 'react';
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
} from '../../Constants/skillsData';
import styles from './styles';
import { GradientText } from '../../Utils/hooks';

const SkillsScreen = ({ navigation }) => {
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
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SkillsScreen;
