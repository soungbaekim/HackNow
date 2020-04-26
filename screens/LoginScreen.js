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
      races: {},
      runners: {},
      posts: {},
      counter: 0,
      //isLoading: false,
    }
  }
//async get_users = () =>
  get_counter() {
    db.ref('/counter').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let counterItems = {...data};
      this.setState({
        counter: counterItems["-M5odzC9IMeSaRd5mS7-"].VAL,
      });
    });
  }

  update_counter(){
    db.ref('/counter').update({
      ["-M5odzC9IMeSaRd5mS7-"]: {
        VAL: this.state.counter + 1
      },
    });
  }

  get_users() {
    db.ref('/users').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let userItems = {...data};
      this.setState({
        users: userItems,
      });
    });
  }

  get_runners() {
    db.ref('/runners').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let runnerItems = {...data};
      this.setState({
        runners: runnerItems,
      });
    });

  }

  get_races() {
    db.ref('/races').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let raceItems = {...data};
      this.setState({
        races: raceItems,
      });
    });
  }

  get_posts() {
    db.ref('/posts').on('value', querySnapShot => {
      let data = querySnapShot.val() ? querySnapShot.val() : {};
      let raceItems = {...data};
      this.setState({
        posts: raceItems,
      });
    });
  }

  create_user(name, username, image, age, bio, password, email) {

    db.ref('/users').push({
      NAME: name,
      USERNAME: username,
      IMAGE: image,
      AGE: age,
      BIO: bio,
      PASSWORD: password,
      EMAIL: email,
      RUNS: new Map(),
    });
    return username

  }

  create_race(name, distance) {

    db.ref('/races').push({
      NAME: name,
      START: null,
      DISTANCE: distance, //in miles
      STATE: 0, //0-Ready, 1-Running, 2-Done
      RUNNERS: new Map(),
      ID: this.state.counter
    });
    this.update_counter()
    return this.state.counter-1
  }

  create_runner(race_id, username){
    db.ref('/runners').push({
      RACEID: race_id,
      NAME: username,
      STATE: -1, //(-1)-NotReady, 0-Ready, 1-Running, 2-Done
      DISTANCE: 0, //in miles
      TIME: 0,
      ID: this.state.counter
    });
    this.update_counter()
    return this.state.counter-1
  }

  create_post(username, race_id, rank){
      db.ref('/posts').push({
        POSTER: username,
        RACE: race_id,
        RANK: rank,
        ID: this.state.counter
      });
      this.update_counter();
      return this.state.counter - 1;
  }



 clearUsers() {
    db.ref('/users').remove();
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

  goInside = () =>
  {
    if (this.check_users)
    {
      return this.props.signin();
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


  componentDidMount() {
    this.get_counter();
    this.get_users();
    this.get_races();
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
        <FormInputText inputType = "Username" value = {this.state.username} onChangeText = {this.handleUsernameChange}/>
        <FormInputText inputType = "Password" value = {this.state.password} onChangeText = {this.handlePasswordChange}/>
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
  }

});

export default LoginScreen;
