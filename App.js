import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';

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
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <Routes>
        <Route exact path="/" element={<Lookup />} />
        <Route path="/details/:identifier/:id" element={<Details />} />
      </Routes>
    </ScrollView>
  </NativeRouter>
);

export default App;
