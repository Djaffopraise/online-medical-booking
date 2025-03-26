import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const AdminLogin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Admin Login</Text>
        {/* Add your admin login form here */}
      </View>
    </SafeAreaView>
  );
};

export default AdminLogin;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  content: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
});
