import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

// import {Icon} from '@ant-design/react-native';

const styles = StyleSheet.create({
  container: {
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
    justifyContent: 'space-between',
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

function Card() {
  const navigation = useNavigation();
  const navigateToNews = () => navigation.navigate('News');
  return (
    <TouchableOpacity onPress={navigateToNews}>
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
    </TouchableOpacity>
  );
}

export default Card;
