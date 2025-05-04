import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { useQuizStore } from '../../../store/useQuizStore';

const Result = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { score, resetQuiz } = useQuizStore();

  const handleRestart = () => {
    resetQuiz();
    navigation.navigate('Quiz');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 퀴즈 완료!</Text>
      <Text style={styles.score}>최종 점수: {score}점</Text>

      <TouchableOpacity style={styles.button} onPress={handleRestart}>
        <Text style={styles.buttonText}>다시 풀기</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#aaa' }]}
        onPress={() => navigation.navigate('QuizSolo')}
      >
        <Text style={styles.buttonText}>돌아가기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  score: {
    fontSize: 18,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#FF4500',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
