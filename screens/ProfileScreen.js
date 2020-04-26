import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';

export default class ProfileScreen extends React.Component {
  render() {
    let {signOut} = this.props;

    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
        <TouchableOpacity style={styles.logout_button} onPress={() => global.signOut()}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>LOGOUT</Text>
        </TouchableOpacity>


          <View style={styles.header}>

            <View style={styles.profilepicWrap}>
              <Image source = {require("../assets/logo.png")} style = {styles.profilepic}/>
            </View>

            <Text style={styles.user}>JOHN DOE</Text>
            <Text style={styles.bio}> - BIOGRAPHY - </Text>

            <Text style={styles.history}>RACE HISTORY</Text>



          </View>
      </View>
    );
  }
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'stretch',
    width: null,
  },
  header: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 100,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  profilepicWrap: {
    width: 180,
    height: 180,
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.4)',
    borderWidth: 10,
  },
  profilepic: {
    flex: 1,
    width: null,
    alignItems: 'center',
    borderRadius: 100,
    borderColor: '#fff'
  },
  user: {
    marginTop: 20,
    fontSize:30,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 12,
    fontWeight: '300',
    fontStyle: 'italic',
  },
  history: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
  },




  logout_button: {

  }
});
