import React, { useCallback, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from 'react-router-native';
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
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#465AE9',
    height: 46,
    borderRadius: 10,
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

const Result = ({ identifier, id }) => (
  <Link to={`/details/${identifier}/${id}`}>
    <View style={styles.result}>
      <Text style={[styles.text, styles.resultIdentifier]}>{identifier}</Text>
      <Vector />
    </View>
  </Link>
);

const Lookup = () => {
  const [address, setAddress] = useState('');
  const [results, setResults] = useState([]);

  const onLookUp = useCallback(() => {
    fetch(`https://stacks-node-api.mainnet.stacks.co/extended/v1/address/${address}/nft_events`)
      .then((response) => response.json())
      .then((json) => {
        if (json && json.nft_events) {
          setResults(
            json.nft_events.map((nftEvent) => ({
              identifier: nftEvent.asset_identifier,
              id: nftEvent.value.repr.substring(1),
            }))
          );
        } else {
          setResults([]);
        }
      })
      .catch((error) => {
        setResults([]);
        console.error(error);
      });
  }, [address]);

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>NFTs Lookup</Text>

      <Text style={[styles.text, styles.label]}>Stacks Address:</Text>
      <TextInput onChangeText={(text) => setAddress(text)} style={[styles.text, styles.input]} />
      <Button title="Look up" onPress={onLookUp} style={styles.button} />

      {!!results.length && (
        <View style={styles.results}>
          <Text style={styles.text}>Results</Text>
          {results.map((result, i) => (
            <Result key={i} identifier={result.identifier} id={result.id} />
          ))}
        </View>
      )}
    </View>
  );
};

export default Lookup;
