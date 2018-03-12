import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount () {
    const config = {
      apiKey: "AIzaSyCD1G0KqtNHzldr6zmhTZLvAqVAxLqExAI",
      authDomain: "one-time-password-80f83.firebaseapp.com",
      databaseURL: "https://one-time-password-80f83.firebaseio.com",
      projectId: "one-time-password-80f83",
      storageBucket: "",
      messagingSenderId: "41182134823"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
