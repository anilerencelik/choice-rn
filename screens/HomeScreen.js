import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const HomeScreen = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.postContainer}>
        <Text style={styles.text}>Welcome </Text>
        <Text style={styles.text}>Welcome </Text>
        <Text style={styles.text}>Welcome </Text>
        <Text style={styles.text}>Welcome </Text>
        <Text style={styles.text}>Welcome </Text>
        <Text style={styles.text}>Welcome </Text>
        <Text style={styles.text}>Welcome </Text>
        <Text style={styles.text}>Welcome </Text>
        <Text style={styles.text}>Welcome </Text>
        <Text style={styles.text}>Welcome </Text>
      </ScrollView>
      <FormButton buttonTitle='Logout' onPress={() => console.log("logout()")} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    display: 'flex',
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
  },
  postContainer: {
    height: '100%'
  },
  text: {
    fontSize: 20,
    color: 'black',
    height: 70,
    backgroundColor: "blue"

  }
});