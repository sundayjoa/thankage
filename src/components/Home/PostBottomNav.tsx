// components/PostBottomNav.tsx
import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type Props = {
    post: any;
};

const PostBottomNav = ({ post }: Props) => {
  const [activeTab, setActiveTab] = useState<'home' | 'gallery' | 'write' | 'settings'>('home');

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* 홈 */}
      <TouchableOpacity style={styles.item} onPress={() => setActiveTab('home')}>
        <Ionicons name={activeTab === 'home' ? 'home' : 'home-outline'} size={24}/>
        <Text style={styles.label}>홈</Text>
      </TouchableOpacity>

      {/* 갤러리 */}
      <TouchableOpacity style={styles.item} onPress={() => setActiveTab('gallery')}>
        <Ionicons name={activeTab === 'gallery' ? 'image' : 'image-outline'} size={24}/>
        <Text style={styles.label}>갤러리</Text>
      </TouchableOpacity>

      {/* 글쓰기 */}
      <TouchableOpacity
        style={styles.item}
        onPress={() => {
            setActiveTab('write');
            navigation.navigate('Write', { post });
        }}
        >
        <Ionicons name={activeTab === 'write' ? 'add-circle' : 'add-circle-outline'} size={24}/>
        <Text style={styles.label}>글쓰기</Text>
      </TouchableOpacity>

      {/* 설정 */}
      <TouchableOpacity style={styles.item} onPress={() => setActiveTab('settings')}>
        <Ionicons name={activeTab === 'settings' ? 'settings' : 'settings-outline'} size={24}/>
        <Text style={styles.label}>설정</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PostBottomNav;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderColor: '#e0e0e0',
        zIndex: 10,
    },
    item: {
        alignItems: 'center',
    },
    label: {
        fontSize: 12,
    },
});
  

