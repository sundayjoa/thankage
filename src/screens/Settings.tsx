import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Header from "../components/Header";
import UserInfo from "../components/Settings/UserInfo";
import SettingsGrid from "../components/Settings/SettingsGrid";
import AdItem from "../components/Settings/AdItem";

const Settings = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    return (
        <View style={styles.container}>
            <Header isLoggedIn={false} />

            <ScrollView contentContainerStyle={styles.container}>
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
});

export default Settings;