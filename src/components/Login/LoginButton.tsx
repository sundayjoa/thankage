import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

interface LoginButtonProps {
  onPress: () => void;
}

const LoginButton = ({ onPress }: LoginButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>로그인</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 20,
        left: (windowWidth * 0.05),
        width: windowWidth * 0.9,
        backgroundColor: '#FF6B00',
        paddingVertical: 16,
        alignItems: 'center',
        borderRadius: 8,
    },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginButton;

