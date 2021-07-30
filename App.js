import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Alert, Platform, Dimensions } from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';
import SplashScreen from './Components/SplashScreen.js';
import HomeScreen from './Components/HomeScreen.js';

export default function App() {
  // subscribe to changes in device orientation
  //  - rerenders component when device orientation changes
  //  - represents device orientation value {"landscape":true/false, "portrait": true/false}
  var orientation = useDeviceOrientation();
  
  // create inSplash state and subscribe to inSplash state changes
  //  - rerenders component when inSplash orientation changes
  //  - inSplash represents whether the app is in the splash screen
  //  - MUST use setSplash to change value of inSplash
  var [inSplash, setSplash] = useState(true);

  // set timeout when component mounts
  //  - useEffect runs the given callback when component mounts, when it re-renders,
  //    and runs cleanup() when component dismounts
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSplash(false)
    }, 1000);

    // cleanup() runs when component dismounts
    return function cleanup() {
      clearTimeout(timeout);
    }
  });
  
  return (
    inSplash ? 
      <SplashScreen/> 
      :
      <View style={styles.safeContainer}>
        <HomeScreen />
      </View>

  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
