import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Vector from '../components/svg/Vector';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 54,
    paddingHorizontal: 21,
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  title: {
    textAlign: 'center',
  },
  label: {
    marginTop: 27,
  },
  input: {
    backgroundColor: '#24252C',
    height: 32,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#465AE9',
    height: 46,
    borderRadius: 10,
    marginTop: 10,
  },
  results: {
    marginTop: 16,
  },
  result: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8,
  },
  resultIdentifier: {
    marginRight: 38, // Since 'gap' is not yet supported
  },
});

const Result = ({ identifier }) => (
  <View style={styles.result}>
    <Text style={[styles.text, styles.resultIdentifier]}>{identifier}</Text>
    <Vector />
  </View>
);

const Lookup = () => {
  const [results, setResults] = useState([]);

  const onLookUp = () => {
    //
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>NFTs Lookup</Text>

      <Text style={[styles.text, styles.label]}>Stacks Address:</Text>
      <TextInput style={[styles.text, styles.input]} />
      <Button title="Look up" onPress={onLookUp} style={styles.button} />

      {!!results.length && (
        <View style={styles.results}>
          <Text style={styles.text}>Results</Text>
          {results.map((result, i) => (
            <Result key={i} identifier={result} />
          ))}
        </View>
      )}
    </View>
  );
};

export default Lookup;
