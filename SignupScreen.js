import React, { useState } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SignupPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [obscurePassword, setObscurePassword] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Title */}
        <Text style={styles.title}>Create an account</Text>
        <View style={{ height: 20 }} />

        {/* Username Field */}
        <TextInput
          style={styles.input}
          placeholder="Enter Your Username"
          value={username}
          onChangeText={setUsername}
        />
        <View style={{ height: 10 }} />

        {/* Email Field */}
        <TextInput
          style={styles.input}
          placeholder="Enter Your Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={{ height: 10 }} />

        {/* Phone Number Field */}
        <TextInput
          style={styles.input}
          placeholder="Enter Your Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
        <View style={{ height: 10 }} />

        {/* Password Field */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { paddingRight: 40 }]}
            placeholder="Enter Your Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={obscurePassword}
          />
          <TouchableOpacity 
            style={styles.suffixIcon}
            onPress={() => setObscurePassword(!obscurePassword)}
          >
            <Icon 
              name={obscurePassword ? 'visibility-off' : 'visibility'} 
              size={24} 
              color="#666" 
            />
          </TouchableOpacity>
        </View>
        <View style={{ height: 20 }} />

        {/* Sign Up Button */}
        <TouchableOpacity 
          style={styles.signupButton} 
          onPress={() => {navigation.navigate('Main')}}
        >
          <Text style={styles.signupButtonText}>sign up</Text>
        </TouchableOpacity >
        <View style={{ height: 10 }} />

        {/* Links: Login & Home */}        
        <View style={styles.linkContainer}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.linkText}>Already have an account? Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            
          >
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff' 
  },
  innerContainer: { 
    flex: 1, 
    padding: 20, 
    justifyContent: 'center' 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    borderRadius: 8, 
    padding: 12, 
    fontSize: 16 
  },
  passwordContainer: {
    position: 'relative',
  },
  suffixIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  signupButton: { 
    width: '100%', 
    backgroundColor: '#346708', 
    paddingVertical: 16, 
    borderRadius: 8, 
    alignItems: 'center' 
  },
  signupButtonText: { 
    fontSize: 18, 
    color: '#fff' 
  },
  linkContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  linkText: {
    color: '#e53935', 
    fontWeight: 'bold', 
    fontSize: 16,
    marginVertical: 4,
  },
});

export default SignupPage;
