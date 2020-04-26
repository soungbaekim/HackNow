import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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

  handlePasswordChange = (password) =>
  {
    this.setState({password: password})
  };



  render(){
    return(
      <View style={styles.container}>
        <Image source = {require("../assets/logo.png")} style = {styles.image}/>
        <FormInputText inputType = "Email" value = {this.state.email} onChangeText = {this.handleEmailChange}/>
        <FormInputText inputType = "Password" value = {this.state.password} onChangeText = {this.handlePasswordChange}/>
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

  image: {
    marginBottom: 15
  }

});

export default LoginScreen;
