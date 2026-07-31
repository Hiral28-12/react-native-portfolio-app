import React, { useMemo, useState } from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './Style';
import CategoryTabs from '../../Components/CategoryTabs/CategoryTabs';
import ProjectCard from './Components/ProjectCard';
import EmptyProjects from './Components/EmptyProjects';
import projects, { categories } from '../../Constants/projectsData';
import { GradientText } from '../../Utils/hooks';
import Header from '../../Components/Header';

const Project = ({ navigation }) => {
  // Active Category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter Projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') {
      return projects;
    }

    return projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  // Project Card
  const renderProject = ({ item }) => {
    return (
      <ProjectCard
        item={item}
        onPress={() =>
          navigation.navigate('ProjectDetails', {
            project: item,
          })
        }
      />
    );
  };

  // Empty List
  const renderEmpty = () => {
    return <EmptyProjects />;
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ImageBackground
        source={require('../../Assets/Images/skill_bg.png')}
        style={styles.bg}
        resizeMode="contain"
      >
        {/* Header */}
        <Header navigation={navigation} title="Projects" titleSuffix=" Me"/>

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Things I've </Text>
          <GradientText style={styles.titleGradient} text="Built" />

          <Text style={styles.subTitle}>
            Explore some of my recent mobile and web development projects built
            with modern technologies.
          </Text>
        </View>

        {/* Category Tabs */}
        <View style={styles.tabContainer}>
          <CategoryTabs
            data={categories}
            selected={selectedCategory}
            onPress={setSelectedCategory}
          />
        </View>

        {/* Project List */}
        <FlatList
          data={filteredProjects}
          renderItem={renderProject}
          keyExtractor={item => String(item.id)}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={renderEmpty}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Project;
