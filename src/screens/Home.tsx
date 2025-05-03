import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header";
import PostList from "../components/PostList";
import { useAuthStore } from "../store/useAuthStore";

const Home = () => {
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    return (
        <View style={styles.container}>
            <Header isLoggedIn={isLoggedIn} />
            <PostList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
});

export default Home;