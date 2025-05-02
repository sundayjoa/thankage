import React from "react";
import { View, Text, StyleSheet,TouchableOpacity, SafeAreaView } from "react-native";
import Header from "../components/Header";
import BizChannel from "../components/camp/BizChannel";
import RecommendedCamps from "../components/camp/RecommendedCamps";

const Camp = () => {
    //캠프 게시글 추가
    const handleAddPress = () => {
        console.log('플러스 버튼 클릭됨!');
    };

    return (
        <View style={styles.container}>
            <Header isLoggedIn={false} />
            <BizChannel />
            <RecommendedCamps />

            {/* 캠프 게시글 추가 버튼 */}
            <TouchableOpacity style={styles.fab} onPress={handleAddPress}>
                <Text style={styles.fabText}>＋</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    fab: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        backgroundColor: '#FF4500',
        width: 58,
        height: 58,
        borderRadius: 28,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Android 그림자
        shadowColor: '#000', // iOS 그림자
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    fabText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
    },
});

export default Camp;