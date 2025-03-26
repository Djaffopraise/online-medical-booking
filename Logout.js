import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const Logout = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Logout</Text>
        {/* Implement your logout logic here */}
      </View>
    </SafeAreaView>
  );
};

export default Logout;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
});
