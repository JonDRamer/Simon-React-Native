// IOS CODE
'use strict';

// Import a library to help create a compoenent
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a Component
const App = () =>
   (
    <Text>Some Text</Text>
  );

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
