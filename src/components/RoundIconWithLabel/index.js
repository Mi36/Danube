import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import colors from '../../styles/colors';
import Colors from '../../styles/colors';
import DanubeText, {TextVariants} from '../DanubeText';

const RoundIconWithLabel = ({icon, label, dot, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <View>
        <View style={styles.main}>{icon}</View>
        {dot ? (
          <View style={styles.dot}>
            <DanubeText color={Colors.white} style={styles.text}>
              1
            </DanubeText>
          </View>
        ) : null}
      </View>
      <DanubeText variant={TextVariants.XS} center color={colors.grey_2}>
        {label}
      </DanubeText>
    </TouchableOpacity>
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
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colors.black,
    position: 'absolute',
    bottom: 22,
    right: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 7,
  },
});

RoundIconWithLabel.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.element,
  dot: PropTypes.bool,
  onPress: PropTypes.func,
};

RoundIconWithLabel.defaultProps = {
  label: 'label',
  icon: null,
  dot: false,
  onPress: () => null,
};
