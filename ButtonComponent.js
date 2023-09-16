import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonComponent = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Pressione</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'ghostwhite',
    padding: 10,
    borderRadius: 10, // Arredonde as bordas ajustando esse valor
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
});

export default ButtonComponent;
