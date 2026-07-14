import { StyleSheet } from 'react-native';
import { lineHeight, spacing, typography, width } from '../../Theme/typography';
import colors from '../../Theme/colors';

export default StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background, padding: -50 },
  bg: { width: '100%', height: '100%' },
  container: { flex: 1, padding: spacing.md, paddingTop: spacing.xxl },
  titleContainer: {
    marginHorizontal: spacing.md,
    marginTop: spacing.xxl,
    alignItems: 'flex-start',
  },
  title: {
    ...typography.h2,
    color: colors.white,
    marginLeft: spacing.md,
    lineHeight: lineHeight.h1,
  },
  titleGradient: {
    ...typography.cursiveTitle,
    color: colors.gradient,
    marginLeft: spacing.md,
    lineHeight: lineHeight.h1,
  },
  subTitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginLeft: spacing.md,
    marginBottom: spacing.md,
  },
  tabContainer: { marginBottom: spacing.md, marginHorizontal: spacing.md },
  listContainer: {},
  // card 
  card: {
    marginHorizontal: spacing.md,
    flexDirection: 'row',
    backgroundColor: colors.transparent,
    borderRadius: spacing.borderRadius.md,
    padding: spacing.sm,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  projectImage: {
    width: 110,
    height: 150,
    borderRadius: spacing.borderRadius.md,
  },
  cardContent: {
    flex: 1,
    marginLeft: spacing.md,
    justifyContent: 'space-between',
  },
  projectTitle: { ...typography.body, color: colors.white },
  projectDescription: { ...typography.caption, color: colors.textSecondary },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tagContainer: { flexDirection: 'row', flexWrap: 'wrap', flex: 1 },
  tag: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: spacing.borderRadius.lg,
    marginRight: spacing.sm,
    marginBottom: spacing.xs,
  },
  tagText: { ...typography.caption, color: colors.white },
  arrowButton: {
    width: 42,
    height: 42,
    borderRadius: spacing.borderRadius.xl,
    borderWidth: 1.5,
    borderColor: colors.NeonPink,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.sm,
  },
  // category tab styles
  itemContainer: {
    marginRight: spacing.md,
    width: width - spacing.xxxl * 9,
    marginTop: spacing.xxl,
    alignSelf: 'flex-start',
  },
  list: { paddingHorizontal: spacing.lg },
  activeText: { ...typography.body },
  inactiveText: { color: colors.textSecondary, ...typography.caption },
});
