import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import HeaderWithRightInfo from '../../../components/Heart/HeaderWithRightInfo';
import DateSelectorBar from '../../../components/Heart/DateSelectorBar';
import MyRankingItem from '../../../components/Heart/MyRankingItem';
import RankingList from '../../../components/Heart/RankingList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';

const QuizSoloScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <HeaderWithRightInfo />

      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require('../../../../assets/images/heart/quiz.png')}
          style={styles.banner}
          resizeMode="contain"
        />

        <DateSelectorBar />

        <MyRankingItem />

        <RankingList />
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.buttonText}>혼자풀기 도전</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QuizSoloScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingBottom: 100,
  },
  banner: {
    width: '100%',
    height: 180,
    marginBottom: 12,
    borderRadius: 8,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FF6600',
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
