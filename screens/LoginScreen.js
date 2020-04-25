import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/SIButton.js';
import FormInputText from '../components/SIText.js';

<<<<<<< HEAD
readonly state:  State{
	email: "";
	password: "";
}

class LoginScreen extends React.Component<{}, State> {


readonly state: State = {
	email: "",
	password: ""
};

handleEmailChange = (email: string_ => {
	this.setState({email: email});
})




render(){
  return(
    <View style={styles.container}>
      <FormInputText placeholder = "Email"/>
      <FormInputText/>
      <Button/>

=======
export default function LoginScreen(props) {
  return(
    <View style={styles.container}>
      <Button onPress={props.signin}/>
>>>>>>> d5cf1d9201ece61c5b93e46d14872a09b8680e19
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
<<<<<<< HEAD

export default LoginScreen;
=======
>>>>>>> d5cf1d9201ece61c5b93e46d14872a09b8680e19
