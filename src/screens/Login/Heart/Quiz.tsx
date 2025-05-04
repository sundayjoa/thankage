import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useQuizStore } from '../../../store/useQuizStore';
import { quizData } from '../../../data/quizData';
import OptionButton from '../../../components/Heart/OptionButton';
import QuizHeader from '../../../components/Heart/QuizHeader';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';

const Quiz = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {
    currentIndex,
    score,
    isAnswered,
    selectedIndex,
    selectAnswer,
  } = useQuizStore();

  const [showPopup, setShowPopup] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = quizData[currentIndex];

  useEffect(() => {
    if (!isAnswered || selectedIndex === null) return;

    const correct = selectedIndex === currentQuestion.correctIndex;
    setIsCorrect(correct);
    setShowPopup(true);

    const timer = setTimeout(() => {
      setShowPopup(false);
      navigation.navigate(
        currentIndex === quizData.length - 1 ? 'Result' : 'Explanation'
      );
    }, 3000);

    return () => clearTimeout(timer);
  }, [isAnswered]);

  if (!currentQuestion) {
    return (
      <View style={styles.center}>
        <Text style={styles.doneText}>퀴즈가 종료되었습니다.</Text>
        <Text style={styles.doneText}>최종 점수: {score}점</Text>
      </View>
    );
  }

  const handleOptionPress = (index: number) => {
    if (isAnswered) return;
    const correct = index === currentQuestion.correctIndex;
    selectAnswer(index, correct);
  };

  return (
    <View style={styles.container}>
      <QuizHeader />
      <Text style={styles.question}>{`${currentQuestion.question}`}</Text>
      {currentQuestion.choices.map((choice, index) => (
        <OptionButton
          key={index}
          text={choice}
          onPress={() => handleOptionPress(index)}
          isSelected={selectedIndex === index}
          isDisabled={isAnswered}
        />
      ))}

      {showPopup && (
        <View style={styles.popup}>
          <Text style={styles.popupText}>{isCorrect ? '정답입니다! +50p' : '오답입니다.'}</Text>
        </View>
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#999999',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 0,
    paddingLeft: 10,
    paddingBottom: 10,
    backgroundColor: '#eaeaea',
  },
  popup: {
    position: 'absolute',
    top: '40%',
    left: '10%',
    right: '10%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
  },
  popupText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
});
