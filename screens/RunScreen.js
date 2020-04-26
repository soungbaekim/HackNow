import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class RunScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      flock_list: [],
    }
  }



  render() {



    return (
      <View style={styles.container}>
        <View style={styles.group_container}>
          <Text>Flock</Text>
          <TouchableOpacity style={styles.add_button}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button_container}>
          <TouchableOpacity style={styles.ready_button}>
            <Text style={{fontSize: 32, fontWeight: 'bold', color: 'white'}}>READY</Text>
          </TouchableOpacity>
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
    justifyContent: 'center',
  },
  group_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ready_button: {
    backgroundColor: 'green',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 15,
  },
  add_button: {
    backgroundColor: 'blue',
    paddingHorizontal: 30,
    paddingVertical: 7,
    borderRadius: 15,
  },
});
