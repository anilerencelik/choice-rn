import React, { useMemo } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimentions';

const FormInput = ({ item }) => {
  // const randomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <View key={item.id} style={styles.outerView}>
      <View style={styles.innerView}>
        {item.medias ? item.medias.map((mediaUrl) => {
          return (
            <Image
              source={{ uri: mediaUrl }}
              style={styles.images}
              resizeMode="cover"
            />
          )
        }) : <></>}
        {/* <Image
          source={{ uri: item.imgURL }}
          style={styles.images}
          resizeMode="cover"
        />
        <Image
          source={{ uri: item.imgURL }}
          style={styles.images}
          resizeMode="cover"
        /> */}
      </View>
      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          paddingTop: 5,
          marginBottom: 5
        }}
      />
      {/* <Text
        style={{
          marginTop: 8,
        }}
      >
        {item.text}
      </Text><Text
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
  outerView: {
    flex: 1,
    marginHorizontal: 1.5,
    padding: 0,
  },
  innerView: { flexDirection: 'row' },
  images: {
    height: 250,
    alignSelf: 'stretch',
    alignContent: 'stretch',
    alignItems: 'stretch',
    marginLeft: 5,
    padding: 0,
    flex: 1
  }
});
