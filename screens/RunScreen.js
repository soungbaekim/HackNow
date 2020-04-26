import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormInputText from '../components/SIText.js';
import Members from '../components/Members.js';
import StartButton from '../components/StartButton';


class RunScreen extends React.Component
 {
  constructor(props){
    super(props);
  }
  render(){
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>Run Name</Text>
      <Members/>
      <StartButton/>
    </View>
  );
}
}

const styles = StyleSheet.create({
    container:
    {
      width: "100%",
      alignItems: "center",
    },
    text:
    {
      textAlign: "center",
      color: "#000000",
      fontSize: 25,
      fontWeight: "bold",
      marginTop: 20
    }
  

  });


export default RunScreen;