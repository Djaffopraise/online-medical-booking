import React from 'react';
import { 
  SafeAreaView, 
  ScrollView, 
  View, 
  Text, 
  TextInput, 
  Image, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Dummy provider data – adjust as needed
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
  // ... more providers
];

// Placeholder user avatar image URL – replace with your actual URL or embedded data
const userAvatarUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BvNUt8mqD3qjnDtKzOvXiZx-pp41CovTxA&s';

const HomePage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <View style={styles.appBarContent}>
          <View style={styles.userInfo}>
            {/* Avatar now renders an image inside the green circle */}
            <Image 
              source={{ uri: userAvatarUrl }} 
              style={styles.avatar} 
              accessibilityLabel="User avatar" 
            />
            <View style={styles.greeting}>
              <Text style={styles.greetingText}>Hello, welcome</Text>
              <Text style={styles.userName}>Praise B</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.notificationIcon} accessibilityLabel="Notifications">
            <Icon name="notifications" size={28} color="#0F0F0F" />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#666" style={{ marginRight: 8 }} />
          <TextInput 
            style={styles.searchInput}
            placeholder="Search for services or providers..."
            accessibilityLabel="Search input"
          />
        </View>
        <Text style={styles.servicesTitle}>Available Services</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {providers.map((provider, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('Doctor', { provider })}
              accessibilityLabel={`Provider ${provider.name}, ${provider.specialty}`}
            >
              <View style={styles.card}>
                <Image source={{ uri: provider.image }} style={styles.providerImage} />
                <View style={styles.providerInfo}>
                  <Text style={styles.providerName}>{provider.name}</Text>
                  <Text style={styles.specialty}>{provider.specialty}</Text>
                  <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>⭐ {provider.rating}</Text>
                    <Text style={styles.reviewsText}>({provider.reviews} reviews)</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  appBar: { backgroundColor: '#fff', padding: 16, elevation: 2, marginBottom: 10 },
  appBarContent: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  // Updated avatar style to have a green background and a fixed size, which now wraps the image.
  avatar: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: '#34B233' 
  },
  greeting: { marginLeft: 10 },
  greetingText: { fontSize: 14, color: '#1B1A1A' },
  userName: { fontSize: 16, fontWeight: 'bold', color: '#131313' },
  notificationIcon: { padding: 5 },
  notificationBadge: { position: 'absolute', right: 0, top: 0, width: 10, height: 10, borderRadius: 5, backgroundColor: 'red' },
  body: { padding: 12, flex: 1 },
  searchBar: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#eef1f5', 
    borderRadius: 8, 
    paddingHorizontal: 10, 
    marginBottom: 12, 
    height: 40 
  },
  searchInput: { flex: 1, fontSize: 16, color: '#333' },
  servicesTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  card: { 
    flexDirection: 'row', 
    padding: 16, 
    marginVertical: 8, 
    backgroundColor: '#fff', 
    borderRadius: 8, 
    elevation: 1 
  },
  providerImage: { width: 60, height: 60, borderRadius: 30 },
  providerInfo: { marginLeft: 16, flex: 1 },
  providerName: { fontWeight: 'bold', fontSize: 18 },
  specialty: { fontSize: 14, color: '#666' },
  ratingContainer: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  ratingText: { marginRight: 4 },
  reviewsText: { marginLeft: 4 },
});

export default HomePage;


