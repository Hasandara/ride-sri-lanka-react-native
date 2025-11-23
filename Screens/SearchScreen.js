import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SearchScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search & Filter Screen (Demo)</Text>
      <Button title="Open Vehicle Details" onPress={() => navigation.navigate('Details')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: '700', marginBottom: 20 }
});
