import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Header from "../components/Header";
import PostList from "../components/PostList";

const Home = () => {
    return (
        <View style={styles.container}>
            <Header isLoggedIn={false} />
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