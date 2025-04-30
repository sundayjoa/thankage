import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header";

const Heart = () => {
    return (
        <View style={styles.container}>
            <Header isLoggedIn={false} />
            <Text>Heart 화면</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default Heart;