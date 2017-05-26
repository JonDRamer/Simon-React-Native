// IOS CODE
'use strict';

// Import a library to help create a compoenent
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () =>
   (
    <Header />
  );

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
