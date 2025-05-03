import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

interface LoginInputProps {
  email: string;
  password: string;
  onChangeEmail: (text: string) => void;
  onChangePassword: (text: string) => void;
}

const LoginInput = ({ email, password, onChangeEmail, onChangePassword }: LoginInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>이메일</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={onChangeEmail}
        placeholder="이메일을 입력해주세요"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={[styles.label, { marginTop: 20 }]}>비밀번호</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={onChangePassword}
        placeholder="비밀번호를 입력해주세요"
        secureTextEntry
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#7c7c7c',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 14,
    color: 'black',
  },
});

export default LoginInput;
