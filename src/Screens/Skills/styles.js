import { StyleSheet } from 'react-native';
import { spacing, typography, width } from '../../Theme/typography';
import colors from '../../Theme/colors';

export default StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background, padding: -50 },
  bg: { width: width, height: '100%' },
  container: { flex: 1, padding: spacing.md, paddingTop: spacing.xxl },
  heading: { ...typography.h3, color: colors.white, marginLeft: spacing.md },
  subHeading: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 26,
    textAlign: 'left',
  },
  sectionTitle: {
    ...typography.body,
    color: colors.white,
    lineHeight: 26,
    textAlign: 'left',
    marginVertical: spacing.md,
  },
});
