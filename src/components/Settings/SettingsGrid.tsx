import React from 'react';
import { View, StyleSheet } from 'react-native';
import SettingsItem from './SettingsItem';
import { Ionicons } from '@expo/vector-icons';

const SettingsGrid = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  return (
    <View style={styles.grid}>
      <SettingsItem icon={<Ionicons name="megaphone" size={20} color="#3366FF" />} label="공지사항" />
      <SettingsItem icon={<Ionicons name="notifications" size={20} color="#3366FF" />} label="언어 및 알림 설정" />
      <SettingsItem icon={<Ionicons name="person-add" size={20} color="#3366FF" />} label="추천인 코드" />
      <SettingsItem icon={<Ionicons name="home" size={20} color="#FF6666" />} label="홈페이지" />
      <SettingsItem icon={<Ionicons name="information-circle" size={20} color="#00CC66" />} label="프로그램 정보" />
      <SettingsItem icon={<Ionicons name="chatbubble" size={20} color="#00CC99" />} label="문의하기" />
      <SettingsItem icon={<Ionicons name="book" size={20} color="#6633CC" />} label="이용 가이드" />

      <SettingsItem
        icon={<Ionicons name={isLoggedIn ? 'log-out' : 'log-in'} size={20} color="#6633CC" />}
        label={isLoggedIn ? '로그아웃' : '로그인'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default SettingsGrid;
