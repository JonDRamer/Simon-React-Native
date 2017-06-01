'use-strict';

import React from 'react';
import { AppRegistry, View, Text, TouchableOpacity } from 'react-native';

state = {
  colors: ["yellow", "blue", "red", "green"],
  pattern: [],
  patternCount: 0
};

function  handlePress(event) {
  console.log(event.target);
  console.log(state.colors);
}

function initializeGame() {
      state.activeGame = true,
      state.patternCount = 0,
      state.streak = 0,
      state.pattern = [],
      state.userArray = []
      updatePattern(state.colors);
    }

function updatePattern(arr) {
  let randomColor = arr[Math.floor(Math.random() * arr.length)];
      state.pattern.push(randomColor);
      state.patternCount += 1;
      console.log(state.pattern);
}
//Create a Component
const App = ({onPress}) =>
   (
      <View style={styles.container}>
          <View style={styles.game}>
              <TouchableOpacity onPress={handlePress} style={styles.yellowPad}>
                  <View></View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePress} style={styles.bluePad}>
                  <View></View>
              </TouchableOpacity>
              <View style={styles.consoleBackground}></View>
              <View style={styles.console}>
                  <Text style={styles.consoleHeaderText}>simon</Text>
                  <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={onPress} style={styles.button}>
                        <View></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={initializeGame}  style={styles.button2}>
                        <View></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress} style={styles.button}>
                       <View></View>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.settings}>
                    <Text style={styles.consoleText}>Last</Text>
                    <Text style={styles.consoleText}>Start</Text>
                    <Text style={styles.consoleText}>Long</Text>
                  </View>
              </View>
              <TouchableOpacity onPress={handlePress} style={styles.redPad}>
                  <View></View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePress} style={styles.greenPad}>
                  <View></View>
              </TouchableOpacity>
          </View>
      </View>
  );

  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    game: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: '#000000',
      height: 350,
      width: 350,
      borderRadius: 200,
      shadowOffset: {
        width: 10,
        height: 10
      },
      shadowColor: 'black',
      shadowOpacity: .4
    },
    yellowPad: {
      height: 150,
      width: 150,
      marginTop: 17,
      marginLeft: 17,
      backgroundColor: "#f4f401",
      borderTopLeftRadius: 200,
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowColor: '#bfbfbf',
      shadowOpacity: 1
    },
    bluePad: {
      height: 150,
      width: 150,
      marginTop: 17,
      marginLeft: 15,
      backgroundColor: "#0099ff",
      borderTopRightRadius: 200,
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowColor: '#bfbfbf',
      shadowOpacity: 1
    },
    consoleBackground: {
      position: 'absolute',
      marginLeft: 95,
      marginTop: 97,
      zIndex: 1,
      height: 160,
      width: 160,
      borderRadius: 100,
      backgroundColor: '#262626',
      shadowOffset: {
        width: 2,
        height: 2
      },
      shadowColor: 'black',
      shadowOpacity: .2
    },
    console: {
      position: 'absolute',
      justifyContent: 'flex-start',
      marginLeft: 105,
      marginTop: 107,
      zIndex: 2,
      height: 140,
      width: 140,
      backgroundColor: 'silver',
      borderRadius: 100,
      shadowOffset: {
        width: 5,
        height: 5
      },
      shadowColor: '#bfbfbf',
      shadowOpacity: .2
    },
    consoleHeaderText: {
      alignSelf: 'center',
      marginTop: 15,
      fontSize: 30,
      fontWeight: '600',
    },
    buttonContainer: {
      position: 'absolute',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignSelf: 'center',
      marginTop: 50,
      width: 130,
      height: 30
    },
    button: {
      height: 10,
      width: 10,
      borderRadius: 100,
      backgroundColor: 'yellow',
      alignSelf: 'center',
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowColor: '#262626',
      shadowOpacity: 1
    },
    button2: {
      height: 10,
      width: 10,
      borderRadius: 100,
      backgroundColor: "#e60000",
      alignSelf: 'center',
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowColor: '#262626',
      shadowOpacity: 1
    },
    settings: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignSelf: 'center',
      marginTop: 25,
      width: 130,
      height: 17
    },
    consoleText: {
      fontSize: 10
    },
    redPad: {
      height: 150,
      width: 150,
      marginTop: 15,
      marginLeft: 17,
      backgroundColor: "#e60000",
      borderBottomLeftRadius: 200,
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowColor: '#bfbfbf',
      shadowOpacity: 1
    },
    greenPad: {
      height: 150,
      width: 150,
      marginTop: 15,
      marginLeft: 15,
      backgroundColor: "#009900",
      borderBottomRightRadius: 200,
      shadowOffset: {
        width: 1,
        height: 1
      },
      shadowColor: '#bfbfbf',
      shadowOpacity: 1
    }
  }

//Render it to the device
AppRegistry.registerComponent('SimonReact', () => App);
