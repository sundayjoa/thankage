import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, RouteProp, useRoute  } from '@react-navigation/native';
import { useAuthStore } from '../../store/useAuthStore';
import { useBoardStore } from '../../store/useBoardStore';
import { RootStackParamList } from '../../navigation/types';
import uuid from 'react-native-uuid';

export default function Write() {
    const navigation = useNavigation();
    const route = useRoute<RouteProp<RootStackParamList, 'PostDetail'>>();
    const { post } = route.params;
    const [content, setContent] = useState('');
    const { user } = useAuthStore();
    const addPost = useBoardStore((state) => state.addPost);

  const handleSubmit = () => {
    if (!user) {
      Alert.alert('로그인이 필요합니다.');
      return;
    }

    if (!content.trim()) {
      Alert.alert('내용을 입력해주세요.');
      return;
    }

    const newPost = {
      id: uuid.v4().toString(),
      postId: post.id,
      author: user.name,
      profileImage: '',
      createdAt: new Date().toISOString().slice(0, 10),
      content,
      likes: 0,
      comments: 0,
    };

    addPost(newPost);
    console.log('게시글이 등록되었습니다:', newPost);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{post.title}</Text>
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.register}>등록</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryRow}>
        <Text style={styles.categoryText}>카테고리 설정</Text>
        <Ionicons name="chevron-down" size={18} />
      </View>

      <TextInput
        placeholder="멤버들에게 전할 소식을 남기세요."
        multiline
        value={content}
        onChangeText={setContent}
        style={styles.textInput}
      />

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.iconBox}>
          <Ionicons name="image-outline" size={22} color="green" />
          <Text>앨범</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}>
          <Ionicons name="checkbox-outline" size={22} color="orangered" />
          <Text>투표</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}>
          <Ionicons name="document-attach-outline" size={22} color="orange" />
          <Text>파일</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    register: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
    },
    categoryRow: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
    },
    categoryText: {
        fontWeight: 'bold',
        marginRight: 8,
    },
    textInput: {
        flex: 1,
        marginTop: 16,
        fontSize: 16,
        textAlignVertical: 'top',
    },
    bottomBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: '#f8f8f8',
    },
    iconBox: {
        alignItems: 'center',
    },
});
  