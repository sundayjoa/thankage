import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RankingList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.placeholder}>랭킹 데이터가 없습니다.</Text>
    </View>
  );
};

export default RankingList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    padding: 10,
  },
  placeholder: {
    color: '#aaa',
    fontSize: 14,
  },
});
