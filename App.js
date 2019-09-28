import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from 'expo';
import Button from './components/Button';
export default function App() {
  return (
    <View style={styles.container}>
      <Button backgroundColor="black" color="white" onPress={()=>{console.log("button pressed hard")}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
