import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';


export default function SplashScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image 
                style={styles.tinyLogo} 
                source={require('../assets/HuskyNavLogoTransparent.png')}
            />
            <Text style={styles.title}>Husky Navigation</Text>
        </View>
        <ActivityIndicator 
            style={styles.activityIndicator}
            size="large" 
            color="#4b2e83" 
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Avenir',
    fontSize: 30
  },
  logoContainer: {
    width: 300,
    height: 150,
    top: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tinyLogo: {
    width: 100,
    height: 100,
    margin: 40
  },
  activityIndicator: {
    position: 'absolute',
    bottom: 200 
  }
});


/*

*/