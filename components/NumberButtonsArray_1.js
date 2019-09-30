import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';
import NumberButton from './NumberButton';

const {height,width}=Dimensions.get('window');
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
            height:height/8,
            width:width/4,
        }

        return(
            <View style={styles.container}>
                <View style={[styles.innerContainer, {flexDirection: 'column'}]}>
                    <NumberButton details={number_button_props} title="7"/>
                    <NumberButton details={number_button_props} title="4"/>
                    <NumberButton details={number_button_props} title="1"/>
                    <NumberButton details={number_button_props} title="."/>
                </View>

                <View style={[styles.innerContainer, {flexDirection: 'column'}]}>
                    <NumberButton details={number_button_props} title="8"/>
                    <NumberButton details={number_button_props} title="5"/>
                    <NumberButton details={number_button_props} title="2"/>
                    <NumberButton details={number_button_props} title="0"/>
                </View>
                <View style={[styles.innerContainer, {flexDirection: 'column'}]}>
                    <NumberButton details={number_button_props} title="9"/>
                    <NumberButton details={number_button_props} title="6"/>
                    <NumberButton details={number_button_props} title="3"/>
                    <NumberButton details={number_button_props} title="DEL"/>
                </View>
                <View style={[styles.innerContainer, {flexDirection: 'column'}]}>
                    <NumberButton details={{...number_button_props,height:height/10}} title="/"/>
                    <NumberButton details={{...number_button_props,height:height/10}} title="*"/>
                    <NumberButton details={{...number_button_props,height:height/10}} title="-"/>
                    <NumberButton details={{...number_button_props,height:height/10}} title="+"/>
                    <NumberButton details={{...number_button_props,height:height/10}} title="="/>
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
        width : width,
    },
    innerContainer:{
      flex: 1,
      flexDirection: "column",
      width : width/4,
      height: height/2,
    }
}
