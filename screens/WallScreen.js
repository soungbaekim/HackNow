import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormInputText from '../components/SIText.js';
import Members from '../components/Members.js';
import StartButton from '../components/StartButton';


class WallScreen extends React.Component
 {
  constructor(props){
    super(props);
  }
  render(){
  return (
    <View>
      <Text>Wall</Text>
    </View>
  );
}
}


export default WallScreen;