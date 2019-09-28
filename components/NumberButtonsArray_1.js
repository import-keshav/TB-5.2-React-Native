import React from 'react';
import {
    View
} from 'react-native';
import NumberButton from './NumberButton';


class NumberButtonsArray extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={[styles.container, {flexDirection: 'row'}]}>
                    <NumberButton backgroundColor="black" color="white" title="7" onPress={()=>{console.log("button pressed hard")}}/>
                    <NumberButton backgroundColor="black" color="white" title="8" onPress={()=>{console.log("button pressed hard")}}/>
                    <NumberButton backgroundColor="black" color="white" title="9" onPress={()=>{console.log("button pressed hard")}}/>
                </View>
                <View style={[styles.container, {flexDirection: 'row'}]}>
                    <NumberButton backgroundColor="black" color="white" title="4" onPress={()=>{console.log("button pressed hard")}}/>
                    <NumberButton backgroundColor="black" color="white" title="5" onPress={()=>{console.log("button pressed hard")}}/>
                    <NumberButton backgroundColor="black" color="white" title="6" onPress={()=>{console.log("button pressed hard")}}/>
                </View>
                <View style={[styles.container, {flexDirection: 'row'}]}>
                    <NumberButton backgroundColor="black" color="white" title="1" onPress={()=>{console.log("button pressed hard")}}/>
                    <NumberButton backgroundColor="black" color="white" title="2" onPress={()=>{console.log("button pressed hard")}}/>
                    <NumberButton backgroundColor="black" color="white" title="3" onPress={()=>{console.log("button pressed hard")}}/>
                </View>
                <View style={[styles.container, {flexDirection: 'row'}]}>
                    <NumberButton backgroundColor="black" color="white" title="." onPress={()=>{console.log("button pressed hard")}}/>
                    <NumberButton backgroundColor="black" color="white" title="0" onPress={()=>{console.log("button pressed hard")}}/>
                    <NumberButton backgroundColor="black" color="white" title="DEL" onPress={()=>{console.log("button pressed hard")}}/>
                </View>
            </View>
        )
    }
}

export default NumberButtonsArray;

const styles = {
    container: {
        flex: 1
    }
}