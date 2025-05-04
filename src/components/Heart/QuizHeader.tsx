import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useQuizStore } from '../../store/useQuizStore';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

const { height } = Dimensions.get('window');

const QuizHeader = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const {
    currentIndex,
    score,
    isAnswered,
    selectAnswer,
    } = useQuizStore();
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
    if (isAnswered) return;

    setTimeLeft(30);
    const timer = setInterval(() => {
        setTimeLeft((prev) => {
        if (prev <= 1) {
            clearInterval(timer);
            if (!useQuizStore.getState().isAnswered) {
            selectAnswer(-1, false); 
            }
            return 0;
        }
        return prev - 1;
        });
    }, 1000);

    return () => clearInterval(timer);
    }, [currentIndex, isAnswered]);

    return (
        <View>
        {/* 뒤로 가기 */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.topTitle}>혼자풀기</Text>
          <View style={styles.backButton} />
        </View>

        {/* 광고 배너 */}
        <Image
            source={require('../../../assets/images/heart/quizAd.jpg')} 
            style={styles.banner}
            resizeMode="stretch"
        />
  
        {/* 기본 정보 표시 */}
        <View style={styles.headerContainer}>
            <View style={styles.qBox}>
                <Text style={styles.qBoxText}>
                <Text style={styles.qCurrent}>Q{currentIndex + 1} </Text>
                <Text style={styles.qTotal}>50</Text>
                </Text>
            </View>
            <View style={styles.rightBox}>
                <View style={styles.infoRow}>
                    <Ionicons name="time" size={20} color="#3366FF" />
                    <Text style={styles.infoText}>{timeLeft}</Text>
                </View>
                <View style={styles.infoRow}>
                    <MaterialIcons name="bookmark" size={20} color="black" />
                <Text style={styles.scoreText}>{score}</Text>
                </View>
            </View>
        </View>
      </View>
    );
};

export default QuizHeader;

const styles = StyleSheet.create({
    topBar: {
        backgroundColor: '#303030',
        paddingVertical: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
    },
    backButton: {
        width: 40,
    },
    topTitle: {
        color: '#fff',
        fontSize: 17,
    },
    banner: {
        width: '100%',
        height: height * 0.3,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '3%',
        borderColor: '#ccc',
        backgroundColor: '#eaeaea',
    },
    headerText: {
        fontSize: 16,
        fontWeight: '600',
    },
    qBox: {
        backgroundColor: '#5e5e5e',
        marginTop: 7,
        marginBottom: 7,
        marginLeft: 10,
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 4,
    },
    qBoxText: {
        fontSize: 14,
        fontWeight: '600',
    },
    qCurrent: {
        color: '#fff', 
    },
    qTotal: {
        color: '#ccc',
    },
    rightBox: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 4,
        marginRight: 10,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoText: {
        color: '#3366FF',
        marginLeft: 2,
        fontWeight: 'bold',
        fontSize: 18,
    },
    scoreText: {
        color: 'black',
        marginLeft: 2,
        fontWeight: 'bold',
        fontSize: 18,
    }
});
