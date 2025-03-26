import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const PaymentInputPage = ({ navigation, route }) => {
  const { paymentMethod } = route.params;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleAcceptPayment = () => {
    if (!phoneNumber || !amount) {
      Alert.alert('Error', 'Please enter both phone number and amount');
      return;
    }
    navigation.navigate('PaymentSuccess', { paymentMethod, phoneNumber, amount });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.paymentScrollContainer}>
        <Text style={styles.paymentHeader}>Payment Input</Text>
        <Text style={styles.paymentSubHeader}>{paymentMethod}</Text>
        <View style={{ height: 20 }} />
        <Text style={styles.inputLabel}>Phone Number</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <View style={{ height: 16 }} />
        <Text style={styles.inputLabel}>Amount</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <View style={{ height: 24 }} />
        <TouchableOpacity style={styles.button} onPress={handleAcceptPayment}>
          <Text style={styles.buttonText}>Accept Payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f9f9f9',
    padding: 16 
  },
  paymentScrollContainer: { 
    padding: 16 
  },
  paymentHeader: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center'
  },
  paymentSubHeader: { 
    fontSize: 18, 
    fontWeight: '600', 
    textAlign: 'center', 
    marginTop: 8
  },
  inputLabel: { 
    fontSize: 16, 
    marginBottom: 4 
  },
  inputField: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    padding: 12, 
    marginBottom: 12 
  },
  button: { 
    backgroundColor: '#346708', 
    paddingVertical: 12, 
    paddingHorizontal: 20, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 16 
  },
  buttonText: { 
    color: '#fff', 
    fontSize: 16 
  },
});

export default PaymentInputPage;
