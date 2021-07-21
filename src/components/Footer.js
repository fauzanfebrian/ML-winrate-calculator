import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {Gap} from '.';

const Footer = ({loading, winRate, winGame}) => {
  return (
    <>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator color="#020202" size="large" />
          <Text style={styles.resultText}>Loading...</Text>
        </View>
      ) : (
        <View style={styles.resultContent}>
          {winGame && (
            <Text style={styles.resultText}>
              You must win {winGame} game again
            </Text>
          )}
          <Gap height={12} />
          {winRate && (
            <Text style={styles.resultText}>
              You'll get around {winRate}% of your win rate
            </Text>
          )}
          {!winRate && !winGame && (
            <Text style={styles.textCenter}>Fill the data correctly</Text>
          )}
        </View>
      )}
    </>
  );
};

export default Footer;

const styles = StyleSheet.create({
  resultText: {
    color: '#f5f5f5',
    fontSize: 18,
  },
  textCenter: {
    color: '#f5f5f5',
    fontSize: 24,
  },
  resultContent: {
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#8D92A3',
    borderRadius: 18,
  },
  loading: {
    position: 'absolute',
    zIndex: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
