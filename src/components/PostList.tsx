import React from 'react';
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { usePostStore } from '../store/usePostStore';
import { Post } from '../data/postData';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;

export default function PostList() {
  const navigation = useNavigation();
  const posts = usePostStore((state) => state.posts);

  const renderItem = ({ item }: { item: Post }) => (
    <TouchableOpacity style={styles.card}>
    <View style={styles.row}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.content}>
        <View style={styles.titleRow}>
            {item.status === 'important' && <MaterialIcons name="verified" size={14} color="#FF4500" />}
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>
            {item.description.replace(/<br\s*\/?>/g, '\n')}
        </Text>
        </View>
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListHeaderComponent={
            <View style={styles.headerRow}>
              <Text style={styles.sectionTitle}>캠프</Text>
              <MaterialCommunityIcons name="pin-outline" size={19} color="darkgray" style={{ marginLeft: 3, marginTop: 1 }} />
            </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
    sectionTitle: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 12,
    },
    container: {
        paddingHorizontal: 0,
        paddingTop: 0,
    },
    card: {
      width: '100%',
      paddingHorizontal: 16,
      marginBottom: 12,
      backgroundColor: 'white'
    },
    row: {
      flexDirection: 'row',       
      alignItems: 'flex-start',
    },
    image: {
      width: '45%',
      height: windowHeight * 0.14,
      borderRadius: 8,
      marginRight: 12,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 4,
    },
    status: {
      color: 'orange',
      fontSize: 16,
      marginRight: 4,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      flexShrink: 1,
      marginLeft: 1,
    },
    description: {
      color: '#555',
      fontSize: 13,
      lineHeight: 18,
      fontWeight: 'bold',
    },
});