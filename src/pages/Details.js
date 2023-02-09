import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Link, useParams } from 'react-router-native';
import Vector from '../components/svg/Vector';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 54,
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '500',
  },
  title: {
    position: 'relative',
  },
  titleText: {
    textAlign: 'center',
  },
  vector: {
    transform: [{ scaleX: -1 }],
    position: 'absolute',
    left: 26,
    bottom: 0,
  },
  details: {
    paddingHorizontal: 18,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 24,
  },
  label: {
    fontSize: 12,
    opacity: 0.7,
  },
  value: {
    marginTop: 8,
  },
  styledValue: {
    backgroundColor: '#24252C',
    padding: 12,
    borderRadius: 8,
  },
  divider: {
    borderBottomColor: '#24252C',
    borderBottomWidth: 2,
    marginTop: 17,
  },
  block: {
    marginTop: 24,
  },
  image: {
    resizeMode: 'contain',
    width: '100%',
    aspectRatio: 1,
    marginTop: 17,
  },
});

const Details = () => {
  const [image, setImage] = useState(null);
  const [attributes, setAttributes] = useState(null);

  const params = useParams();
  const { id, identifier } = params;

  useEffect(() => {
    let isMounted = true;
    if (!id || !identifier) return;

    const fetchDetails = async () => {
      const contractDetails = identifier.substring(0, identifier.indexOf('::'));

      try {
        const response = await fetch(
          `https://gamma.io/api/v1/collections/${contractDetails}/${id}`
        );
        const details = await response.json();

        if (isMounted) {
          setImage(details.data.token_metadata.image_url);
          setAttributes(details.data.nft_token_attributes);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchDetails();

    return () => {
      isMounted = false;
    };
  }, [id, identifier]);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={[styles.text, styles.titleText]}>NFT Details</Text>
        <Link to="/">
          <Vector style={styles.vector} />
        </Link>
      </View>

      {!!image && (
        <Image
          source={{ uri: image.replace('ipfs://', 'https://ipfs.io/ipfs/') }}
          style={styles.image}
        />
      )}

      <View style={styles.details}>
        <Text style={[styles.text, styles.subtitle]}>Item Details</Text>
        <View style={styles.divider} />

        <View style={styles.block}>
          <Text style={[styles.text, styles.label]}>Identifier</Text>
          <Text style={[styles.text, styles.value]}>{identifier}</Text>
        </View>

        <View style={styles.block}>
          <Text style={[styles.text, styles.label]}>ID Value</Text>
          <Text style={[styles.text, styles.value, styles.styledValue]}>{id}</Text>
        </View>

        {!!attributes && !!attributes.length && (
          <>
            <Text style={[styles.text, styles.subtitle]}>Attributes</Text>
            <View style={styles.divider} />

            {attributes.map((attribute, i) => (
              <View key={i} style={styles.block}>
                <Text style={[styles.text, styles.label]}>{attribute.trait_type}</Text>
                <Text style={[styles.text, styles.value, styles.styledValue]}>
                  {attribute.value}
                </Text>
              </View>
            ))}
          </>
        )}
      </View>
    </View>
  );
};

export default Details;
