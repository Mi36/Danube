import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../../styles/colors';
import DanubeText, {TextVariants} from '../DanubeText';

const RoundIconWithLabel = ({icon, label}) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>{icon}</View>
      <DanubeText variant={TextVariants.XS} center>
        {label}
      </DanubeText>
    </View>
  );
};

export default RoundIconWithLabel;

const styles = StyleSheet.create({
  container: {
    width: 70,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 12,
    marginHorizontal: 15,
  },
  main: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: Colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

RoundIconWithLabel.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.element,
};

RoundIconWithLabel.defaultProps = {
  label: 'label',
  icon: null,
};
