import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator} from 'react-native';
import Navbar from './Navbar.js';
import SettingsPage from './SettingsPage.js';
import FeedbackPage from './FeedbackPage.js';
import NavPage from './NavPage.js';
import DirectoryPage from './DirectoryPage.js';
import InfoPage from './InfoPage.js';

export default function HomeScreen() {
  var [activePage, setActivePage] = useState("nav");

  return (
      <View style={styles.container}>
          {activePage == "settings" && <SettingsPage />}
          {activePage == "feedback" && <FeedbackPage />}
          {activePage == "nav" && <NavPage />}
          {activePage == "directory" && <DirectoryPage />}
          {activePage == "info" && <InfoPage />}
          <Navbar activePage={activePage} setActivePage={setActivePage}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
