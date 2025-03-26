import React from 'react';
import { SafeAreaView, ScrollView, Text, Image, StyleSheet } from 'react-native';

const MentalHealthDetail = ({ route }) => {
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
        <Text style={styles.sectionTitle}>Understanding Mental Health</Text>
        <Text style={styles.content}>
          Mental health affects how we think, feel, and act. Maintaining good mental health is essential for overall well-being 
          and can improve your ability to handle stress, relate to others, and make healthy choices.
        </Text>

        <Text style={styles.sectionTitle}>Stress Management Techniques</Text>
        <Text style={styles.content}>
          Techniques such as deep breathing exercises, mindfulness meditation, and regular physical activity can help alleviate stress 
          and improve mental clarity.
        </Text>

        <Text style={styles.sectionTitle}>Mindfulness and Meditation</Text>
        <Text style={styles.content}>
          Consistent practice of mindfulness and meditation can reduce anxiety, enhance self-awareness, and improve emotional regulation.
        </Text>

        <Text style={styles.sectionTitle}>Resources and Support</Text>
        <Text style={styles.content}>
          If you experience persistent mental health challenges, consider seeking professional help. Support groups, counseling, 
          and mental health apps can provide additional assistance.
        </Text>

        <Text style={styles.additionalContent}>
          For further guidance, explore reputable mental health resources, books, and online courses to develop a personalized self-care plan.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MentalHealthDetail;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  contentContainer: { padding: 16 },
  image: { width: '100%', height: 250, borderRadius: 10, marginBottom: 16 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#e63946', marginBottom: 4 },
  author: { fontSize: 14, color: '#888', marginBottom: 16 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 16, marginBottom: 8 },
  content: { fontSize: 16, color: '#333', lineHeight: 24, marginBottom: 8 },
  additionalContent: { fontSize: 16, color: '#555', lineHeight: 24, marginTop: 16 },
});
