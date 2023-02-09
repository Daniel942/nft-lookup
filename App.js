import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Routes } from 'react-router-native';

const Home = () => <Text>NFTs Lookup</Text>;
const Details = () => <Text>NFT Details</Text>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A1A1A1',
    alignItems: 'center',
    justifyContent: 'center',
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
    </View>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  </NativeRouter>
);

export default App;
