import React from 'react';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import History from './components/History';
import NumberButtonsArray from './components/NumberButtonsArray_1';
import Output from './components/Output';
const {height,width} = Dimensions.get('window');

import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabase('calculator');
class CalculatorCore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exp: "",
      ans: "",
      key:0
    }
  }

  handlePress = (text) => {
    var {exp, ans} = this.state;

    if(text === "DEL") {
      console.log(typeof(exp));
      exp = exp.slice(0,(exp.length-1));
      if(isNaN(Number(exp.slice(-1))) || exp.length===0) {
        this.setState({exp,ans});
      }
      else {
        ans=eval(exp);
        this.setState({exp,ans:ans.toString()});
      }
    }
    else if(text === "=") {
      if (exp.length === 0 || ans.length === 0) {
        return
      }
      console.log(exp, ans)

    database.transaction(
      (transaction) => {
        transaction.executeSql(
          "INSERT INTO history(input, output) VALUES(?,?)",
          [exp,ans],
          (transaction, success) => {
            exp = ans;
            ans = '';
            this.setState({exp,ans});
          },
          (transaction, error) => {
            console.log(error.message);
          }
        )
      },
    );
    }
    else if(isNaN(Number(text))) {
      exp=exp+text;
      this.setState({exp,ans});
    }
    else {
      exp=exp+text;
      ans=eval(exp);
      this.setState({exp,ans:ans.toString()});
    }
  }


  componentDidMount(){
    console.log("inside component");
    var database = SQLite.openDatabase('calculator');
    database.transaction(
      (transaction) => {
        var create_table_sql_query = "CREATE TABLE history(input varchar(1000), output varchar(1000));";
        transaction.executeSql(
          create_table_sql_query,
          [],
          (transaction, error) => {
            console.log(error.message);
          },
        );
        });
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
    width:width/4,

  },
});

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: CalculatorCore
  },
  History: {
    screen: History
  }
}, {
  contentOptions: {
    labelStyle: {
      fontSize: 30,
      flex:1
    }
  }
});


const App = createAppContainer(DrawerNavigator);
export default App;
