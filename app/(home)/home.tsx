import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const Home: React.FC = () => {


  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Text>This is the content of the Home component.</Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Home;
