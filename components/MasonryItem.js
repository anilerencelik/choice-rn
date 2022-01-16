import React, { useMemo } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimentions';

const FormInput = ({ item }) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <View key={item.id} style={{ flex: 1, marginHorizontal: 1.5, padding: 0 }}>
      <Image
        source={{ uri: item.imgURL }}
        style={{
          height: randomBool ? 100 : 200,
          alignSelf: 'stretch',
          alignContent: 'stretch',
          alignItems: 'stretch',
          margin: 0,
          padding: 0
        }}
        resizeMode="cover"
      />
      {/* <Text
        style={{
          marginTop: 8,
        }}
      >
        {item.text}
      </Text> */}
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  masonary: {
    margin: 0,
    padding: 0,
    width: '100%',
    height: windowHeight,
  },
  item: {
    padding: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  }
});
