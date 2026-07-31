import { StyleSheet } from 'react-native';
import { lineHeight, spacing, typography, width } from '../../Theme/typography';
import colors from '../../Theme/colors';

export default StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background, padding: -50 },
  bg: { width: width, height: '100%' },
  container: { flex: 1, paddingTop: spacing.xxl },
  titleContainer: {
    marginHorizontal: spacing.md,
    marginTop: spacing.xxl,
    alignItems: 'stretch',
  },
  title: {
    ...typography.h2,
    color: colors.white,
    marginLeft: spacing.md,
    lineHeight: lineHeight.h1,
  },
  titleGradient: {
    ...typography.cursiveTitle,
    marginLeft: spacing.md,
    lineHeight: lineHeight.h1,
  },
  subTitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginLeft: spacing.md,
    marginBottom: spacing.xs,
  },
  subTitleGradient: {
    ...typography.bodySmall,
    marginLeft: spacing.md,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    ...typography.h4,
    color: colors.white,
    lineHeight: 26,
    textAlign: 'left',
    margin: spacing.md,
  },
  tabContainer: { marginBottom: spacing.xl, marginTop: -spacing.lg },
  sectionContainer: { padding: spacing.md },
});
