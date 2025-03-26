import React from 'react';
import { SafeAreaView, ScrollView, Text, Image, StyleSheet } from 'react-native';

const SportsDetail = ({ route }) => {
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
        <Text style={styles.sectionTitle}>Benefits of Regular Sports Activity</Text>
        <Text style={styles.content}>
          Participating in sports improves cardiovascular health, boosts strength and endurance, enhances coordination,
          and also promotes mental well-being through the release of endorphins.
        </Text>

        <Text style={styles.sectionTitle}>Training Tips</Text>
        <Text style={styles.content}>
          • Warm up thoroughly before engaging in any physical activity.
        </Text>
        <Text style={styles.content}>
          • Incorporate a mix of strength training, cardio, and flexibility exercises.
        </Text>
        <Text style={styles.content}>
          • Maintain proper form and technique to prevent injuries.
        </Text>

        <Text style={styles.sectionTitle}>Injury Prevention & Recovery</Text>
        <Text style={styles.content}>
          Focus on proper recovery by including rest days, hydration, and post-workout stretching. Listening to your body 
          can help prevent overtraining and injuries.
        </Text>

        <Text style={styles.additionalContent}>
          For more in-depth advice, consider joining a sports club or consulting with a professional trainer.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SportsDetail;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  contentContainer: { padding: 16 },
  image: { width: '100%', height: 250, borderRadius: 10, marginBottom: 16 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#007bff', marginBottom: 4 },
  author: { fontSize: 14, color: '#888', marginBottom: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 16, marginBottom: 8 },
  content: { fontSize: 16, color: '#333', lineHeight: 24, marginBottom: 8 },
  additionalContent: { fontSize: 16, color: '#555', lineHeight: 24, marginTop: 16 },
});
