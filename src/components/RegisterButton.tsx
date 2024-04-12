import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface RegisterButtonProps {
  onPress: () => void;
  styles: {
    menuItem: any;
    successButton: any;
    buttonText: any;
    fullWidthButton: any;
  };
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ onPress, styles }) => {
  return (
    <TouchableOpacity style={[styles.menuItem, styles.successButton, styles.fullWidthButton]} onPress={onPress}>
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
  );
};

export default RegisterButton;
