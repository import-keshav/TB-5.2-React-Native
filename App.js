import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
// import NumberButton from './components/NumberButton';
import NumberButtonsArray from './components/NumberButtonsArray_1';
import Output from './components/Output';
const {height,width} = Dimensions.get('window');
export default class App extends React.Component {
  render(){
    return (
      <View>
      <View style={styles.container}>
      </View>
      <View style={styles.container}>
        <NumberButtonsArray/>
      </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height:height/2,
    width:width/4
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
