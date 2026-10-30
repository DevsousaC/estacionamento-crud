import React from 'react';
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native';
import styles from '../constants/styles';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'danger' | 'ghost';
  style?: StyleProp<ViewStyle>;
};

// Botão reutilizável com três variações de cor (azul, vermelho e laranja)
export default function Button({ title, onPress, variant = 'primary', style }: Props) {
  const variantStyle = variant === 'danger' ? styles.buttonDanger : variant === 'ghost' ? styles.buttonGhost : null;

  return (
    <Pressable style={[styles.button, variantStyle, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}
