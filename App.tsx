import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <Home />
    </SafeAreaView>
  );
}