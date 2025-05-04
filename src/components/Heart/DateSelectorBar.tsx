import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DateSelectorBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.top50}>TOP 50</Text>
      <View style={styles.centerBox}>
        <TouchableOpacity>
          <Ionicons name="chevron-back-outline" size={16} color="gray" />
        </TouchableOpacity>
        <Text style={styles.date}>05-04</Text>
        <TouchableOpacity>
          <Ionicons name="chevron-forward-outline" size={16} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.rightInfo}>
        <Text style={styles.infoText}>💗 1.4</Text>
        <Text style={styles.infoText}>👥 4</Text>
      </View>
    </View>
  );
};

export default DateSelectorBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    padding: 10,
  },
  top50: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  centerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  date: {
    fontSize: 14,
    marginHorizontal: 6,
  },
  rightInfo: {
    flexDirection: 'row',
    gap: 10,
  },
  infoText: {
    fontSize: 13,
    color: '#333',
  },
});