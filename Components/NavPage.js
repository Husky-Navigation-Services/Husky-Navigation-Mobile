import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';

export default function NavPage(props) {
  var [startingPoint, setStartingPoint] = useState("Starting Point") ;
  var [destination, setDestination] = useState("Destination") ;
  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={[styles.inputView, styles.shadow]}>
            <Text style={styles.header}>From</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={setStartingPoint}
              value={startingPoint}
            />
            <Text style={styles.header}>To</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={setDestination}
              value={destination}
            />
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              activeOpacity= {0.3}
              style={[styles.btn, styles.locBtn, styles.shadow]}
              onPress={() => {}}
              underlayColor='#fff'>
            <Text style={styles.btnText}>Current Location</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity= {0.3}
              style={[styles.btn, styles.goBtn, styles.shadow]}
              onPress={() => {}}
              underlayColor='#fff'>
            <Text style={styles.btnText}>GO</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <MapView
          style={styles.mapStyles}
          initialRegion={{
            latitude: 47.6599,
            longitude: -122.3060,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  mapStyles: {
    width: '100%',
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    position: 'absolute',
    top: 20,
    width: "90%",
    height: 230,
    zIndex: 1,
    borderColor: 'red',
    borderWidth: 1
  },
  inputView: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 30
  },
  header: {
    fontFamily: 'Avenir',
    fontSize: 10,
    opacity: 0.5
  },
  inputText: {
    height: 30,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderColor: "gray"
  },
  btn: {
    zIndex: 1,
    marginTop: 10,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15
  },
  locBtn: {
    width: '70%'
  },
  goBtn: {
    width: '28%'
  },
  shadow: {
    shadowOpacity: 1,
    shadowColor: 'gray',
    shadowRadius: 5
  },
  btnText: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
