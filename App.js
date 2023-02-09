import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Routes } from 'react-router-native';

import Lookup from './src/pages/Lookup';
import Details from './src/pages/Details';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
});

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <Link to="/" underlayColor="#f0f4f7">
        <Text>Home</Text>
      </Link>
      <Link to="/details" underlayColor="#f0f4f7">
        <Text>Details</Text>
      </Link>

      <StatusBar style="auto" />

      <Routes>
        <Route exact path="/" element={<Lookup />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </View>
  </NativeRouter>
);

export default App;
