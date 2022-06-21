import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../styles/colors';
import DanubeText, {TextVariants} from '../DanubeText';

const HeaderCard = ({label}) => {
  return (
    <View style={styles.main}>
      <DanubeText variant={TextVariants.S} color={colors.text_grey}>
        {label}
      </DanubeText>
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.grey,
    paddingVertical: 10,
    paddingLeft: 15,
  },
});

HeaderCard.propTypes = {
  label: PropTypes.string,
};

HeaderCard.defaultProps = {
  label: 'LABEL',
};
