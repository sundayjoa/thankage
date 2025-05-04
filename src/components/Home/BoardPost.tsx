import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BoardPost } from '../../store/useBoardStore';

type Props = {
  post: BoardPost;
};

const BoardPostCard = ({ post }: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        {/* 프로필 원형 */}
        <View style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.author}>{post.author}</Text>
          <Text style={styles.date}>{post.createdAt}</Text>
        </View>
        <Ionicons name="ellipsis-vertical" size={16} color="gray" />
      </View>

      <Text style={styles.content}>{post.content}</Text>

      <View style={styles.footer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="heart-outline" size={16} color="gray" />
            <Text style={{ marginLeft: 4 }}>{post.likes}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="chatbubble-outline" size={16} color="gray" />
            <Text style={{ marginLeft: 4 }}>{post.comments}</Text>
        </View>
      </View>
    </View>
  );
};

export default BoardPostCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 14,
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 32,
    backgroundColor: '#ccc',
    marginRight: 10,
    marginLeft: 5,
  },
  headerText: {
    flex: 1,
  },
  author: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
  content: {
    fontSize: 14,
    marginVertical: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 12,
    marginTop: 4,
  },
});
