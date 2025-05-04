import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';
import { useQuizStore } from '../../../store/useQuizStore';
import { quizData } from '../../../data/quizData';

const ExplanationScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {
    currentIndex,
    selectedIndex,
    goToNextQuestion,
  } = useQuizStore();

  const currentQuestion = quizData[currentIndex];
  const isCorrect = selectedIndex === currentQuestion.correctIndex;

  const handleNext = () => {
    goToNextQuestion();
    navigation.navigate('Quiz');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>정답 및 해설</Text>

      <View style={styles.explanationBox}>
        {currentQuestion.choices.map((choice, index) => {
          const isAnswer = index === currentQuestion.correctIndex;
          const isSelected = index === selectedIndex;
          return (
            <View
              key={index}
              style={[styles.choiceBox,
                isAnswer && styles.correctAnswer,
                isSelected && !isAnswer && styles.selectedWrong
              ]}
            >
              <Text style={styles.choiceText}>{choice}</Text>
            </View>
          );
        })}
        <Text style={styles.explanationText}>{currentQuestion.explanation}</Text>
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>다음 문제</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExplanationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  explanationBox: {
    marginBottom: 30,
  },
  choiceBox: {
    padding: 14,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  correctAnswer: {
    backgroundColor: '#cceeff',
  },
  selectedWrong: {
    backgroundColor: '#fdd',
  },
  choiceText: {
    fontSize: 16,
  },
  explanationText: {
    marginTop: 16,
    fontSize: 15,
    color: '#444',
  },
  nextButton: {
    marginTop: 'auto',
    backgroundColor: '#FF4500',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
