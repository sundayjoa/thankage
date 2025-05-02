import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsItem = ({
    icon,
    label,
  }: {
    icon: React.ReactNode;
    label: string;
  }) => {
    return (
      <TouchableOpacity style={styles.item}>
        {icon}
        <Text style={styles.itemText}>{label}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    item: {
      width: '44%',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#EAEAEA',
      borderRadius: 12,
      paddingVertical: '5%',
      paddingHorizontal: 12,
      flexDirection: 'column',
      marginBottom: '3%',
      marginLeft: '3%',
      marginRight: '3%',
      justifyContent: 'center',
    },
    itemText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      marginTop: 30,
    },
  });
  

export default SettingsItem;
