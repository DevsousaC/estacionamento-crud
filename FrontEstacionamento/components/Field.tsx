import React from 'react';
import { Text, TextInput, TextInputProps } from 'react-native';
import styles from '../constants/styles';

type Props = TextInputProps & { label: string };

// Campo de formulário reutilizável: rótulo + caixa de texto
export default function Field({ label, ...inputProps }: Props) {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...inputProps} />
    </>
  );
}
