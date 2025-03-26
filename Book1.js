import React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';

const Appointment = () => {
  const navigation = useNavigation();
  const { provider } = useRoute().params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Space above doctor's details */}
        <View style={{ height: 20 }} />

        {/* Doctor Info Box */}
        <View style={styles.doctorCard}>
          <View style={styles.doctorCardContent}>
            <Image
              source={{ uri: provider.image }}
              style={styles.avatar}
              resizeMode="cover"
            />
            <View style={{ height: 10 }} />
            <Text style={styles.doctorName}>{provider.name}</Text>
            <Text style={styles.doctorSpecialty}>{provider.specialty}</Text>
            <View style={{ height: 10 }} />
            <View style={styles.doctorInfoRow}>
              <View style={styles.infoColumn}>
                <Text style={styles.infoLabel}>Patient:</Text>
                <Text style={styles.infoValue}>2100+</Text>
              </View>
              <View style={styles.infoColumn}>
                <Text style={styles.infoLabel}>Experience:</Text>
                <Text style={styles.infoValue}>10 yrs+</Text>
              </View>
              <View style={styles.infoColumn}>
                <Text style={styles.infoLabel}>Address:</Text>
                <Text style={styles.infoValue}>Cameroon</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Increased space between boxes */}
        <View style={{ height: 20 }} />


        {/* Increased space between boxes */}
        <View style={{ height: 20 }} />

        {/* Payment Box */}
        <View style={styles.paymentCard}>
          <Text style={styles.paymentTitle}>Payment</Text>
          <View style={{ height: 10 }} />
          <View style={styles.paymentRow}>
            <View style={styles.paymentColumn}>
              <Text style={styles.paymentLabel}>Consultation fees:</Text>
              <Text style={styles.paymentLabel}>Booking fee:</Text>
              <Text style={styles.paymentLabel}>Promo applied:</Text>
            </View>
            <View style={styles.paymentColumnRight}>
              <Text style={styles.paymentValue}>$5</Text>
              <Text style={styles.paymentValue}>$4</Text>
              <Text style={styles.paymentValue}>-$3</Text>
            </View>
          </View>
        </View>

        {/* Increased space before the button */}
        <View style={{ height: 20 }} />

        {/* Make Payments Button */}
        <TouchableOpacity
          style={styles.paymentButton}
          onPress={() => navigation.navigate('PaymentPage')}
        >
          <Text style={styles.paymentButtonText}>Make Payments</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE', // Colors.grey[200]
  },
  contentContainer: {
    padding: 16,
  },
  doctorCard: {
    backgroundColor: '#346708', // Green primary color
    elevation: 5,
    borderRadius: 10,
    marginVertical: 8,
    padding: 20,
  },
  doctorCardContent: {
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  doctorName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  doctorSpecialty: {
    color: 'rgba(255,255,255,0.7)',
  },
  doctorInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  infoColumn: {
    alignItems: 'center',
    flex: 1,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  infoValue: {
    color: '#FFFFFF',
  },
 
  paymentCard: {
    backgroundColor: '#FFFFFF',
    elevation: 5,
    borderRadius: 10,
    marginVertical: 8,
    padding: 15,
  },
  paymentTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  paymentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentColumn: {
    alignItems: 'flex-start',
  },
  paymentColumnRight: {
    alignItems: 'flex-end',
  },
  paymentLabel: {
    fontWeight: 'bold',
  },
  paymentValue: {
    // Customize if needed
  },
  paymentButton: {
    backgroundColor: '#346708',
    padding: 16,
    minHeight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  paymentButtonText: {
    color: '#FFFFFF',
  },
});
