import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BookAppointmentButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Book An Appointment</Text>
  </TouchableOpacity>
);

const AppointmentPage = ({ navigation, route }) => {
  const { provider } = route.params;
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const currentDate = new Date();

  useEffect(() => {
    navigation.setOptions({ title: provider.name });
  }, [navigation, provider]);

  // Helper to render rating stars
  const buildRatingStars = (rating) => {
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

  // Time slots array
  const timeSlots = ['8 a.m. to 9 a.m.', '5 p.m. to 6 p.m.', '6 p.m. to 9 p.m.'];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Doctor’s details card */}
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Image source={{ uri: provider.image }} style={styles.circleAvatar} />
            <View style={{ height: 8 }} />
            <Text style={styles.doctorName}>{provider.name}</Text>
            <View style={{ height: 4 }} />
            {buildRatingStars(provider.rating)}
            <View style={{ height: 16 }} />
            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.boldText}>Patients</Text>
                <View style={{ height: 8 }} />
                <Text>2100+</Text>
              </View>
              <View style={styles.verticalDivider} />
              <View style={styles.column}>
                <Text style={styles.boldText}>Experience</Text>
                <View style={{ height: 8 }} />
                <Text>10 yrs+</Text>
              </View>
              <View style={styles.verticalDivider} />
              <View style={styles.column}>
                <Text style={styles.boldText}>Address</Text>
                <View style={{ height: 8 }} />
                <Text>Cameroon</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.spacer16} />
        <Text style={styles.boldText}>Available days: Mondays, Saturdays</Text>
        <View style={styles.spacer16} />
        <View>
          <Text style={styles.boldText}>Time Slots:</Text>
          <View style={{ height: 4 }} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {timeSlots.map((time, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.timeSlotBox,
                  selectedTimeSlot === time && styles.selectedTimeSlot,
                ]}
                onPress={() => setSelectedTimeSlot(time)}
              >
                <Text style={styles.timeSlotText}>{time}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          {/* Schedule Box showing only current date */}
          <View style={styles.spacer16} />
          <View style={styles.scheduleRow}>
            <View style={styles.scheduleCard}>
              <View style={styles.scheduleCardContent}>
                <Icon name="calendar-today" size={24} color="grey" />
                <View style={{ width: 8 }} />
                <Text style={styles.scheduleText}>
                  Date: {currentDate.toLocaleDateString()}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.spacer16} />
        <View>
          <Text style={styles.boldText}>Details:</Text>
          <View style={{ height: 8 }} />
          <Text>
            {provider.name} is a highly experienced specialist with over 10 years of experience. Detailed information goes here.
          </Text>
        </View>
        <View style={styles.spacer16} />
        <Text>Payment: $200 per session</Text>
        <View style={styles.spacer32} />
        <BookAppointmentButton onPress={() => navigation.navigate('Book1', { provider })} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  contentContainer: { padding: 16 },
  spacer16: { height: 16 },
  spacer32: { height: 32 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    padding: 50,
  },
  cardContent: { alignItems: 'center' },
  circleAvatar: { width: 80, height: 80, borderRadius: 40 },
  doctorName: { fontSize: 24, fontWeight: 'bold' },
  ratingRow: { flexDirection: 'row' },
  row: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center' },
  column: { alignItems: 'center' },
  boldText: { fontWeight: 'bold' },
  verticalDivider: { width: 1, height: 40, backgroundColor: 'grey', marginHorizontal: 8 },
  timeSlotBox: { 
    paddingVertical: 8, 
    paddingHorizontal: 12, 
    backgroundColor: '#346708', 
    borderRadius: 8, 
    marginRight: 8 
  },
  selectedTimeSlot: {
    backgroundColor: '#004d00', // darker shade indicates selection
    borderWidth: 2,
    borderColor: '#fff',
  },
  timeSlotText: { color: '#fff', fontSize: 14 },
  scheduleRow: { flexDirection: 'row', marginTop: 16 },
  scheduleCard: { flex: 1, backgroundColor: '#f0f0f0', borderRadius: 8, padding: 12 },
  scheduleCardContent: { flexDirection: 'row', alignItems: 'center' },
  scheduleText: { fontSize: 16, color: '#333' },
  button: { backgroundColor: '#346708', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontSize: 16 },
});

export default AppointmentPage;
