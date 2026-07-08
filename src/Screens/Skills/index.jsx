import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SkillCircle from '../../Components/SkillCircle';
import skillsData from '../../Constants/skillsData';
import colors from '../../Theme/colors';
import { typography, spacing } from '../../Theme/typography';
import { Svgs } from '../../Assets/SVG';

const Skills = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Svgs.menu width={24} height={24} fill={colors.white} />
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>My Skills</Text>
        <TouchableOpacity>
          <Svgs.notification width={24} height={24} fill={colors.white} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={skillsData}
        numColumns={2}
        keyExtractor={item => item.id}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SkillCircle title={item.title} percentage={item.percentage} />
        )}
      />
    </SafeAreaView>
  );
};

export default Skills;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  topBarTitle: { ...typography.h3, color: colors.white },
  list: { paddingHorizontal: spacing.xl, paddingBottom: 30 },
  row: { justifyContent: 'space-between' },
});
