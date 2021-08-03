import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';

export default function NavPage(props) {
  var [startingPoint, setStartingPoint] = useState("Starting Point") ;
  var [destination, setDestination] = useState("Destination") ;
  var calculated = new Map();

  // returns autocompleted location of given text
  function autocomplete(input) {
    const locations = Object.keys(props.locationMap);
    let nearest = locations[0];
    let nearestDistance = 100;
    locations.forEach(loc => {
      let curDistance = lDistance(normalize(loc), normalize(input));
      if (curDistance < nearestDistance) {
        nearest = loc;
        nearestDistance = curDistance;
      }
    });
    return nearest;
  }

  // Levenshtein distance between two strings
  function lDistance(a, b) {
    let res;
    if (calculated.has(a + "," + b)) {res = calculated.get(a + "," + b);}
    else if (calculated.has(b + "," + a)) {res = calculated.get(b + "," + a);}
    else if (b.length == 0) { res = a.length }
    else if (a.length == 0) { res = b.length }
    else if (a[0] == b[0]) {res = lDistance(a.substring(1), b.substring(1))}
    else {
      res = 1 + Math.min(
        3 + lDistance(a.substring(1), b.substring(1)), // replace
        lDistance(a, b.substring(1)), // delete
        lDistance(a.substring(1), b) // insert
      )
    }
    calculated.set(a + "," + b, res);
    calculated.set(b + "," + a, res);
    return res;
  }

  function normalize(s) {
    while (s.length < 20) {
      s += Math.floor(Math.random() * 10000);
    }
    return s;
  }

  return (
    <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={[styles.inputView, styles.shadow]}>
            <Text style={styles.header}>From</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={setStartingPoint}
              value={startingPoint}
              onEndEditing={e => setStartingPoint(autocomplete(e.nativeEvent.text))}
            />
            <Text style={styles.header}>To</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={setDestination}
              value={destination}
              onEndEditing={e => setDestination(autocomplete(e.nativeEvent.text))}
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
    zIndex: 1
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
