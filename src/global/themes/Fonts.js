const type = {
  base: 'System',
  medium: 'System-Medium',
  bold: 'System-Bold',
};

const size = {
  section: 16,
  input: 16,
  regular: 14,
  medium: 14,
  small: 12,
  tiny: 8.5,
};

const style = {
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  sectionText: {
    fontFamily: type.base,
    fontSize: size.section,
  },
  sectionDescription: {
    fontFamily: type.base,
    fontSize: size.small,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  button: {
    fontFamily: type.medium,
    fontSize: size.regular,
  },
  input: {
    fontFamily: type.base,
    fontSize: size.input,
  },
};

export default {
  type,
  size,
  style,
};
