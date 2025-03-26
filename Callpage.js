// CallPage.js
import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Dummy provider data (can be imported from a shared data file)
const providers = [
  
   {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ7qugePJ401xo1gyaU7Dig_7zT-BqRV3RTg&s',
    name: 'Dr. Jenny Duffo',
    specialty: 'Dermatologist Consultation',
    rating: 4.8,
    reviews: 126,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnebrXWR9QrstpZpUegAwb6IAI_dwKc9DEw&s',
    name: 'Dr. Faith Ofon',
    specialty: 'Nutritionist Consultation',
    rating: 4.8,
    reviews: 126,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOlPiKxGsHUY4ZKgMxkhimu14h-3kBCCQpA&s',
    name: 'Dr. Hance Kumbela',
    specialty: 'Dentist Consultation',
    rating: 4.8,
    reviews: 126,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRLPDabrl3TaK7nLCb3O12okoGXa_FbYVVCQ&s',
    name: 'Dr. Fon Conrald',
    specialty: 'Therapist Consultation',
    rating: 4.8,
    reviews: 126,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGCJ7ZqR5kyDCn0BB98BjI4pKGxgPRH2ZVA&s',
    name: 'Dr. Praise Mandy',
    specialty: 'General Consultation',
    rating: 4.8,
    reviews: 126,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqdkdasphZK-zwuyNNhWEfI5DOrzoCV5MnA&s',
    name: 'Dr. Ange Duff',
    specialty: 'Gyneacologist Consultation',
    rating: 4.8,
    reviews: 126,
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQu2jVKMNqE7lFiDeudbzLg7ES6TMZkjdKA&s',
    name: 'Dr. Jean Paul',
    specialty: 'Dermatologist Consultation',
    rating: 4.8,
    reviews: 126,
  },
  // … add more providers as needed
];

const CallPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {providers.map((provider, index) => (
          <CallCard
            key={index}
            provider={provider}
            onCallPress={() => navigation.navigate('VideoCall', { provider })}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const CallCard = ({ provider, onCallPress }) => (
  <View style={styles.callCard}>
    <Image source={{ uri: provider.image }} style={styles.providerImage} />
    <View style={styles.providerInfo}>
      <Text style={styles.providerName}>{provider.name}</Text>
      <Text style={styles.specialty}>{provider.specialty}</Text>
    </View>
    <TouchableOpacity onPress={onCallPress} style={styles.callButton}>
      <Icon name="call" size={24} color="green" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  scrollContainer: { padding: 16 },
  callCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    elevation: 1
  },
  providerImage: { width: 60, height: 60, borderRadius: 30 },
  providerInfo: { marginLeft: 16, flex: 1 },
  providerName: { fontWeight: 'bold', fontSize: 18 },
  specialty: { fontSize: 14, color: '#666' },
  callButton: { marginLeft: 'auto' },
});

export default CallPage;
