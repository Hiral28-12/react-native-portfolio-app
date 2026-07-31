const { StyleSheet } = require('react-native');
import { typography, spacing, width } from '../../Theme/typography';
import colors from '../../Theme/colors';

const styles = StyleSheet.create({
  safe: { flex: 1, paddingBottom: -30 },
  bg: { width: '100%', height: '100%' },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
  },
  topBarTitle: { ...typography.h3, color: colors.white },
  content: {
    paddingHorizontal: spacing.xl,
    width: '60%',
    marginTop: spacing.xxl,
  },
  greeting: {
    ...typography.h3,
    color: colors.textSecondary,
    alignSelf: 'flex-start',
    marginTop: spacing.xxl,
  },
  nameCursive: {
    marginTop: spacing.xs,
    fontFamily: 'DancingScript-Bold',
    fontSize: 40,
    lineHeight: 48,
  },
  role: {
    ...typography.bodySmall,
    color: colors.white,
    alignSelf: 'flex-start',
    marginTop: spacing.xs,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'left',
    marginTop: spacing.xl,
    lineHeight: 26,
  },
  btn: {
    width: width - spacing.xxl * 10,
    marginTop: spacing.xxl,
    alignSelf: 'flex-start',
  },
  socialRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    position: 'relative',
  },
  socialInner: {
    position: 'absolute',
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: 'rgba(10,8,30,0.92)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
