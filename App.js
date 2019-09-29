import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
// import NumberButton from './components/NumberButton';
import NumberButtonsArray from './components/NumberButtonsArray_1';
import Output from './components/Output';
const {height,width} = Dimensions.get('window');
export default class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      exp:"",
      ans:"",
    }
  }
  handlePress=(text)=>{
    var {exp,ans}=this.state;
    if(text==="DEL")
    {
      exp=exp.slice(0,(exp.length-1))
      if(isNaN(Number(exp.slice(-1))))
      this.setState({exp,ans});
      else {
        ans=eval(exp);
        this.setState({exp,ans});
      }
    }
    else if(isNaN(Number(text))) {
      exp=exp+text;
      this.setState({exp,ans});
    }
    else {
      exp=exp+text;
      ans=eval(exp);
      this.setState({exp,ans});
    }


    }


  render(){
    const {exp,ans} = this.state;
    return (
      <View>
      <View style={styles.container}>
        <Output exp={exp} ans={ans}/>
      </View>
      <View style={styles.container}>
        <NumberButtonsArray onPress={this.handlePress}/>
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
