import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const PaymentPage = ({ navigation }) => {
  const handlePaymentMethodSelect = (paymentMethod) => {
    navigation.navigate('PaymentInput', { paymentMethod });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.paymentScrollContainer}>
        <Text style={styles.paymentHeader}>Various Payment Methods</Text>
        <View style={{ height: 20 }} />
        <Text style={styles.paymentSubHeader}>Mobile Wallets</Text>
        <View style={styles.paymentRow}>
          <PaymentCard
            imageData="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqrgOUsF-NnWsykAzHkfsC8OsgOzETZ2GiOQ&s"
            label="MTN Mobile Money"
            onPressed={() => handlePaymentMethodSelect('MTN Mobile Money')}
          />
          <PaymentCard
            imageData="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZlM3VoplEsYMyaDwdKbK-hbd2AaFgAvaaTw&s"
            label="Orange Money"
            onPressed={() => handlePaymentMethodSelect('Orange Money')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const PaymentCard = ({ imageData, label, onPressed }) => (
  <TouchableOpacity onPress={onPressed} style={styles.paymentCardContainer}>
    <View style={styles.paymentCardImageContainer}>
      {imageData ? (
        <Image source={{ uri: imageData }} style={styles.paymentCardImage} />
      ) : (
        <View style={styles.placeholderImage} />
      )}
    </View>
    <View style={{ height: 8 }} />
    <Text style={styles.paymentCardLabel}>{label}</Text>
  </TouchableOpacity>
);

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
  paymentRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginTop: 20  
  },
  paymentCardContainer: { 
    width: 120, 
    height: 120, 
    alignItems: 'center', 
    justifyContent: 'center',
    margin: 8,
  },
  paymentCardImageContainer: { 
    width: '100%', 
    height: '100%', 
    borderRadius: 8,
    overflow: 'hidden'
  },
  paymentCardImage: { 
    width: '100%', 
    height: '100%' 
  },
  placeholderImage: { 
    width: '100%', 
    height: '100%', 
    backgroundColor: '#eee' 
  },
  paymentCardLabel: { 
    textAlign: 'center', 
    marginTop: 8,
    fontWeight: '600'
  },
});

export default PaymentPage;
