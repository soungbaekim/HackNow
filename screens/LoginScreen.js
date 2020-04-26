import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from '../components/SIButton.js';
import FormInputText from '../components/SIText.js';
import SignupScreen from './SignupScreen.js'

import {db} from '../src/config';



class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      username: "",
      isRegister: false,
      users: {},
      //isLoading: false,
    }
  }
//async get_users = () =>
  get_users() {
    db.ref('/users').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let userItems = {...data};
      this.setState({
        users: userItems,
      });
    });
  }

  create_user(name, username, image, age, bio, password) {
    db.ref('/users').push({
      NAME: name,
      USERNAME: username,
      IMAGE: image,
      AGE: age,
      BIO: bio,
      PASSWORD: password,
      //ID: id,
      Runs: new Map(),
    });
  }

  create_race(distance) {
    db.ref('/races').push({
      NAME: name,
      USERNAME: username,
      IMAGE: image,
      AGE: age,
      BIO: bio,
      //ID: id,
      Runs: new Map(),
    });
}



 clearUsers() {
    db.ref('/users').remove();
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


  componentDidMount() {
    this.get_users();
  }

  render(){
    console.log(this.state.users);
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
