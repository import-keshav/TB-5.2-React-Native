import React from 'react';
import { StyleSheet, Text, TouchableOpacity,Dimensions } from 'react-native';

const {height,width} = Dimensions.get('window');

class NumberButton extends React.Component{
  constructor(props)
  {
    super(props);
  }

  render(){
    const {backgroundColor,color,onPress, title}=this.props;
    return(
      <TouchableOpacity onPress={onPress} style={[styles.container,{backgroundColor:backgroundColor}]}>
        <Text style={[styles.text,{color:color}]}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles= StyleSheet.create({
  container:{
    width:width/4,
    height:height/8,
    borderWidth:1,
    justifyContent:"center",
    alignItems:"center",
  },
  text:{
    fontSize:40,
  },
})


export default NumberButton;