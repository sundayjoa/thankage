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
        contentContainerStyle={{ paddingHorizontal: 12 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} resizeMode='stretch' />
            <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
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
    marginTop: 6,
    borderBottomWidth: 4,
    borderBottomColor: '#efefef',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    marginHorizontal: 16,
  },
  card: {
    width: windowWidth * 0.45,
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 4,
    marginBottom: 18,
  },
  image: {
    width: '100%',
    height: windowHeight * 0.14,
    borderRadius: 3,
    marginBottom: 8,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    marginLeft: 6,
  },
  cardDesc: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#666',
    marginLeft: 6,
  },
});

export default BizChannel;
