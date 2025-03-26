import React from 'react';
import { SafeAreaView, ScrollView, Text, Image, StyleSheet } from 'react-native';

const LifestyleDetail = ({ route }) => {
  const { post } = route.params; // Retrieve post data passed from FeedScreen

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Post Image */}
        <Image source={{ uri: post.image }} style={styles.image} resizeMode="cover" />
        {/* Title and Author Info */}
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.author}>By {post.author} on {post.date}</Text>

        {/* Detailed Sections */}
        <Text style={styles.sectionTitle}>Overview</Text>
        <Text style={styles.content}>
          Living a healthy lifestyle encompasses more than just physical activity or diet—it's a holistic approach 
          that includes mental well-being, stress management, and a balanced work-life routine.
        </Text>

        <Text style={styles.sectionTitle}>Daily Tips</Text>
        <Text style={styles.content}>
          • Eat a balanced diet rich in fruits, vegetables, lean proteins, and whole grains.
        </Text>
        <Text style={styles.content}>
          • Stay hydrated throughout the day.
        </Text>
        <Text style={styles.content}>
          • Engage in regular physical activities such as walking, yoga, or gym workouts.
        </Text>
        <Text style={styles.content}>
          • Ensure you get 7-9 hours of quality sleep each night.
        </Text>

        <Text style={styles.sectionTitle}>Recommended Practices</Text>
        <Text style={styles.content}>
          Incorporate mindfulness practices such as meditation or journaling to reduce stress. Regular health check-ups 
          and continuous learning about wellness trends can also contribute to a better lifestyle.
        </Text>

        <Text style={styles.additionalContent}>
          For further details, consider consulting health professionals or exploring online wellness courses and communities.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LifestyleDetail;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  contentContainer: { padding: 16 },
  image: { width: '100%', height: 250, borderRadius: 10, marginBottom: 16 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#28a745', marginBottom: 4 },
  author: { fontSize: 14, color: '#888', marginBottom: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 16, marginBottom: 8 },
  content: { fontSize: 16, color: '#333', lineHeight: 24, marginBottom: 8 },
  additionalContent: { fontSize: 16, color: '#555', lineHeight: 24, marginTop: 16 },
});
