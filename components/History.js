import React from 'react';
import {
    Text,
    View,
    ActivityIndicator,
    ScrollView,
} from 'react-native';

import * as SQLite from 'expo-sqlite';


class History extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        history: "",
        loading: true,
      }
    }
    componentDidMount(){
        var history = [];
        var database = SQLite.openDatabase('calculator');
        database.transaction(
          (transaction) => transaction.executeSql(
            "SELECT * FROM history",
            [],
            (transaction, success) => {
              history = success.rows._array;
              console.log(history);
              history=history.map((item)=>{
                return(
                <View>
                  <Text>{item.input}</Text>
                  <Text>{item.output}</Text>
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

export default History;