import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
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
      races: {},
      runners: {},
      posts: {},
      counter: 0,
      //isLoading: false,
    }
  }


 check_users = () =>
  {
    this.state.users.map((user, i) =>
    {
      if (this.state.users[i].USERNAME.equals(this.state.username)
        && this.state.users[i].PASSWORD.equals(this.state.password) )
      {
         return true;
      }
    })
    return false;
  }

  validate_user = () => {
    console.log("username: ", this.state.username);
    console.log("password: ", this.state.password);

    fetch("https://us-central1-racr2-f3bf3.cloudfunctions.net/signIn?user_id="+this.state.username+"&password="+this.state.password, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((resp) => resp.json()).then((data) => {
          if (data.status) {
            this.props.signin();
          }
        }).catch((e) => {});
  };

  goInside = () =>
  {
    this.validate_user();
    /*
    if (this.check_users)
    {
      return this.props.signin();
    }
    */
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
    /*
    this.get_counter();
    this.get_users();
    this.get_races();
    this.get_runners();
    this.get_posts();
    */
  }

  render(){
    console.log(this.state.counter);
    if (this.state.isRegister)
    {
      return(
        <SignupScreen goToSignIn = {this.handleSignin} signin = {this.props.signin}/>
        )
    }
    return(
      <View style={styles.container}>
        <Image source = {require("../assets/logo.png")} style = {styles.image}/>
        <TextInput
				selectionColor = "#00BBFF"
				style = {styles.textInput}
				placeholder="Username"
        onChangeText={(text) => this.handleUsernameChange(text)}/>
        <TextInput
				selectionColor = "#00BBFF"
				style = {styles.textInput}
				placeholder = "Password"
        onChangeText={(text) => this.handlePasswordChange(text)}/>
        <Button label = "Sign in" onPress={() => this.goInside()}/>
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
  },
  textInput: {
    height: 40,
    borderColor: "#c0c0c0",
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 15,
    paddingHorizontal: 20,
    width: "90%",
    textAlign: "left",
    marginLeft: 10
  },

});

export default LoginScreen;
