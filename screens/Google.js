import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WebView} from 'react-native-webview';
import Footer from '../component/Footer.js';
import Header from '../component/Header.js';

const GoogleScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <WebView source={{uri: 'https://www.google.com'}} />
      <Footer />
    </SafeAreaView>
  );
};

export default GoogleScreen;
