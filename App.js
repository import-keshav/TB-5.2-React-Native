import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import NumberButton from './components/NumberButton';
import NumberButtonsArray from './components/NumberButtonsArray_1';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>

      </View>
      <View style={styles.container}>
         
      </View>      
      {/* <NumberButton backgroundColor="black" color="white" title="7" onPress={()=>{console.log("button pressed hard")}}/> */}
      <NumberButtonsArray/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
