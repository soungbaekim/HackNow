import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/SIButton.js';

export default function LoginScreen(props) {
  return(
    <View style={styles.container}>
      <Button onPress={props.signin}/>
    </View>
    )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
