/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View} from 'react-native';
import Footer from '../component/Footer.js';
import Header from '../component/Header.js';
import Card from '../component/Card.js';
import ShowMore from '../component/ShowMore.js';

function HomeScreen() {
  return (
    <View style={{flex: 1, backgroundColor: '#d3d3d3'}}>
      <Header />
      <Card />
      <Card />
      <Card />
      <ShowMore />
      <Footer />
    </View>
  );
}

export default HomeScreen;
