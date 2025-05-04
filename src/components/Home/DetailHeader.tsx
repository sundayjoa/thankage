import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const DetailHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.leftButton}>
        <Ionicons name="chevron-back" size={28} color="white" />
      </TouchableOpacity>

      <View style={styles.rightButtons}>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="menu" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="search" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DetailHeader;

const styles = StyleSheet.create({
headerContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    height: 50,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 100, 
},
leftButton: {
    padding: 4,
},
rightButtons: {
    flexDirection: 'row',
    alignItems: 'center',
},
iconButton: {
    marginLeft: 16,
},
});
  