import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';

interface TextStyles {
  color?: string;
  fontWeight?: 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  // Add other text styles as needed
}

interface LoginButtonProps {
  onPress: () => void;
  styles?: {
    menuItem?: StyleProp<ViewStyle>;
    primaryButton?: StyleProp<ViewStyle>;
    buttonText?: StyleProp<TextStyles>;
    fullWidthButton?: StyleProp<ViewStyle>;
  };
}

const LoginButton: React.FC<LoginButtonProps> = ({ onPress, styles }) => {
  return (
    <TouchableOpacity style={[styles?.menuItem, styles?.primaryButton, styles?.fullWidthButton]} onPress={onPress}>
      <Text style={styles?.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
