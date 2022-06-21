import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import DanubeText, {TextVariants} from '../DanubeText';
import colors from '../../styles/colors';

const SubCard = ({
  flagIcon,
  leftIcon,
  rightIcon,
  rightLabel,
  leftLabel,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.left}>
        {leftIcon}
        <DanubeText
          style={styles.leftText}
          color={colors.grey_2}
          variant={TextVariants.XS}>
          {leftLabel}
        </DanubeText>
      </View>
      <View style={styles.right}>
        {rightIcon}
        <DanubeText style={styles.rightText} color={colors.grey_2}>
          {rightLabel}
        </DanubeText>
        {flagIcon ? flagIcon : null}
      </View>
    </TouchableOpacity>
  );
};

export default SubCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 25,
    paddingHorizontal: 15,
    paddingVertical: 25,
    borderBottomWidth: 0.2,
    borderBottomColor: colors.grey_2,
  },
  left: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  leftText: {
    paddingLeft: 10,
  },
  rightText: {
    paddingRight: 10,
  },
});

SubCard.propTypes = {
  label: PropTypes.string,
  flagIcon: PropTypes.element,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  rightLabel: PropTypes.string,
  leftLabel: PropTypes.string,
  onPress: PropTypes.func,
};

SubCard.defaultProps = {
  label: 'LABEL',
  flagIcon: null,
  leftIcon: null,
  rightIcon: null,
  rightLabel: null,
  leftLabel: null,
  onPress: null,
};
