import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILLogo} from '../assets';

const SplashScreen = () => {
  return (
    <View style={styles.wrapper}>
      <Image source={ILLogo} style={styles.logo} />
      <Text style={styles.text}>Win Rate Counter</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#020202',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {width: 100, height: 100},
  text: {color: '#B58958', fontSize: 24, marginTop: 12},
});
