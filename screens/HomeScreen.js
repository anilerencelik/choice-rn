import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, ScrollView } from 'react-native';
import MasonryItem from '../components/MasonryItem';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import axios from 'axios';
import MasonryList from '@react-native-seoul/masonry-list';


export default function App() {
  const { logout } = useContext(AuthContext);

  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    try {
      const response = await fetch('http://10.100.0.11:5000/api/post/', {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      const json = await response.json();
      setPosts(json ? json : []);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPosts()
  }, []);



  const renderItem = ({ item }) => {
    return <MasonryItem item={item} key={item._id} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <MasonryList
        // ListFooterComponent={<Text>Selam</Text>}
        contentContainerStyle={{
          paddingHorizontal: 24,
          alignSelf: 'stretch',
        }}
        numColumns={1}
        data={posts}
        renderItem={renderItem}
        style={{ padding: 0, marginLeft: -20, marginRight: -20 }}
      />
      <FormButton buttonTitle='test' onPress={() => getPosts()} />
      <FormButton buttonTitle='Logout' onPress={() => console.log(logout())} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 0,
    padding: 0
  }
});