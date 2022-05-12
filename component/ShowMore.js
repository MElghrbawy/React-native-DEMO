import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import {Icon} from '@ant-design/react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#d3d3d3',
    textSize: 20,
  },
  text: {
    color: 'black',
    marginRight: 10,
  },
});

function ShowMore() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>تحميل المزيد من الاخبار...</Text>
    </View>
  );
}

export default ShowMore;
