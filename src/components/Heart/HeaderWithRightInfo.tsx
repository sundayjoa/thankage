import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HeaderWithRightInfo = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>땡기지 혼자풀기</Text>
      <TouchableOpacity style={styles.rightButton} onPress={() => alert('하트지급 안내')}>
        <Text style={styles.heartText}>하트지급</Text>
        <Ionicons name="help-circle-outline" size={18} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderWithRightInfo;

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightButton: {
    position: 'absolute',
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartText: {
    marginRight: 4,
  },
});