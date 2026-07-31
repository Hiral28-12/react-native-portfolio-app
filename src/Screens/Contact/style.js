import { StyleSheet } from 'react-native';
import { lineHeight, spacing, typography, width } from '../../Theme/typography';
import colors from '../../Theme/colors';

export default StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background, padding: -50 },
  bg: { width: width, height: '100%' },
  container: { flex: 1, paddingTop: spacing.xxl },
  titleContainer: {
    marginHorizontal: spacing.xl,
    marginTop: spacing.xxl,
    marginBottom: spacing.lg,
  },
  title: {
    ...typography.h2,
    color: colors.white,
    lineHeight: lineHeight.h1,
  },
  titleGradient: {
    ...typography.cursiveTitle,
    lineHeight: lineHeight.h1,
  },
  divider: {
    width: 40,
    height: 2,
    backgroundColor: colors.primary,
    borderRadius: 2,
    marginVertical: spacing.sm,
  },
  subTitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
    lineHeight: 22,
  },
  subTitleGradient: {
    ...typography.body,
    marginBottom: spacing.xs,
  },
  sectionContainer: {
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.white,
    marginBottom: spacing.xs,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  input: {
    backgroundColor: '#0D1226',
    borderWidth: 1,
    borderColor: '#232F56',
    borderRadius: 12,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    color: colors.white,
    ...typography.bodySmall,
    marginBottom: spacing.md,
  },
  halfInput: {
    flex: 1,
    marginBottom: 0,
  },
  messageInput: {
    height: 110,
    paddingTop: spacing.md,
  },
  sendBtn: {
    marginTop: spacing.xs,
    borderRadius: 14,
  },
});
