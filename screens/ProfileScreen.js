import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ProfileScreen extends React.Component {
  render() {
    let {signOut} = this.props;

    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <TouchableOpacity style={styles.logout_button} onPress={() => global.signOut()}>
          <Text style={{fontSize: 32, fontWeight: 'bold', color: 'black'}}>LOGOUT</Text>
        </TouchableOpacity>
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
  logout_button: {

  }
});
