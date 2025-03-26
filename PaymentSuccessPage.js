import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PaymentSuccessPage = ({ navigation, route }) => {
  const { paymentMethod, phoneNumber, amount } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.successContainer}>
        <Text style={styles.successText}>Congratulations!</Text>
        <Text style={styles.successSubText}>
          Your payment of {amount} via {paymentMethod} from {phoneNumber} was successful.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f9f9f9',
    padding: 16 
  },
  successContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  successText: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 16 
  },
  successSubText: { 
    fontSize: 18, 
    textAlign: 'center', 
    marginBottom: 24 
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

export default PaymentSuccessPage;
