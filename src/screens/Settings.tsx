import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Header from "../components/Header";
import UserInfo from "../components/Settings/UserInfo";
import SettingsGrid from "../components/Settings/SettingsGrid";
import AdItem from "../components/Settings/AdItem";
import { useAuthStore } from "../store/useAuthStore";

const Settings = () => {
    const isLoggedIn = useAuthStore(state => state.isLoggedIn);

    return (
        <View style={styles.container}>
            <Header isLoggedIn={isLoggedIn} />

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <UserInfo isLoggedIn={isLoggedIn} />

                <SettingsGrid isLoggedIn={isLoggedIn} />

                <AdItem />

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 40, 
        flexGrow: 1,     
    },
});

export default Settings;