import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, PlatformColor } from 'react-native';


export default function Icon(props) {
  // notes on images:
  //  require(props.imgSource) will NOT work since RN must load all images prior to bundle compilation
  //  the value of require("path/path") MUST be used in the same component
  //    since the image is loaded in a way associated with that component
  //    and can't be accessed elsewhere
  const images = {
    "settings": require("../assets/settings.png/"),
    "feedback": require('../assets/feedback.png'),
    "nav": require('../assets/nav.png'),
    "directory": require('../assets/directory.png'),
    "info": require('../assets/info.png'),
  }

  const isActive = props.isActive;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.setActivePage(props.icon)}>
          <Image 
              style={isActive ? styles.active : styles.inactive} 
              source={images[props.icon]} 
          />
      </TouchableOpacity>
      {isActive && <View style={styles.shadow}></View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  inactive: {
    width: 40,
    height: 40 
  },
  active: {
    width: 40,
    height: 40,
    bottom: 20
  },
  shadow: {
    width: 40,
    height: 10,
    borderRadius: 15,
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
  }
});
