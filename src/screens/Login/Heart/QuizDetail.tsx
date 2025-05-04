import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import HeaderBack from "../../../components/Heart/HeaderBack";
import NoticeButton from "../../../components/Heart/NoticeButton";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../navigation/types';

const { height: screenHeight } = Dimensions.get('window');

const QuizDetail = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.container}>
          <HeaderBack title="혼자풀기" />
    
          <ScrollView>
            <Text style={styles.heading}>땡기지 혼자풀기</Text>
            <Text style={styles.description}>땡기지와 함께하는 퀴즈 풀기!</Text>
    
            <TouchableOpacity onPress={() => navigation.navigate('QuizSolo')}>
              <Image
                source={require('../../../../assets/images/heart/quiz.png')} 
                style={styles.banner}
                resizeMode="stretch"
              />
            </TouchableOpacity>
    
            <Image
              source={require('../../../../assets/images/heart/quiz-AD.png')} 
              style={styles.adbanner}
              resizeMode="stretch"
            />
          </ScrollView>
    
          <NoticeButton />
        </View>
      );
    };
    
export default QuizDetail;
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 20,
        marginLeft: 18,
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginLeft: 18,
        marginBottom: 5,
    },
    banner: {
        width: '100%',
        height: screenHeight * 0.3,
        marginBottom: 7,
    },
    adbanner: {
        width: '100%',
        height: screenHeight * 0.15,
        marginBottom: 20,
    }
});