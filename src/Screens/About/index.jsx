import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../Theme/colors';
import { typography, spacing, width } from '../../Theme/typography';
import FloatingOrb from '../../Components/FloatingOrb';

const journey = [
  { year: '2022', desc: 'Started my journey as Front-End Developer' },
  { year: '2023', desc: 'Worked on amazing projects & clients' },
  { year: '2024', desc: 'Exploring new technologies and building products' },
];

const AboutScreen = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <FloatingOrb size={250} color={colors.primary} style={{ top: -60, left: -60 }} />
        <FloatingOrb size={180} color={colors.accent} style={{ top: 400, right: -50 }} />

        {/* Header */}
        <View style={styles.topBar}>
          <Text style={styles.topBarTitle}>About Me</Text>
          <TouchableOpacity style={styles.bellWrap}>
            <Text style={styles.bellIcon}>🔔</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          {/* Description card */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>About Me</Text>
            <Text style={styles.cardBody}>
              I'm a Front-End & Back-End Developer passionate about building performant and beautiful web applications.
            </Text>
          </View>

          {/* Stats */}
          <View style={styles.statsRow}>
            {[
              { value: '2+', label: 'Years\nExperience' },
              { value: '20+', label: 'Projects\nCompleted' },
              { value: '10+', label: 'Happy\nClients' },
            ].map((s, i) => (
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  scroll: { paddingBottom: 40 },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  topBarTitle: { ...typography.h3, color: colors.white },
  bellWrap: {
    width: 40, height: 40, borderRadius: 20,
    backgroundColor: colors.surface,
    justifyContent: 'center', alignItems: 'center',
  },
  bellIcon: { fontSize: 18 },

  content: { paddingHorizontal: spacing.xl },

  card: {
    backgroundColor: colors.surface,
    borderRadius: spacing.borderRadius.xl,
    padding: spacing.cardPadding,
    marginTop: spacing.lg,
  },
  cardTitle: { ...typography.h3, color: colors.white, marginBottom: spacing.sm },
  cardBody: { ...typography.body, color: colors.textSecondary, lineHeight: 26 },

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
  statValue: { fontFamily: 'Poppins-Bold', fontSize: 22, color: colors.secondary },
  statLabel: { ...typography.caption, color: colors.textSecondary, textAlign: 'center', marginTop: 2 },

  sectionTitle: { ...typography.h3, color: colors.white, marginTop: spacing.xl, marginBottom: spacing.lg },

  timeline: { paddingLeft: spacing.sm },
  timelineItem: { flexDirection: 'row', marginBottom: spacing.lg },

  timelineLeft: { alignItems: 'center', marginRight: spacing.lg, width: 16 },
  dot: {
    width: 14, height: 14, borderRadius: 7,
    backgroundColor: colors.secondary,
    borderWidth: 2, borderColor: colors.primary,
  },
  line: { flex: 1, width: 2, backgroundColor: colors.border, marginTop: 4 },

  timelineContent: {
    flex: 1, backgroundColor: colors.surface,
    borderRadius: spacing.borderRadius.lg,
    padding: spacing.lg, marginBottom: spacing.xs,
  },
  timelineYear: { fontFamily: 'Poppins-SemiBold', fontSize: 14, color: colors.secondary, marginBottom: 4 },
  timelineDesc: { ...typography.bodySmall, color: colors.textSecondary },
});
