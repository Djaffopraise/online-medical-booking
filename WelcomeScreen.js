import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>Welcome to G-consultancy</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 16 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  button: { 
    backgroundColor: '#346708', 
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 6 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16 
  },
});

export default WelcomeScreen;
