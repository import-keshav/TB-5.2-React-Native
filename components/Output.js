import React from 'react';
import {View,Text,Dimensions,StyleSheet} from 'react-native';

const Output=(props)=> {
    const {exp,ans}=props;
    return(
      <View style={styles.container}>
        <Text style={styles.textExp}>{exp}</Text>
          <Text style={styles.textAns}>{ans}</Text>

      </View>
    )
}
const styles=StyleSheet.create({
container:{
  flex:1,
  width:Dimensions.get('window').width,
  justifyContent:"flex-end",
  alignItems:"flex-end",
  borderWidth:1,
  marginBottom:20,
},
textExp:{
  color:"black",
  fontSize:40,
  marginBottom:30
}
,
textAns:{
  color:"black",
  fontSize:25
}
})
 export default Output;
