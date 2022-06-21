import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../styles/colors';
import PropTypes from 'prop-types';
import DanubeText from '../DanubeText';
const myIcon = <Icon name="rocket" size={30} color="#900" />;

const RoundIconWithLabel = ({icon, label}) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>{myIcon}</View>
      <DanubeText>{label}</DanubeText>
    </View>
  );
};

export default RoundIconWithLabel;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    width: 70,
    alignItems: 'center',
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
};

RoundIconWithLabel.defaultProps = {
  label: 'label',
};
