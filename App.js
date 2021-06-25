import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Background, ImageBackground, Pressable } from 'react-native';
import Homescreen from './appComponents/Homescreen/Homescreen'
import Signupscreen from './appComponents/Signupscreen/Signupscreen'
import Signinscreen from './appComponents/Signinscreen/Signinscreen'
import Profilescreen from './appComponents/Profilescreen/Profilescreen'
import MakeOrderScreen from './appComponents/MakeOrderScreen/MakeOrderScreen'

export default function App() {
  return (
    <View>
      {/* <Homescreen /> */}
      {/* <Profilescreen /> */}
      {/* <Signupscreen /> */}
      {/* <Signinscreen /> */}
      <MakeOrderScreen />
    </View>
  );
}

