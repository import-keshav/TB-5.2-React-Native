import React from 'react';
import { StyleSheet, Text, TouchableOpacity,Dimensions } from 'react-native';
const {height,width} = Dimensions.get('window');
export default class Button extends React.Component{
  constructor(props)
  {
    super(props);

  }
  render(){
    const {backgroundColor,color,onPress}=this.props;
    return(
      <TouchableOpacity onPress={onPress} style={[styles.container,{backgroundColor:backgroundColor}]}>
        <Text style={[styles.text,{color:color}]}>7</Text>
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
  }
})
