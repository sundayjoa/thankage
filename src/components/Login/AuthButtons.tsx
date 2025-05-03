import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const AuthButtons = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.signupButton}
      >
        <Text style={styles.signupText}>가입하기</Text>
      </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('LoginForm')} style={styles.centerContainer}>
            <View style={styles.loginPrompt}>
                <Text style={styles.loginPromptText}>이미 가입하셨나요? </Text>
                <Text style={styles.loginLink}>로그인하기</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 2,
      width: '100%',
      paddingHorizontal: 20,
    },
    signupButton: {
      backgroundColor: '#FF6B00',
      width: '100%',
      alignItems: 'center',
      paddingVertical: 20,
      borderRadius: 8,
      marginBottom: 16,
    },
    signupText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    centerContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginPrompt: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: '#f9f9f9',
      paddingVertical: 20,
      borderRadius: 8,
      marginBottom: 30,
    },
    loginPromptText: {
      color: '#555',
      fontSize: 14,
    },
    loginLink: {
      color: '#000',
      fontSize: 14,
      textDecorationLine: 'underline',
      fontWeight: 'bold',
    },
  });

export default AuthButtons;
