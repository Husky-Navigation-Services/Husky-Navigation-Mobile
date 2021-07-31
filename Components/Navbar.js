import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, PlatformColor } from 'react-native';
import Icon from './Icon';

export default function Navbar(props) {

  return (
    <View style={styles.container}>
        <Icon icon="settings" isActive={props.activePage == "settings"} setActivePage={props.setActivePage}/>
        <Icon icon="feedback"  isActive={props.activePage == "feedback"} setActivePage={props.setActivePage}/>
        <Icon icon="nav"  isActive={props.activePage == "nav"} setActivePage={props.setActivePage}/>
        <Icon icon="directory"  isActive={props.activePage == "directory"} setActivePage={props.setActivePage}/>
        <Icon icon="info"  isActive={props.activePage == "info"} setActivePage={props.setActivePage}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#e6e8eb',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  tinyLogo: {
    width: 40,
    height: 40
  }
});
