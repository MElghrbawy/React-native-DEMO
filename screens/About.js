import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';
import Footer from '../component/Footer.js';
import Header from '../component/Header.js';

const AboutScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={{flex: 1, marginTop: 50, alignItems: 'center'}}>
        <Text style={{fontSize: 50, marginBottom: 20}}>About</Text>
        <Text>
          Along with HR, Finance, Communications, Policy, Facility Management
          and Real Estate Management, DEMO is a department of TU Delft’s
          Universtyity Corporate Office. DEMO facilitates experimental technical
          and scientific education and research. We achieve this through rapid
          development and construction of unique experimental setups and
          prototypes. The DEMO organisation exists primarily to serve TU Delft,
          but where possible we also offer our services to other educational and
          research institutions, knowledge companies and high-tech start-ups.
          With a staff of approximately 85 and a modern, well-equipped range of
          machinery, DEMO is present at a number of faculties.
        </Text>
      </View>

      <Footer />
    </SafeAreaView>
  );
};

export default AboutScreen;
