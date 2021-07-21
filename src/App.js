/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Content, Header, SplashScreen} from './components';
const App = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);
  return (
    <>
      {splash ? (
        <SplashScreen />
      ) : (
        <View style={styles.page}>
          <Header />
          <ScrollView style={{flex: 5}}>
            <Content />
            <View style={styles.footer}>
              <Text style={styles.textFooter}>Made by fauzan</Text>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#020202'},
  footer: {
    paddingHorizontal: 16,
    backgroundColor: '#020202',
    paddingVertical: 20,
  },
  textFooter: {color: '#f5f5f5', fontSize: 16, textAlign: 'center'},
});

export default App;
