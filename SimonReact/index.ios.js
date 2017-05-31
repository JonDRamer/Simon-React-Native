'use-strict';

import React from 'react';
import { AppRegistry, View } from 'react-native';
//Create a Component
const App = () =>
   (
      <View style={styles.container}>
        <View style={styles.game}>
          <View style={styles.yellowPad}>
          </View>
          <View style={styles.bluePad}>
          </View>
          <View style={styles.redPad}>
          </View>
          <View style={styles.greenPad}>
          </View>
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
      height: 160,
      width: 160,
      marginTop: 10,
      marginLeft: 10,
      backgroundColor: "#f4f401",
      borderTopLeftRadius: 200
    },
    bluePad: {
      height: 160,
      width: 160,
      marginTop: 10,
      marginLeft: 10,
      backgroundColor: "#0099ff",
      borderTopRightRadius: 200
    },
    redPad: {
      height: 160,
      width: 160,
      marginTop: 10,
      marginLeft: 10,
      backgroundColor: "#e60000",
      borderBottomLeftRadius: 200
    },
    greenPad: {
      height: 160,
      width: 160,
      marginTop: 10,
      marginLeft: 10,
      backgroundColor: "#009900",
      borderBottomRightRadius: 200
    }
  }

//Render it to the device
AppRegistry.registerComponent('SimonReact', () => App);
