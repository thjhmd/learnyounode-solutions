import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

class Experiment0 extends Component{
  constructor(props){
    super(props);
    this.state={
      info:'if you are seeing this, it did not work :('
    }
  }
  async getData(){
    let url='http://localhost:8082/';
    try{
      let response=await fetch(url);
      console.log(response.json());
    }catch(error){
      console.error;
    }
  }
  render(){
    return(
      <Text>{this.state.info}</Text>
    );
  }
}

AppRegistry.registerComponent('experiment0',()=>Experiment0);
