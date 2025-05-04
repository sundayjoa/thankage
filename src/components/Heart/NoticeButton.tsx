import React from 'react';
import { TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NoticeButton = () => {
  const showNotice = () => {
    Alert.alert('공지사항', '현재 진행 중인 이벤트는 없습니다.');
  };

  return (
    <TouchableOpacity style={styles.button} onPress={showNotice}>
      <Ionicons name="volume-off-outline" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

export default NoticeButton;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#FF6600',
    padding: 10,
    borderRadius: 30,
    elevation: 3,
  },
});
