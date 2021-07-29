import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Alert, Platform, Dimensions } from 'react-native';
import {useDeviceOrientation} from '@react-native-community/hooks';
import SplashScreen from './SplashScreen.js';

export default function App() {
  // subscribe to changes in device orientation
  //  - rerenders component when device orientation changes
  //  - returns device orientation value {"landscape":true/false, "portrait": true/false}

  var orientation = useDeviceOrientation();
 
  
  return (
    <SplashScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});


/* 

<SafeAreaView style={styles.container}>
      <SplashScreen/>
      
    </SafeAreaView>

*/

/*
<Image 
          style={styles.tinyLogo} 
          source={require('./assets/HuskyNavLogoTransparent.png')}
        />
*/