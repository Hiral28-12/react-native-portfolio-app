import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './Style';
import ProjectCard from '../../Components/ProjectCard';
import projectsData from '../../Constants/projectsData';
import { Svgs } from '../../Assets/SVG';
import colors from '../../Theme/colors';

const Project = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Svgs.menu width={24} height={24} fill={colors.white} />
        </TouchableOpacity>
        <Text style={styles.heading}>My Projects</Text>
        <TouchableOpacity>
          <Svgs.notification width={24} height={24} fill={colors.white} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={projectsData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProjectCard item={item} />
        )}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />

    </SafeAreaView>
  );
};

export default Project;