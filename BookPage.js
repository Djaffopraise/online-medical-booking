import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  Animated,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Dummy provider data (the allowed doctors in the system)
const providers = [
  {
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...1w==',
    name: 'Dr. Jenny Duffo',
    specialty: 'Dermatologist Consultation',
    rating: 4.8,
    reviews: 126,
  },
  {
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...1w==',
    name: 'Dr. Faith Ofon',
    specialty: 'Dermatologist Consultation',
    rating: 4.8,
    reviews: 126,
  },
  {
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...1w==',
    name: 'Dr. Hance Kumbela',
    specialty: 'Dermatologist Consultation',
    rating: 4.8,
    reviews: 126,
  },
  {
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...1w==',
    name: 'Dr. Fon Conrald',
    specialty: 'Dermatologist Consultation',
    rating: 4.8,
    reviews: 126,
  },
  {
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...1w==',
    name: 'Dr. Praise Mandy',
    specialty: 'Dermatologist Consultation',
    rating: 4.8,
    reviews: 126,
  },
  {
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...1w==',
    name: 'Dr. Ange Duff',
    specialty: 'Dermatologist Consultation',
    rating: 4.8,
    reviews: 126,
  },
  {
    image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...1w==',
    name: 'Dr. Jean Paul',
    specialty: 'Dermatologist Consultation',
    rating: 4.8,
    reviews: 126,
  },
];

//////////////////////////
// AppointmentCard Component
//////////////////////////

const AppointmentCard = ({ appointment, onDelete }) => {
  // Create an animated opacity value
  const fadeAnim = useRef(new Animated.Value(1)).current;

  // Animate fade-out and then call onDelete callback
  const handleDelete = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      onDelete(appointment.id);
    });
  };

  return (
    <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
      <View style={styles.cardContent}>
        <View style={styles.cardText}>
          <Text style={styles.cardTitle}>{appointment.name}</Text>
          <Text style={styles.cardSubtitle}>{appointment.specialty}</Text>
          <Text style={styles.cardTime}>{appointment.time}</Text>
        </View>
        <TouchableOpacity onPress={handleDelete}>
          <Icon name="delete" size={24} color="#346708" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

//////////////////////////
// AppointmentScreen Component
//////////////////////////

const AppointmentScreen = () => {
  // Sample appointments data; IDs are strings
  const [appointments, setAppointments] = useState([
    {
      id: '1',
      name: "Dr. Jenny Duffo",
      specialty: "Dermatologist Consultation",
      time: "8:00 - 8:45 am",
    },
    // You may have initial appointments that are allowed
  ]);

  // State to control modal visibility for adding an appointment
  const [modalVisible, setModalVisible] = useState(false);
  // State to hold new appointment input values
  const [newAppointment, setNewAppointment] = useState({
    name: '',
    specialty: '',
    time: '',
  });

  // Allowed doctors names from providers data
  const allowedDoctors = providers.map((doc) => doc.name);

  // Add a new appointment if the doctor is allowed
  const addAppointment = () => {
    if (
      newAppointment.name.trim() &&
      newAppointment.specialty.trim() &&
      newAppointment.time.trim()
    ) {
      if (!allowedDoctors.includes(newAppointment.name)) {
        Alert.alert('Error', 'This doctor is not available in the system.');
        return;
      }
      setAppointments([
        ...appointments,
        { id: Date.now().toString(), ...newAppointment },
      ]);
      setNewAppointment({ name: '', specialty: '', time: '' });
      setModalVisible(false);
    }
  };

  // Delete an appointment by ID
  const deleteAppointment = (id) => {
    setAppointments(appointments.filter((app) => app.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Appointment</Text>
      </View>

      {/* Body */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.padding}>
          {/* List appointments without sections for today/upcoming/cancelled */}          
          {appointments.map((app) => (
            <AppointmentCard key={app.id} appointment={app} onDelete={deleteAppointment} />
          ))}
          <View style={{ flex: 1 }} />
        </View>
      </ScrollView>

      {/* Floating Action Button for adding appointment */}
      <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
        <Icon name="add" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Modal for adding a new appointment */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Appointment</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={newAppointment.name}
              onChangeText={(text) => setNewAppointment({ ...newAppointment, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Specialty"
              value={newAppointment.specialty}
              onChangeText={(text) => setNewAppointment({ ...newAppointment, specialty: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Time"
              value={newAppointment.time}
              onChangeText={(text) => setNewAppointment({ ...newAppointment, time: text })}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={addAppointment}>
                <Text style={styles.modalButtonText}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, { backgroundColor: '#ccc' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

//////////////////////////
// AppointmentApp (Root Component)
//////////////////////////

const AppointmentApp = () => {
  return <AppointmentScreen />;
};

export default AppointmentApp;

//////////////////////////
// Styles
//////////////////////////

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appBar: {
    height: 56,
    backgroundColor: '#346708',
    justifyContent: 'center',
    paddingHorizontal: 16,
    elevation: 4,
  },
  appBarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentContainer: {
    flexGrow: 1,
  },
  padding: {
    padding: 16,
    flex: 1,
  },
  // Removed stats and section titles for Today/Upcoming/Cancelled
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
    marginVertical: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#757575',
  },
  cardTime: {
    fontSize: 14,
    color: '#346708',
    marginTop: 4,
  },
  fab: {
    backgroundColor: '#346708',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
    right: 16,
    elevation: 6,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    marginBottom: 12,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: '#346708',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
