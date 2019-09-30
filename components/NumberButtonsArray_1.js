import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import NumberButton from './NumberButton';


class NumberButtonsArray extends React.Component {
    constructor(props)
    {
      super(props);
    }
    render() {

        const number_button_props = {
            backgroundColor: "black",
            color: "white",
            onPress:this.props.onPress,
        }

        return(
            <View style={styles.container}>
                <View style={[styles.container, {flexDirection: 'column'}]}>
                    <NumberButton details={number_button_props} title="7"/>
                    <NumberButton details={number_button_props} title="4"/>
                    <NumberButton details={number_button_props} title="1"/>
                    <NumberButton details={number_button_props} title="."/>
                </View>
                
                <View style={[styles.container, {flexDirection: 'column'}]}>
                    <NumberButton details={number_button_props} title="8"/>
                    <NumberButton details={number_button_props} title="5"/>
                    <NumberButton details={number_button_props} title="2"/>
                    <NumberButton details={number_button_props} title="0"/>
                </View>
                <View style={[styles.container, {flexDirection: 'column'}]}>
                    <NumberButton details={number_button_props} title="9"/>
                    <NumberButton details={number_button_props} title="6"/>
                    <NumberButton details={number_button_props} title="3"/>
                    <NumberButton details={number_button_props} title="DEL"/>
                </View>
                <View style={[styles.container, {flexDirection: 'column'}]}>
                    <NumberButton details={number_button_props} title="/"/>
                    <NumberButton details={number_button_props} title="*"/>
                    <NumberButton details={number_button_props} title="-"/>
                    <NumberButton details={number_button_props} title="+"/>
                    <NumberButton details={number_button_props} title="="/>
                </View>
            </View>

        )
    }
}

export default NumberButtonsArray;

const styles = {
    container: {
        flex: 1,
        flexDirection: "row",
        width : Dimensions.get("window").width,
        height: Dimensions.get("window").height
    }
}
