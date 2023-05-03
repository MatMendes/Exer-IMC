import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface InputProps {
  placeholder: string;
  keyboardType?: 'default' | 'numeric' | 'phone-pad';
  value: string;
  onChangeText: (value: string) => void;
}

export const Input = ({ placeholder, keyboardType = 'default', value, onChangeText }: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      keyboardType={keyboardType}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    borderWidth: 2,
    borderColor: '#0000ff',
    borderRadius: 7,
    padding: 10,
    marginBottom: 20,
  },
});