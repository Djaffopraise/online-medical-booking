import React, { useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DoctorProfile = () => {
  const navigation = useNavigation();
  const { provider } = useRoute().params;

  useEffect(() => {
    navigation.setOptions({ title: provider.name });
  }, [navigation, provider]);

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icon 
          key={i}
          name={i < Math.floor(rating) ? 'star' : 'star-border'}
          size={18}
          color="yellow"
        />
      );
    }
    return <View style={styles.ratingRow}>{stars}</View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.doctorDetailsCard}>
          <Image source={{ uri: provider.image }} style={styles.avatarLarge} />
          <Text style={styles.doctorName}>{provider.name}</Text>
          {renderRatingStars(provider.rating)}
          <View style={{ marginTop: 16 }}>
            <View style={styles.infoRow}>
              <View style={styles.infoColumn}>
                <Text style={styles.infoLabel}>Patients</Text>
                <Text style={styles.infoValue}>2100+</Text>
              </View>
              <View style={styles.verticalDivider} />
              <View style={styles.infoColumn}>
                <Text style={styles.infoLabel}>Experience</Text>
                <Text style={styles.infoValue}>10 yrs+</Text>
              </View>
              <View style={styles.verticalDivider} />
              <View style={styles.infoColumn}>
                <Text style={styles.infoLabel}>Address</Text>
                <Text style={styles.infoValue}>Cameroon</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTextBold}>Available days: Mondays, Saturdays</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTextBold}>Time:</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.timeSlotsContainer}>
            {['8 a.m. to 9 a.m.', '5 p.m. to 6 p.m.', '6 p.m. to 9 p.m.'].map((time, index) => (
              <View key={index} style={styles.timeSlotBox}>
                <Text style={styles.timeSlotText}>{time}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTextBold}>Details:</Text>
          <Text style={styles.detailsText}>
            {provider.name} is a highly experienced specialist.
            With over 10 years of experience and a degree from a top institution,
            he is committed to patient care. Detailed information about {provider.name} goes here.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.detailsText}>Payment: $200 per session</Text>
        </View>
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => navigation.navigate('Book1', { provider })}
        >
          <Text style={styles.bookButtonText}>Book An Appointment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  contentContainer: { padding: 16 },
  doctorDetailsCard: { backgroundColor: '#fff', elevation: 4, borderRadius: 12, padding: 50, alignItems: 'center', marginBottom: 16 },
  avatarLarge: { width: 80, height: 80, borderRadius: 40 },
  doctorName: { fontSize: 24, fontWeight: 'bold', marginTop: 8 },
  ratingRow: { flexDirection: 'row', marginTop: 4 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 16 },
  infoColumn: { alignItems: 'center' },
  infoLabel: { fontWeight: 'bold', fontSize: 14 },
  infoValue: { fontSize: 14 },
  verticalDivider: { width: 1, height: 40, backgroundColor: 'grey', marginHorizontal: 10 },
  section: { marginVertical: 16 },
  sectionTextBold: { fontWeight: 'bold', fontSize: 16 },
  detailsText: { fontSize: 16, marginTop: 8, lineHeight: 22 },
  timeSlotsContainer: { marginTop: 8 },
  timeSlotBox: { paddingVertical: 8, paddingHorizontal: 12, backgroundColor: '#346708', borderRadius: 8, marginRight: 8 },
  timeSlotText: { color: '#fff', fontSize: 14 },
  bookButton: { backgroundColor: '#346708', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 4, marginTop: 32, alignSelf: 'center' },
  bookButtonText: { color: '#fff', fontSize: 16 },
});

export default DoctorProfile;
