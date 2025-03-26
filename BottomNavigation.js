import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './HomePage';       // Your HomePage file
import Doctors from './Doctors';
import BookPage from './BookPage';         // Your BookPage file // The Appointment screen we just defined
import Chatbot from './Chatbot';   // Your PaymentPage file
import Callpage from './Callpage';         // Your Contact screen
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#346708',
        tabBarInactiveTintColor: '#000',
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="home" size={24} color={focused ? '#346708' : '#000'} />
          ),
        }}
      />
      <Tab.Screen
        name="Doctors"
        component={Doctors}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="boy" size={24} color={focused ? '#346708' : '#000'} />
          ),
        }}
      />
      <Tab.Screen
        name="Book"
        component={BookPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="book" size={24} color={focused ? '#346708' : '#000'} />
          ),
        }}
      />
      
      <Tab.Screen
        name="Chatbot"
        component={Chatbot}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="message" size={24} color={focused ? '#346708' : '#000'} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Callpage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon name="phone" size={24} color={focused ? '#346708' : '#000'} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
