import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProjectCard = ({item}) => {
  return (
    <View style={styles.card}>

      <View
        style={[
          styles.iconContainer,
          {backgroundColor: item.color},
        ]}>
        <Text style={styles.iconText}>
          {item.title.charAt(0)}
        </Text>
      </View>

      <Text style={styles.title}>
        {item.title}
      </Text>

      <Text style={styles.description}>
        {item.description}
      </Text>

      <View style={styles.tagContainer}>
        {item.technologies.map((tech, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tech}</Text>
          </View>
        ))}
      </View>

    </View>
  );
};

export default ProjectCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#12192E',
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#2C3553',
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  iconText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },

  description: {
    color: '#B5BDD5',
    fontSize: 15,
    lineHeight: 23,
    marginBottom: 18,
  },

  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  tag: {
    backgroundColor: '#1F2942',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 25,
    marginRight: 8,
    marginBottom: 8,
  },

  tagText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});