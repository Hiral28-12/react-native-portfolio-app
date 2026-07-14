import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Style';
import { Svgs } from '../../../Assets/SVG';
import colors from '../../../Theme/colors';

const ProjectCard = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() => onPress?.(item)}
    >
      {/* Project Image */}
      <Image
        source={item.image}
        style={styles.projectImage}
        resizeMode="cover"
      />

      {/* Right Side */}
      <View style={styles.cardContent}>
        {/* Title */}
        <Text numberOfLines={1} style={styles.projectTitle}>
          {item.title}
        </Text>

        {/* Description */}
        <Text numberOfLines={3} style={styles.projectDescription}>
          {item.description}
        </Text>

        {/* Bottom */}
        <View style={styles.bottomRow}>
          {/* Technology Tags */}
          <View style={styles.tagContainer}>
            {item.technologies.map((technology, index) => (
              <LinearGradient
                key={index}
                colors={['#A855F7', '#6D28D9']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.tag}
              >
                <Text style={styles.tagText}>{technology}</Text>
              </LinearGradient>
            ))}
          </View>

          {/* Arrow */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.arrowButton}
            onPress={() => onPress?.(item)}
          >
            <Svgs.right width={30} height={30} stroke={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProjectCard;
