import React from 'react';
import { Text, View } from 'react-native';
import styles from '../constants/styles';
import Button from './Button';

type Props = {
  title: string;
  lines: string[];
  onEdit: () => void;
  onDelete: () => void;
};

// Cartão usado nas listagens, com os botões Editar e Excluir
export default function Card({ title, lines, onEdit, onDelete }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {lines.map((line) => (
        <Text key={line} style={styles.cardText}>
          {line}
        </Text>
      ))}

      <View style={styles.row}>
        <Button title="Editar" variant="ghost" style={{ flex: 1 }} onPress={onEdit} />
        <Button title="Excluir" variant="danger" style={{ flex: 1 }} onPress={onDelete} />
      </View>
    </View>
  );
}
