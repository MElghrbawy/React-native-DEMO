import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, StyleSheet, Image, View} from 'react-native';
import Footer from '../component/Footer.js';
import Header from '../component/Header.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    paddingLeft: 30,
    height: 171,
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    width: 120,
    height: 155,
    borderRadius: 20,
  },
  text: {
    color: 'black',
    marginRight: 10,
    padding: 5,
    display: 'flex',
  },
  title: {
    writingDirection: 'rtl',
    fontWeight: '900',
    fontSize: 16,
  },
  content: {
    width: 250,
    writingDirection: 'rtl',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

const NewsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.title}>ايلون ماسك يطرح سيارة تيسلا جديده</Text>
          <Text style={styles.content}>
            لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
            أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
            منيس أستي ناتيس أيررور سيت فوليبتاتيم أكيسأنتييوم دولاريمكيو
            لايودانتيوم,توتام ريم أبيرأم,أيكيو أبسا كيواي أب أللو أنفينتوري
          </Text>
        </View>

        <Image
          style={styles.image}
          source={require('../assets/images/elon.png')}
          resizeMode={'cover'}
        />
      </View>
      <Footer style={{alignSelf: 'flex-end'}} />
    </SafeAreaView>
  );
};

export default NewsScreen;
