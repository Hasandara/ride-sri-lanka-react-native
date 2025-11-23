import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen (Demo)</Text>

      <Button title="Go to Search" onPress={() => navigation.navigate('Search')} />
      <View style={{ height: 16 }} />

      <Button title="View Vehicle Details" onPress={() => navigation.navigate('Details')} />
      <View style={{ height: 16 }} />

      <Button title="Post a Vehicle" onPress={() => navigation.navigate('Post')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20 }
});
