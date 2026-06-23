export const fonts = {
  Poppins: {
    Bold: 'Poppins-Bold',
    SemiBold: 'Poppins-SemiBold',
    Medium: 'Poppins-Medium',
    Regular: 'Poppins-Regular',
    Light: 'Poppins-Light',
  },
};

export const fontSize = {
  h1: 32,
  h2: 24,
  h3: 20,
  h4: 18,

  body: 16,
  bodySmall: 14,

  caption: 12,
  tiny: 10,
};

export const lineHeight = {
  h1: 40,
  h2: 32,
  h3: 28,
  h4: 26,

  body: 24,
  bodySmall: 20,

  caption: 16,
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,

  screenPadding: 16,
  cardPadding: 20,

  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    round: 999,
  },
};


export const typography = {
  h1: {
    fontFamily: fonts.Poppins.Bold,
    fontSize: fontSize.h1,
    lineHeight: lineHeight.h1,
  },

  h2: {
    fontFamily: fonts.Poppins.SemiBold,
    fontSize: fontSize.h2,
    lineHeight: lineHeight.h2,
  },

  h3: {
    fontFamily: fonts.Poppins.SemiBold,
    fontSize: fontSize.h3,
    lineHeight: lineHeight.h3,
  },

  body: {
    fontFamily: fonts.Poppins.Regular,
    fontSize: fontSize.body,
    lineHeight: lineHeight.body,
  },

  bodySmall: {
    fontFamily: fonts.Poppins.Regular,
    fontSize: fontSize.bodySmall,
    lineHeight: lineHeight.bodySmall,
  },

  caption: {
    fontFamily: fonts.Poppins.Light,
    fontSize: fontSize.caption,
    lineHeight: lineHeight.caption,
  },
};