import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/entryScreen';

const EntryScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity
        onPress={() => navigation.navigate('INNER')}
        style={styles.button}>
        <Text>PRESS HERE</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EntryScreen;
