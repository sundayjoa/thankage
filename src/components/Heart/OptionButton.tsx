import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface OptionButtonProps {
  text: string;
  onPress: () => void;
  isSelected: boolean;
  isDisabled: boolean;
}

const OptionButton: React.FC<OptionButtonProps> = ({ text, onPress, isSelected, isDisabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      style={[styles.button, isSelected && styles.selected]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default OptionButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 3,
    marginBottom: 8,
    backgroundColor: '#eaeaea',
  },
  selected: {
    backgroundColor: '#ddd',
    borderColor: '#333',
  },
  text: {
    fontSize: 16,
  },
});
