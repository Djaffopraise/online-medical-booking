import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

// A simple function that returns answers based on keywords
const getBotAnswer = (question) => {
  const q = question.toLowerCase();
  if (q.includes('hello') || q.includes('hi')) {
    return "Hello! How can I help you today?";
  } else if (q.includes('fever')) {
    return "For a mild fever, please rest, drink plenty of fluids, and monitor your temperature.";
  } else if (q.includes('headache')) {
    return "For a headache, try to relax and consider a pain reliever if necessary. If it persists, consult your doctor.";
  } else if (q.includes('cough')) {
    return "For a cough, stay hydrated and consider a soothing remedy. If it worsens, please seek medical advice.";
  } else if (q.includes('bye')) {
    return "Goodbye! Take care and feel free to ask if you have more questions.";
  } else {
    return "I'm not sure about that. Please consult a healthcare professional for detailed advice.";
  }
};

const App = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hi,welcome! i am Mediora your personal health assistant. How can I help you today?', sender: 'bot' },
  ]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (!inputText.trim()) return;

    // Add user's message to the chat
    const userMessage = { id: Date.now().toString(), text: inputText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    const question = inputText;
    setInputText('');

    // Simulate bot response after 1 second using our getBotAnswer function
    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: getBotAnswer(question),
        sender: 'bot',
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const renderItem = ({ item }) => {
    const isBot = item.sender === 'bot';
    return (
      <View style={[styles.messageBubble, isBot ? styles.botBubble : styles.userBubble]}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding', android: undefined })}
        style={styles.innerContainer}
      >
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.chatContainer}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your question..."
            placeholderTextColor="#999"
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // clean white background
  },
  innerContainer: {
    flex: 1,
  },
  chatContainer: {
    padding: 10,
    paddingBottom: 20,
  },
  messageBubble: {
    marginVertical: 5,
    padding: 12,
    borderRadius: 10,
    maxWidth: '80%',
    borderWidth: 1,
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#e8f5e9', // light green for bot messages
    borderColor: '#28a745', // green border
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    borderColor: '#28a745',
  },
  messageText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#28a745',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    color: '#333',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#28a745', // green send button
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
