import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  console.log("App Executed");

  const handlePress = () => console.log("Pressed!");
  
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.tinyLogo} source={require('./assets/HuskyNavLogoTransparent.png')}/>
      <Text style={styles.baseText} onPress={handlePress} >Husky Navigation</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    marginBottom: 10,
    width: 120,
    height: 120,
  },baseText: {
    fontFamily: "Cochin",
    fontWeight: "bold",
    fontSize: 20
  }
});
