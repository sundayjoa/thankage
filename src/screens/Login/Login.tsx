import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AuthButtons from "../../components/Login/AuthButtons";

const Login = () => {

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Text style={styles.logoTitle}>퀴즈 행사의 모든 것, 땡기지</Text>
                <Text style={styles.logo}>땡기지</Text>
            </View>
            <AuthButtons />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
    },
    logoContainer: {
        bottom: '12%',
    },
    logoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'#FF4500',

    },

});

export default Login;