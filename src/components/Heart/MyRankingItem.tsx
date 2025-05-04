import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyRankingItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>테스트</Text>
      <Text style={styles.score}>💗 0.0 ㆍ 000 ㆍ 0/3</Text>
    </View>
  );
};

export default MyRankingItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
  },
  score: {
    color: '#666',
    fontSize: 13,
    marginTop: 2,
  },
});