import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/SIButton.js';
import FormInputText from '../components/SIText.js';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      passsword: "",
    }
  }

  handleEmailChange = (email) => {
  	this.setState({email: email});
  };



  render(){
    return(
      <View style={styles.container}>
        <FormInputText placeholder = "Email"/>
        <FormInputText/>
        <Button onPress={this.props.signin}/>
      </View>
      );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
