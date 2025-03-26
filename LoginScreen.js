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

const LoginPage = ({ navigation }) => {
  const [obscurePassword, setObscurePassword] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Welcome Text */}
        <Text style={styles.welcomeText}>Hi, Welcome Back!</Text>
        <View style={{ height: 32 }} />

        {/* Email Field */}
        <TextInput
          style={styles.input}
          placeholder="example@gmail.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <View style={{ height: 16 }} />

        {/* Password Field */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
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
              name={obscurePassword ? 'visibility' : 'visibility-off'} 
              size={24} 
              color="#666" 
            />
          </TouchableOpacity>
        </View>
        <View style={{ height: 8 }} />

        {/* Remember Me & (optionally) Forgot Password */}
        <View style={styles.row}>
          <TouchableOpacity 
            style={styles.row}
            onPress={() => setRememberMe(!rememberMe)}
          >
            <Icon 
              name={rememberMe ? 'check-box' : 'check-box-outline-blank'} 
              size={24} 
              color="#346708" 
            />
            <Text style={styles.rememberText}>Remember Me</Text>
          </TouchableOpacity>
          {/* You can add a "Forgot password?" link here if needed */}
        </View>
        <View style={{ height: 16 }} />

        {/* Login Button */}
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={{ height: 16 }} />

        {/* Signup Link */}
        <View style={styles.center}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupText}>Sign up</Text>
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
    padding: 24, 
    justifyContent: 'center',
    color:'black'
  },
  welcomeText: { 
    fontSize: 24, 
    fontWeight: 'bold' 
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
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between' 
  },
  rememberText: { 
    marginLeft: 8, 
    fontSize: 16 
  },
  loginButton: { 
    width: '100%', 
    backgroundColor: '#346708', 
    paddingVertical: 16, 
    borderRadius: 8, 
    alignItems: 'center' 
  },
  loginButtonText: { 
    fontSize: 18, 
    color: '#000' 
  },
  center: { 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  signupText: { 
    color: '#e53935', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
});

export default LoginPage;
