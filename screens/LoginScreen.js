import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/SIButton.js';

export default function LoginScreen() {
  return(
    <View style={styles.container}>
      <Button/>

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