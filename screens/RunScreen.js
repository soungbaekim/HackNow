import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormInputText from '../components/SIText.js';
import Members from '../components/Members.js';
import StartButton from '../components/StartButton';


class RunScreen extends React.Component
 {
  constructor(props){
    super(props);
    this.state= {
      race_data: {},
      isLoading: true,
    }
  }

 componentDidMount() {
    fetch("https://us-central1-racr2-f3bf3.cloudfunctions.net/getRace?race_id="+"test race", {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((resp) => resp.json()).then((data) => {
          this.setState({isLoading: false, race_data: data.data});
        }).catch((e) => {});
  }







  render() {
    console.log()
    if (this.state.isLoading) {
      return (
        <View/>
      );
    } else {
      return (
        <View style = {styles.container}>
          <Text style = {styles.text}>Run Name</Text>
          <Members race = {this.state.race_data}/>
          <StartButton/>
        </View>
      );
    }

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
