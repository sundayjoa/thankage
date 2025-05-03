import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header";
import { useAuthStore } from "../store/useAuthStore";

const Alert = () => {
    const isLoggedIn = useAuthStore(state => state.isLoggedIn);

    return (
        <View style={styles.container}>
            <Header isLoggedIn={isLoggedIn} />
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