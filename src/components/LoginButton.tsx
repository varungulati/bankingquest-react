import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface LoginButtonProps {
  onPress: () => void;
  styles: {
    menuItem: any;
    primaryButton: any;
    buttonText: any;
    fullWidthButton: any;
  };
}

const LoginButton: React.FC<LoginButtonProps> = ({ onPress, styles }) => {
  return (
    <TouchableOpacity style={[styles.menuItem, styles.primaryButton, styles.fullWidthButton]} onPress={onPress}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
