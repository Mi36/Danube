import PropTypes from 'prop-types';
import React, {useMemo} from 'react';
import {StyleSheet, Text as RNText} from 'react-native';
import concat from '../../utils/concat';
import Colors from '../../styles/colors';

export const TextVariants = {
  XL: 'xlarge',
  L: 'large',
  M: 'medium',
  Base: 'base',
  S: 'small',
  XS: 'xsmall',
};

export default function DanubeText(props) {
  const {
    bold,
    left,
    center,
    right,
    variant,
    color,
    style,
    children,
    semiBold,
    regular,
    ...restProps
  } = props;
  const styling = useMemo(() => {
    return concat(
      styles.default,
      bold && styles.bold,
      semiBold && styles.semiBold,
      regular && styles.regular,
      left && styles.left,
      center && styles.center,
      right && styles.right,
      styles[variant],
      {color},
      style,
    );
  }, [bold, semiBold, regular, left, center, right, color, variant, style]);
  return (
    <RNText style={styling} allowFontScaling={false} {...restProps}>
      {children}
    </RNText>
  );
}

DanubeText.propTypes = {
  bold: PropTypes.bool,
  semiBold: PropTypes.bool,
  regular: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  style: PropTypes.object,
};

DanubeText.defaultProps = {
  bold: false,
  left: true,
  variant: TextVariants.Base,
  color: Colors.black,
};

const styles = StyleSheet.create({
  default: {
    fontWeight: 'normal',
  },
  xlarge: {
    fontSize: 34,
  },
  large: {
    fontSize: 26,
  },
  medium: {
    fontSize: 20,
  },
  base: {
    fontSize: 18,
  },
  small: {
    fontSize: 16,
  },
  xsmall: {
    fontSize: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
  semiBold: {
    fontWeight: '600',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
});
