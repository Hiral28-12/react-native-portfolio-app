import { StyleSheet } from 'react-native';
import colors from '../../Theme/colors';
import { typography, spacing } from '../../Theme/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: spacing.xl,
    zIndex: 1,
  },

  skipText: {
    ...typography.bodySmall,
    color: colors.secondary,
  },

  nextButton: {
    marginHorizontal: spacing.xl,
    marginBottom: spacing.xxl + spacing.lg,
  },
});
