import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Alert, Platform, Dimensions } from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';
import SplashScreen from './Components/SplashScreen.js';
import HomeScreen from './Components/HomeScreen.js';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import getLocationMap  from './my_modules/locations.js';

export default function App() {
  console.log("App Executed");
  // create inSplash state and subscribe to inSplash state changes
  //  - rerenders component when inSplash orientation changes
  //  - inSplash represents whether the app is in the splash screen
  //  - MUST use setSplash to change value of inSplash
  var [inSplash, setSplash] = useState(true);
  var [locationMap, setLocationMap] = useState({});

  // set timeout when component mounts
  //  - useEffect runs the given callback when component mounts, when it re-renders,
  //    and runs cleanup() when component dismounts
  useEffect(() => {
    console.log(inSplash);
    if (inSplash) {
      fetchBuildings();
    }
  });

  return (
    inSplash ? 
      <SplashScreen/> 
      :
      <View style={styles.safeContainer}>
        <HomeScreen locationMap={locationMap}/>
      </View>

  );

  // fetch map of buildings<-->coordinates and re-render component with new locations when resolved
  function fetchBuildings() {
    fetch('https://hnavcontent.azurewebsites.net/PublishedNodes.txt')
    .then(res => res.text())
    .then(data => {
      setLocationMap(getLocationMap(data));
      setSplash(false);
    });
  }
}



const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: getStatusBarHeight(true)
  }
});
