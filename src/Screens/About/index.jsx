import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../Theme/colors';
import { typography, spacing } from '../../Theme/typography';
import { journey, stats } from '../../Constants/aboutData';
import Header from '../../Components/Header';

const AboutScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../../Assets/Images/About_background.png')}
          style={styles.bg}
          resizeMode="cover"
        >
          <Header
            navigation={navigation}
            title="About Me"
            showNotification={true}
          />
          <View style={styles.content}>
            <Text style={styles.cardBody}>
              I'm a Front-End & Back-End Developer passionate about building
              performant and beautiful web applications.
            </Text>

            {/* Stats */}
            <View style={styles.statsRow}>
              {stats.map((s, i) => (
                <View key={i} style={styles.statItem}>
                  <Text style={styles.statValue}>{s.value}</Text>
                  <Text style={styles.statLabel}>{s.label}</Text>
                </View>
              ))}
            </View>
            {/* My Journey */}
            <Text style={styles.sectionTitle}>My Journey</Text>
            <View style={styles.timeline}>
              {journey.map((item, index) => (
                <View key={index} style={styles.timelineItem}>
                  {/* Line + dot */}
                  <View style={styles.timelineLeft}>
                    <View style={styles.dot} />
                    {index < journey.length - 1 && <View style={styles.line} />}
                  </View>
                  {/* Content */}
                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineYear}>{item.year}</Text>
                    <Text style={styles.timelineDesc}>{item.desc}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  bg: { width: '100%', height: '100%' },
  content: { paddingHorizontal: spacing.xl },
  cardBody: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 26,
    textAlign: 'left',
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    borderRadius: spacing.borderRadius.xl,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
  },
  statItem: { flex: 1, alignItems: 'center' },
  statValue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: colors.secondary,
  },
  statLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 2,
  },

  sectionTitle: {
    ...typography.h3,
    color: colors.white,
    marginTop: spacing.xl,
    marginBottom: spacing.lg,
  },

  timeline: { paddingLeft: spacing.sm },
  timelineItem: { flexDirection: 'row', marginBottom: spacing.lg },

  timelineLeft: { alignItems: 'center', marginRight: spacing.lg, width: 16 },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  line: { flex: 1, width: 2, backgroundColor: colors.border, marginTop: 4 },

  timelineContent: {
    flex: 1,
    backgroundColor: colors.surface,
    borderRadius: spacing.borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xs,
  },
  timelineYear: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: colors.secondary,
    marginBottom: 4,
  },
  timelineDesc: { ...typography.bodySmall, color: colors.textSecondary },
});
