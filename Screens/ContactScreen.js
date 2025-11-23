import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ContactScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Owner Contact Details (Demo)</Text>

      <Text>Name: Sample Owner</Text>
      <Text>Phone: 077 123 4567</Text>
      <Text>Pickup Location: Colombo</Text>

      <View style={{ height: 20 }} />
      <Button title="Back to Details" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20 }
});
