import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import DanubeText from '../../components/DanubeText';
import colors from '../../styles/colors';
import styles from '../../styles/entryScreen';

const EntryScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity
        onPress={() => navigation.navigate('INNER')}
        style={styles.button}>
        <DanubeText bold color={colors.white}>
          Press Here To Continue
        </DanubeText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EntryScreen;
