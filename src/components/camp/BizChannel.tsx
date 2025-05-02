// src/components/BizChannel.tsx
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import { initialPosts } from '../../data/postData'; 

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BizChannel = () => {
  const bizPosts = initialPosts.filter(post => post.status === 'normal');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>비즈 채널</Text>
      <FlatList
        data={bizPosts}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.cardTitle} numberOfLines={2}>{item.title}</Text>
            <Text style={styles.cardDesc} numberOfLines={2}>
              {item.description.replace(/<br>/g, '\n')}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  card: {
    width: windowWidth * 0.4,
    marginRight: 4,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
  },
  image: {
    width: '100%',
    height: windowHeight * 0.15,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#666',
  },
});

export default BizChannel;
