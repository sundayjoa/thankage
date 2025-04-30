import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import BottomTabs from './src/navigation/BottomTabs';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}