import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PostScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Post a Vehicle (Demo)</Text>

      <Text>Vehicle Type</Text>
      <Text>Image Upload</Text>
      <Text>Description</Text>
      <Text>With / Without Driver</Text>
      <Text>Location</Text>
      <Text>Contact Number</Text>

      <View style={{ height: 20 }} />
      <Button title="Submit (Demo)" onPress={() => alert('Submitted')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20 }
});
