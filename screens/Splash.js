/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text} from 'react-native';

function SplashScreen({navigation}) {
  setTimeout(function () {
    navigation.navigate('Home');
  }, 1);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Splash Screen</Text>
    </View>
  );
}

export default SplashScreen;
