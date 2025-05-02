import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const UserInfo = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    return (
      <TouchableOpacity style={styles.userInfoBox}>
        <View style={styles.leftSection}>
          <Ionicons name="person-circle-outline" size={50} color="lightgrey" />
          <Text style={styles.userName}>
            {isLoggedIn ? '테스트' : '로그인 후 이용이 가능합니다.'}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color="#aaa" />
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  userInfoBox: {
    flexDirection: 'row',
    height: '9%',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: '3%',
    marginLeft: '3%',
    marginRight: '3%',
    marginTop: '3%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
});

export default UserInfo;
