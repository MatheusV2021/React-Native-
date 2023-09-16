// ImageComponent.js
import React from 'react';
import { Image } from 'react-native';

const ImageComponent = () => {
  return (
    <Image
      source={{ uri: 'https://i.pinimg.com/originals/81/22/4f/81224f88af576e55cef077d80510052d.png' }}
      style={{ width: 200, height: 200 }}
    />
  );
};

export default ImageComponent;
