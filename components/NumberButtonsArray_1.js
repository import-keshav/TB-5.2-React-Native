import React from 'react';
import {
    View
} from 'react-native';
import NumberButton from './NumberButton';


class NumberButtonsArray extends React.Component {
    render() {

        const number_button_props = {
            backgroundColor: "black",
            color: "white",
            onPress: function() {
                console.log("button pressed hard")
            }
        }

        return(
            <View style={styles.container}>
                <View style={[styles.container, {flexDirection: 'row'}]}>
                    <NumberButton details={number_button_props} title="7"/>
                    <NumberButton details={number_button_props} title="8"/>
                    <NumberButton details={number_button_props} title="9"/>
                </View>
                <View style={[styles.container, {flexDirection: 'row'}]}>
                    <NumberButton details={number_button_props} title="4"/>
                    <NumberButton details={number_button_props} title="5"/>
                    <NumberButton details={number_button_props} title="6"/>
                </View>
                <View style={[styles.container, {flexDirection: 'row'}]}>
                    <NumberButton details={number_button_props} title="1"/>
                    <NumberButton details={number_button_props} title="2"/>
                    <NumberButton details={number_button_props} title="3"/>
                </View>
                <View style={[styles.container, {flexDirection: 'row'}]}>
                    <NumberButton details={number_button_props} title="."/>
                    <NumberButton details={number_button_props} title="0"/>
                    <NumberButton details={number_button_props} title="DEL"/>
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