import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header";

const Alert = () => {
    return (
        <View style={styles.container}>
            <Header isLoggedIn={false} />
            <Text>Alert 화면</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default Alert;