import React, { useState, createContext, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Create a context for the feed data
const FeedContext = createContext();

// Provider component that supplies the feed data
const FeedProvider = ({ children }) => {
  const FEED_DATA = [
    {
      id: '1',
      author: 'G-consultancy',
      date: '10 Mar 2025',
      title: 'Book an appointment',
      content: 'Get in touch with doctors of different specialities',
      subtitle: '',
      image:
        'https://i.pinimg.com/736x/b8/b8/b9/b8b8b9649e255265bb361d778495e8c0.jpg',
      targetPage: 'Doctors',
    },
    {
      id: '2',
      author: 'G-consultancy',
      date: '10 Mar 2025',
      title: 'My lifestyle',
      content: 'Eat healthy and stay healthy',
      subtitle: '',
      image:
        'https://i.pinimg.com/736x/78/c4/33/78c433eb22a7fb53e31df6150ca867b2.jpg',
      targetPage: 'LifestyleDetail',
    },
    {
      id: '2',
      author: 'G-consultancy',
      date: '10 Mar 2025',
      title: 'Sports',
      content: 'Make sports regularly to stay in good shape',
      subtitle: '',
      image:
        'https://i.pinimg.com/736x/af/e0/f4/afe0f415ce65fd875f635d33409eeb6b.jpg',
      targetPage: 'SportsDetail',
    },
    {
      id: '3',
      author: 'G-consultancy',
      date: '9 Mar 2025',
      title: 'What you need to know!',
      content: 'Your mental health is very important',
      subtitle: 'Your mental health should be your priority',
      image:
        'https://i.pinimg.com/474x/65/3e/b4/653eb4a06bafb8ffc7d04a5d3b53a1da.jpg',
      targetPage: 'MentalHealthDetail',
    },
  ];

  return (
    <FeedContext.Provider value={FEED_DATA}>
      {children}
    </FeedContext.Provider>
  );
};

const App = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const feedData = useContext(FeedContext);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  const handleAdminLogin = () => {
    navigation.navigate('AdminLogin');
    setMenuVisible(false);
  };

  const handleLogout = () => {
    navigation.navigate('Logout');
    setMenuVisible(false);
  };

  const renderPost = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.targetPage, { post: item })}
      >
        <View style={styles.postContainer}>
          {/* Author and Date */}
          <View style={styles.headerRow}>
            <Text style={styles.authorText}>{item.author}</Text>
            <Text style={styles.dateText}>{item.date}</Text>
          </View>

          {/* Image Banner */}
          <Image
            source={{ uri: item.image }}
            style={styles.bannerImage}
            resizeMode="cover"
          />

          {/* Title / Content */}
          <Text style={styles.titleText}>{item.title}</Text>
          {item.subtitle ? (
            <Text style={styles.subtitleText}>{item.subtitle}</Text>
          ) : null}
          <Text style={styles.contentText}>{item.content}</Text>

          {/* Placeholder for reactions/comments/views row */}
          <View style={styles.interactionRow}>
            <TouchableOpacity style={styles.interactionButton}>
              <Text style={styles.interactionText}>Reactions</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interactionButton}>
              <Text style={styles.interactionText}>Comments</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interactionButton}>
              <Text style={styles.interactionText}>Views</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // Dummy user avatar image URL
  const userAvatarUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BvNUt8mqD3qjnDtKzOvXiZx-pp41CovTxA&s';

  return (
    <SafeAreaView style={styles.container}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <View style={styles.appBarContent}>
          <View style={styles.userInfo}>
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
          <TouchableOpacity
            style={styles.menuIcon}
            onPress={handleMenuToggle}
            accessibilityLabel="Menu"
          >
            <Icon name="menu" size={28} color="#0F0F0F" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Menu Modal */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setMenuVisible(false)}
        >
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={handleAdminLogin}>
              <Text style={styles.menuItemText}>Admin Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
              <Text style={styles.menuItemText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Feed */}
      <FlatList
        data={feedData}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

// Wrap the App component with the FeedProvider
export default function RootApp(props) {
  return (
    <FeedProvider>
      <App {...props} />
    </FeedProvider>
  );
}

// ----- STYLES -----
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // AppBar styles
  appBar: {
    backgroundColor: '#fff',
    padding: 16,
    elevation: 2,
    marginBottom: 10,
  },
  appBarContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#34B233',
  },
  greeting: {
    marginLeft: 10,
  },
  greetingText: {
    fontSize: 14,
    color: '#1B1A1A',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#131313',
  },
  menuIcon: {
    padding: 5,
  },
  // Modal styles for the menu
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  menuContainer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    marginTop: 60,
    marginRight: 16,
    paddingVertical: 10,
    width: 150,
    elevation: 100,
  },
  menuItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  // Feed styles
  listContent: {
    padding: 10,
  },
  postContainer: {
    backgroundColor: '#f8f8f8',
    marginBottom: 10,
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#dcdcdc',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  authorText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  dateText: {
    fontSize: 14,
    color: '#777',
  },
  bannerImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 8,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#28a745',
    marginBottom: 4,
  },
  subtitleText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  contentText: {
    fontSize: 14,
    color: '#444',
    marginBottom: 10,
  },
  interactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#eaeaea',
    paddingTop: 8,
  },
  interactionButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  interactionText: {
    fontSize: 14,
    color: '#28a745',
    fontWeight: '600',
  },
});
