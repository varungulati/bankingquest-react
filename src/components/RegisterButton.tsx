import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';

interface TextStyles {
  color?: string;
  fontWeight?: 'bold' | 'normal' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  // Add other text styles as needed
}
interface RegisterButtonProps {
  onPress: () => void;
  styles?: {
    menuItem?: StyleProp<ViewStyle>;
    successButton?: StyleProp<ViewStyle>;
    buttonText?: StyleProp<TextStyles>;
    fullWidthButton?: StyleProp<ViewStyle>;
  };
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ onPress, styles }) => {
  return (
    <TouchableOpacity style={[styles?.menuItem, styles?.successButton, styles?.fullWidthButton]} onPress={onPress}>
      <Text style={styles?.buttonText}>Register</Text>
    </TouchableOpacity>
  );
};

export default RegisterButton;
