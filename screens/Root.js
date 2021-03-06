import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
//import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainNavigator from '../navigation/MainNavigator';
import useLinking from '../navigation/useLinking';

import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function Root(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [isSignedIn, setSignedIn] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        /*
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
        */
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  global.signIn = (user_id) => {
    global.user_id = user_id;
    setSignedIn(true);
  }

  global.signOut = () => {
    setSignedIn(false);
  }


  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else if (!isSignedIn) {
    return (
      <View style={styles.container}>
        <LoginScreen signIn={signIn}/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={containerRef} initialState={initialNavigationState} signOut={signOut}>
          <Stack.Navigator signOut={signOut}>
            <Stack.Screen name="Root" component={MainNavigator} signOut={signOut}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
