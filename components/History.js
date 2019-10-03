import React from 'react';
import {
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    Dimensions,
} from 'react-native';

import * as SQLite from 'expo-sqlite';
const {height,width}=Dimensions.get('window');


class History extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        history: "",
        loading: true,
      }
    }
    componentDidMount(){
      const {navigation}=this.props;
      this.focusListener = navigation.addListener('didFocus', () => {
        var history = [];
        var database = SQLite.openDatabase('calculator');
        database.transaction(
          (transaction) => transaction.executeSql(
            "SELECT * FROM history",
            [],
            (transaction, success) => {
              history = success.rows._array;
              //console.log(history);
              history=history.map((item,index)=>{
                return(
                <View style={styles.container} key={index}>
                  <Text style={styles.textExp}>{item.input}</Text>
                  <Text style={styles.textAns}>{item.output}</Text>
                </View>
                )
              })
              this.setState({history: history,loading:false});


            },
            (transaction, error) => {
              console.log(error.message);
            },
          ),
        );

        
      });
      
    }
    render() {

      return (
        <ScrollView>
          {this.state.loading &&
            <ActivityIndicator size="large" color="blue"/>
          }
          {!this.state.loading &&
          this.state.history

          }
        </ScrollView>
      )
    }
  }
const styles=StyleSheet.create({
  textExp:{
    color:"black",
    fontSize:30,
  },
  textAns:{
    color:"black",
    fontSize:15
  },
  container:{
    alignItems:"flex-end",
    justifyContent:"center",
    width:width,
    marginBottom:15,
  }
})
export default History;
