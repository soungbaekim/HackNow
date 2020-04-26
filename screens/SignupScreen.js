import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../components/SIButton.js';
import FormInputText from '../components/SIText.js';
import {db} from '../src/config';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      username: "",
      email: ""
    }
  }

  create_user(name, username, image, age, bio, password) {
    db.ref('/users').push({
      NAME: name,
      USERNAME: username,
      IMAGE: image,
      AGE: age,
      BIO: bio,
      PASSWORD: password,
      RUNS: new Map(),
    });
  }

  passSignInProp()
  {
    this.create_user(null, this.username, null, null, null, this.password); 
    return this.props.signin;
  }


  handlePasswordChange = (password) =>
  {
    this.setState({password: password})
  };

  handleUsernameChange = (username) =>
  {
    this.setState({username: username})
  };
  handleEmailChange = (email) =>
  {
    this.setState({email: email})
  };




  render(){
    return(
      <View style={styles.container}>
        <Image source = {require("../assets/logo.png")} style = {styles.image}/>
        <FormInputText inputType = "Email" value = {this.state.email} onChangeText = {this.handleEmailChange}/>
        <FormInputText inputType = "Username" value = {this.state.username} onChangeText = {this.handleUsernameChange}/>
        <FormInputText inputType = "Password" value = {this.state.password} onChangeText = {this.handlePasswordChange}/>
        <Button label = "Sign up" onPress={this.passSignInProp()}/>
        <Text onPress = {this.props.goToSignIn} style = {styles.text}>Already have an Account? Sign in</Text>
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

export default SignupScreen;
