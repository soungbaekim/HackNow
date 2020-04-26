import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../components/SIButton.js';
import FormInputText from '../components/SIText.js';
import SignupScreen from './SignupScreen.js'


class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      username: "",
      isRegister: false
    }
  }


  handlePasswordChange = (password) =>
  {
    this.setState({password: password})
  };

  handleUsernameChange = (username) =>
  {
    this.setState({username: username})
  };

  handleRegister = () =>
  {
    this.setState({isRegister: true})
  };

  handleSignin = () =>
  {
    this.setState({isRegister: false})
  };



  render(){
    if (this.state.isRegister)
    {
      return(
        <SignupScreen goToSignIn = {this.handleSignin}/>
        )
    }
    return(
      <View style={styles.container}>
        <Image source = {require("../assets/logo.png")} style = {styles.image}/>
        <FormInputText inputType = "Username" value = {this.state.username} onChangeText = {this.handleUsernameChange}/>
        <FormInputText inputType = "Password" value = {this.state.password} onChangeText = {this.handlePasswordChange}/>
        <Button label = "Sign in" onPress={this.props.signin}/>
        <Text onPress = {this.handleRegister} style = {styles.text}>Create an account</Text>
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
  },

  text:{
    marginTop: 10,
    color: "#00BBFF"
  }

});

export default LoginScreen;
