import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Navbar from './Navbar.js'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <Text>Home Screen </Text>
        <Navbar activePage="nav"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
