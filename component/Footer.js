/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import {Icon} from '@ant-design/react-native';
const handleWhatsapp = () => {
  Linking.openURL('http://api.whatsapp.com/send?phone=20' + 1158535672)
    .then(data => {
      console.log('whats app opened');
    })
    .catch(() => {
      console.log('Make sure Whatsapp installed on your device');
    });
};

function Footer() {
  const navigation = useNavigation();
  const navigateToAbout = () => navigation.navigate('About');
  const navigateToHome = () => navigation.navigate('Home');
  return (
    <View
      style={{
        backgroundColor: '#081991',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}>
      <FontAwesome5
        name={'info-circle'}
        brand
        size={20}
        color={'white'}
        onPress={navigateToAbout}
      />
      <FontAwesome5
        name={'whatsapp'}
        brand
        size={20}
        color={'white'}
        onpress={handleWhatsapp}
      />
      <FontAwesome5
        name={'home'}
        brand
        size={20}
        color={'white'}
        onPress={navigateToHome}
      />
    </View>
  );
}

export default Footer;
