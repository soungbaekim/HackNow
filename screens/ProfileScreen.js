import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_data: null,
      isLoading: true,
    }
  }

  componentDidMount() {
    fetch("https://us-central1-racr2-f3bf3.cloudfunctions.net/getUser?user_id="+global.user_id, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((resp) => resp.json()).then((data) => {
          this.setState({isLoading: false, user_data: data})
          console.log("Get User Success!");
        }).catch((e) => {});
  }


  render() {
    let {signOut} = this.props;
    let {isLoading, user_data} = this.state;


    if (isLoading) {
      return (<View/>);
    } else {
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

              <Text style={styles.user}>
                {user_data.user_name}
                {user_data.user_age}
              </Text>
              <Text style={styles.bio}>
                {user_data.user_bio}
              </Text>

              <Text style={styles.history}>

              </Text>



            </View>
        </View>
      );
    }

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
