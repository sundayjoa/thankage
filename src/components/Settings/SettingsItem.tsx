import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsItem = ({
    icon,
    label,
    onPress,
  }: {
    icon: React.ReactNode;
    label: string;
    onPress?: () => void;
  }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={onPress}>
        {icon}
        <Text style={styles.itemText}>{label}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    item: {
      width: '49%',
      backgroundColor: '#fff',
      borderColor: '#EAEAEA',
      borderRadius: 8,
      paddingVertical: '3.5%',
      paddingHorizontal: 12,
      flexDirection: 'column',
      marginBottom: '3%',
      justifyContent: 'center',
    },
    itemText: {
      fontSize: 15,
      color: '#333',
    },
  });
  

export default SettingsItem;
