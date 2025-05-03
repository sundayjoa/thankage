import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { dummyUser } from '../../data/userData';
import LoginInput from '../../components/Login/LoginInput';
import LoginButton from '../../components/Login/LoginButton';
import { useAuthStore } from '../../store/useAuthStore';

const LoginForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = () => {
    if (email === dummyUser.email && password === dummyUser.password) {
        setIsLoggedIn(true);
        setUser(dummyUser);
        navigation.navigate('MainTabs' as never);
    } else {
      Alert.alert('로그인 실패', '이메일 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-outline" size={40} color="#7c7c7c" />
        </TouchableOpacity>
  
        <Text style={styles.title}>이메일로 로그인</Text>
  
        <LoginInput
          email={email}
          password={password}
          onChangeEmail={setEmail}
          onChangePassword={setPassword}
        />
  
        <TouchableOpacity style={styles.forgotBtn}>
          <Text style={styles.forgotText}>비밀번호를 잊어버리셨나요?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
  
      <LoginButton onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    backgroundColor: 'white',
  },
  backBtn: {
    position: 'absolute',
    top: 10,
    left: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 35,
    fontFamily: 'sans-serif',
  },
  forgotBtn: {
    alignItems: 'center',
    marginTop: '15%',
  },
  forgotText: {
    textDecorationLine: 'underline',
    color: 'grey',
  },
});
