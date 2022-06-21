import React from 'react';
import {Platform} from 'react-native';
import {SafeAreaProvider, useSafeArea} from 'react-native-safe-area-context';
import WebView from 'react-native-webview';
import TopHeader from '../../components/TopHeader';

const WebScreen = ({navigation}) => {
  const insets = useSafeArea();
  const isAndroid = Platform.OS === 'android';
  const height = isAndroid ? 0 : insets.top;
  return (
    <SafeAreaProvider style={{marginTop: height}}>
      <TopHeader onBackPress={() => navigation.goBack()} />
      <WebView source={{uri: 'https://www.google.com/'}} />
    </SafeAreaProvider>
  );
};

export default WebScreen;
