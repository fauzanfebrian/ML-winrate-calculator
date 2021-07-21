import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

const NumberInput = ({value, onChangeText, label, isPercent}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.content}>
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          value={value}
          onChangeText={onChangeText}
        />
        {isPercent && <Text style={styles.percent}>%</Text>}
      </View>
    </View>
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#020202',
    borderWidth: 1,
    borderRadius: 12,
    padding: 8,
    fontSize: 18,
    color: '#000000',
    flex: 1,
  },
  label: {
    marginBottom: 8,
    color: '#020202',
    fontSize: 14,
  },
  content: {
    flexDirection: 'row',
    position: 'relative',
  },
  percent: {
    position: 'absolute',
    width: 50,
    height: '100%',
    backgroundColor: '#8D92A3',
    right: 0,
    color: '#f5f5f5',
    fontSize: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
});
