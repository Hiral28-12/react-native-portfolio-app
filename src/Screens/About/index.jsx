import React, { useRef, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../Theme/colors';
import { typography, spacing } from '../../Theme/typography';
import {
  journey,
  stats,
  experience,
  certificates,
  socialLinks,
} from '../../Constants/aboutData';
import Header from '../../Components/Header';
import { Svgs } from '../../Assets/SVG';
import CircularProgress from '../../Components/CircularProgress';

const AboutScreen = ({ navigation, route }) => {
  const scrollRef = useRef(null);
  const journeyRef = useRef(null);

  useEffect(() => {
    if (route?.params?.scrollToJourney) {
      setTimeout(() => {
        journeyRef.current?.measureLayout(
          scrollRef.current,
          (_x, y) => scrollRef.current?.scrollTo({ y, animated: true }),
          () => {},
        );
      }, 400);
    }
  }, [route?.params?.scrollToJourney]);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../../Assets/Images/About_background.png')}
          style={styles.bg}
          resizeMode="cover"
        >
          <Header
            navigation={navigation}
            title="About"
            showNotification
            titleSuffix=" Me"
          />

          {/* Hero Section */}
          <View style={styles.heroRow}>
            <Text style={styles.whoLabel}>WHO AM I?</Text>
            <View style={styles.whoDivider} />
            <Text style={styles.heroTitle}>
              React Native & {'\n'}Front-End Web{'\n'} Developer
            </Text>
            <View style={styles.socialRow}>
              {socialLinks.map(s => {
                const Icon = Svgs[s.icon];
                return (
                  <TouchableOpacity
                    key={s.key}
                    onPress={() => Linking.openURL(s.url)}
                    style={styles.socialBtn}
                  >
                    <CircularProgress size={46} strokeWidth={2} animated />
                    <View style={styles.socialInner}>
                      <Icon width={24} height={24} />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Professional Summary Card */}
          <View style={styles.card}>
            <View style={styles.summaryIconWrap}>
              <CircularProgress size={56} strokeWidth={2} animated />
              <View style={styles.summaryIconInner}>
                <Svgs.group width={24} height={24} fill={colors.secondary} />
              </View>
            </View>
            <View style={styles.summaryText}>
              <Text style={styles.cardTitle}>Professional Summary</Text>
              <Text style={styles.cardBody}>
                Passionate developer with expertise in building responsive and
                user-friendly mobile and web applications. I love turning ideas
                into real products that solve meaningful problems.
              </Text>
            </View>
          </View>

          {/* Stats */}
          <View style={[styles.card, styles.statsCard]}>
            {stats.map((s, i) => {
              const Icon = Svgs[s.icon];
              return (
                <View key={i} style={styles.statItem}>
                  <View style={styles.statIconWrap}>
                    <CircularProgress size={60} strokeWidth={2} />
                    <View style={styles.statIconInner}>
                      {Icon && (
                        <Icon width={30} height={30} stroke={colors.accent} />
                      )}
                    </View>
                  </View>
                  <Text style={styles.statValue}>{s.value}</Text>
                  <Text style={styles.statLabel}>{s.label}</Text>
                </View>
              );
            })}
          </View>

          {/* My Journey */}
          <View ref={journeyRef} style={styles.card}>
            <Text style={styles.sectionTitle}>My Journey</Text>
            <View style={styles.sectionDivider} />
            {journey.map((item, index) => (
              <View key={index} style={styles.timelineItem}>
                <View style={styles.timelineLeft}>
                  <View style={styles.dot} />
                  {index < journey.length - 1 && <View style={styles.line} />}
                </View>
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineYear}>{item.year}</Text>
                  <Text style={styles.cardBody}>{item.desc}</Text>
                </View>
              </View>
            ))}
          </View>

          {/* Experience */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <View style={styles.sectionDivider} />
            {experience.map((item, index) => {
              const ExpIcon = Svgs[item.icon];
              return (
                <View key={index} style={styles.expItem}>
                  <View style={styles.expHeader}>
                    <View style={styles.expIconWrap}>
                      <CircularProgress size={44} strokeWidth={2} />
                      <View style={styles.expIconInner}>
                        {ExpIcon && (
                          <ExpIcon
                            width={18}
                            height={18}
                            stroke={colors.secondary}
                          />
                        )}
                      </View>
                    </View>
                    <View style={styles.expMeta}>
                      <Text style={styles.expRole}>{item.role}</Text>
                      <Text style={styles.expCompany}>{item.company}</Text>
                      <Text style={styles.expDuration}>{item.duration}</Text>
                    </View>
                  </View>
                  <Text style={[styles.cardBody, { marginTop: spacing.xs }]}>
                    {item.desc}
                  </Text>
                  {index < experience.length - 1 && (
                    <View style={styles.expDivider} />
                  )}
                </View>
              );
            })}
          </View>

          {/* Certificates */}
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>Certificates</Text>
            <View style={styles.sectionDivider} />
            {certificates.map((item, index) => {
              const Icon = Svgs[item.icon];
              return (
                <View key={index} style={styles.certItem}>
                  <View style={styles.certIconWrap}>
                    <CircularProgress size={48} strokeWidth={2} />
                    <View style={styles.certIconInner}>
                      {Icon && (
                        <Icon width={20} height={20} stroke={colors.accent} />
                      )}
                    </View>
                  </View>
                  <View style={styles.certMeta}>
                    <Text style={styles.certTitle}>{item.title}</Text>
                    <Text style={styles.certIssuer}>{item.issuer}</Text>
                    <Text style={styles.certYear}>{item.year}</Text>
                  </View>
                </View>
              );
            })}
          </View>

          <View style={{ height: spacing.xxl }} />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  bg: { width: '100%', height: '100%' },
  heroRow: { paddingHorizontal: spacing.xl, paddingTop: spacing.lg },
  heroLeft: {
    flex: 1,
    paddingBottom: spacing.xl,
    justifyContent: 'flex-end',
    gap: spacing.md,
  },
  whoLabel: {
    ...typography.h4,
    color: colors.secondary,
    letterSpacing: 1.5,
  },
  whoDivider: {
    width: 36,
    height: 2,
    backgroundColor: colors.secondary,
    borderRadius: 2,
  },
  heroTitle: {
    ...typography.h3,
    color: colors.white,
    lineHeight: 26,
    marginVertical: spacing.md,
  },
  socialRow: { flexDirection: 'row', gap: spacing.md },
  socialBtn: {
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialInner: {
    position: 'absolute',
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: 'rgba(10,8,30,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.borderRadius.xl,
    marginHorizontal: spacing.xl,
    marginTop: spacing.xl,
    padding: spacing.lg,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: colors.background,
  },
  summaryIconWrap: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  summaryIconInner: {
    position: 'absolute',
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(10,8,30,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryText: { flex: 1 },
  cardTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    color: colors.white,
    marginBottom: spacing.xs,
  },
  cardBody: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 22,
  },

  // Stats
  statsCard: {
    justifyContent: 'space-around',
    paddingVertical: spacing.lg,
  },
  statItem: { alignItems: 'center', flex: 1 },
  statIconWrap: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  statIconInner: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(10,8,30,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statValue: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: colors.white,
  },
  statLabel: {
    ...typography.caption,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 2,
  },

  // Journey / section shared
  sectionTitle: {
    ...typography.h3,
    color: colors.white,
    marginBottom: spacing.xs,
    width: '100%',
  },
  sectionDivider: {
    width: 36,
    height: 2,
    backgroundColor: colors.secondary,
    borderRadius: 2,
    marginBottom: spacing.lg,
  },
  timelineItem: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: spacing.lg,
  },
  timelineLeft: { alignItems: 'center', marginRight: spacing.lg, width: 14 },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.secondary,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  line: { flex: 1, width: 2, backgroundColor: colors.border, marginTop: 4 },
  timelineContent: { flex: 1 },
  timelineYear: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: colors.secondary,
    marginBottom: 2,
  },

  // Experience
  expItem: { width: '100%' },
  expHeader: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  expIconWrap: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expIconInner: {
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(10,8,30,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expMeta: { flex: 1 },
  expRole: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: colors.white,
  },
  expCompany: {
    ...typography.bodySmall,
    color: colors.secondary,
  },
  expDuration: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  expDivider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: spacing.md,
  },

  // Certificates
  certItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: spacing.md,
    gap: spacing.md,
  },
  certIconWrap: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  certIconInner: {
    position: 'absolute',
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(10,8,30,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  certMeta: { flex: 1 },
  certTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    color: colors.white,
  },
  certIssuer: {
    ...typography.bodySmall,
    color: colors.secondary,
  },
  certYear: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
