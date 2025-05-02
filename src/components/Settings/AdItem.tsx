import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const AdItem = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/setting-ad.png')}
        style={styles.image}
        resizeMode="stretch"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: '1%',
  },
  image: {
    width: '100%',
    height: windowWidth * 0.2,
    borderRadius: 6,
  },
});

export default AdItem;
