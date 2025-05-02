import React from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Header from "../components/Header";
import HeartCard from "../components/HeartCard";

const Heart = () => {
    return (
        <View style={styles.container}>
            <Header isLoggedIn={false} />
            <ScrollView>
                <HeartCard
                    imageSource={require('../../assets/images/heart/solving.png')}
                    navigateTo="QuizDetail"
                />
                <HeartCard
                    imageSource={require('../../assets/images/heart/invite.png')}
                    navigateTo="InviteDetail"
                />
                <HeartCard
                    imageSource={require('../../assets/images/heart/ad.png')}
                    navigateTo="AdDetail"
                />
                <HeartCard
                    imageSource={require('../../assets/images/heart/charging.png')}
                    navigateTo="PaymentDetail"
                />
                <Text style={styles.textstyle}>※ 주요 이벤트가 진행중일 경우 혹은 관리에 따라 차단될 수 있습니다.</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textstyle: {
        fontSize: 10,
        marginLeft: 20,
        marginRight: 20,
        color: 'grey',
    }
});

export default Heart;