import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/SIButton.js';
import FormInputText from '../components/SIText.js';

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