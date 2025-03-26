import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Onboarding screens
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

// Other screens
import BottomNavigation from './BottomNavigation';
import DoctorProfile from './Appointment';
import Book1 from './Book1';
import PaymentPage from './PaymentPage';
import BookPage from './BookPage';

// Feed and Detail Screens
import FeedScreen, { FeedProvider } from './HomePage';
import LifestyleDetail from './LifestyleDetail';
import SportsDetail from './SportsDetail';
import MentalHealthDetail from './MentalHealthDetail';
import AdminLogin from './AdminLogin';
import Logout from './Logout';

// Payment Flow Screens (Make sure these components exist or are imported)
import PaymentInputPage from './PaymentInputPage';
import PaymentSuccessPage from './PaymentSuccessPage';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#346708" />
        <Text style={styles.title}>Loading...</Text>
      </View>
    );
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: true }}>
        {/* Onboarding Flow */}
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{ title: 'Sign Up' }} 
        />
        {/* Main Application Flow */}
        <Stack.Screen 
          name="Main" 
          component={BottomNavigation} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Doctor" 
          component={DoctorProfile} 
          options={{ title: 'Doctor Profile' }} 
        />
        <Stack.Screen 
          name="Book1" 
          component={Book1} 
          options={{ title: 'Make Payment' }} 
        />
        <Stack.Screen 
          name="PaymentPage" 
          component={PaymentPage} 
          options={{ title: 'Payment' }} 
        />
        <Stack.Screen 
          name="BookPage" 
          component={BookPage} 
          options={{ title: 'Already Booked Appointment' }} 
        />
        {/* Feed and Detail Screens */}
        <Stack.Screen 
          name="Feed"
          options={{ title: 'Feed' }}
        >
          {props => (
            <FeedProvider>
              <FeedScreen {...props} />
            </FeedProvider>
          )}
        </Stack.Screen>
        <Stack.Screen 
          name="LifestyleDetail" 
          component={LifestyleDetail} 
          options={{ title: 'Lifestyle Detail' }} 
        />
        <Stack.Screen 
          name="SportsDetail" 
          component={SportsDetail} 
          options={{ title: 'Sports Detail' }} 
        />
        <Stack.Screen 
          name="MentalHealthDetail" 
          component={MentalHealthDetail} 
          options={{ title: 'Mental Health Detail' }} 
        />
        <Stack.Screen 
          name="AdminLogin" 
          component={AdminLogin} 
          options={{ title: 'Admin Login' }} 
        />
        <Stack.Screen 
          name="Logout" 
          component={Logout} 
          options={{ title: 'Logout' }} 
        />
        {/* Payment Flow Screens */}
        <Stack.Screen 
          name="Payment" 
          component={PaymentPage} 
          options={{ title: 'Payment' }} 
        />
        <Stack.Screen 
          name="PaymentInput" 
          component={PaymentInputPage} 
          options={{ title: 'Payment Input' }} 
        />
        <Stack.Screen 
          name="PaymentSuccess" 
          component={PaymentSuccessPage} 
          options={{ title: 'Payment Success' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
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
});

export default App;
