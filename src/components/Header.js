import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ILLogo} from '../assets';
const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={ILLogo} style={styles.logo} />
      <Text style={styles.headerText}>Win Rate Counter</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  logo: {height: 50, width: 50},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#020202',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerText: {
    color: '#f5f5f5',
    fontSize: 22,
    marginLeft: 8,
  },
});
