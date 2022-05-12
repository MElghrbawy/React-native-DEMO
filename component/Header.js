/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// import {Icon} from '@ant-design/react-native';

function Header() {
  const navigation = useNavigation();

  const navigateToGoogle = () => navigation.navigate('Google');
  const navigateToHome = () => navigation.navigate('Home');
  return (
    <View
      style={{
        backgroundColor: '#081991',
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <FontAwesome5
        name={'google'}
        brand
        size={20}
        color={'white'}
        onPress={navigateToGoogle}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            marginRight: 10,
            fontWeight: '700',
            fontSize: 16,
          }}>
          اخبار السيارات الكهربائيه
        </Text>
        <FontAwesome5
          name={'home'}
          brand
          size={20}
          color={'white'}
          onPress={navigateToHome}
        />
      </View>
    </View>
  );
}

export default Header;
