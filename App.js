import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpaccity } from 'react-native';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state={ counter:0 };
  }
  handleIncrease=()=>{ this.setState((prevState)=>({
    counter: prevState.counter+1
  }));}
};
handleDecrease=()=>{this.setState(prevState)=>({
  counter
})}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;