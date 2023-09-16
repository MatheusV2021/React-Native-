import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageComponent from './ImageComponent';
import ButtonComponent from './ButtonComponent';

export default function App() {
  const handlePress = () => {
    
    alert('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <ImageComponent />
      <ButtonComponent onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'indigo', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});
