import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Text, View } from 'react-native';
import styles from '../constants/styles';
import { Proprietario } from '../hooks/useProprietarios';

type Props = {
  proprietarios: Proprietario[];
  value: string;
  onChange: (value: string) => void;
};

// Seletor de proprietário: associa o veículo ao seu dono (fk_proprietario)
export default function ProprietarioPicker({ proprietarios, value, onChange }: Props) {
  return (
    <>
      <Text style={styles.label}>Proprietário</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={value} onValueChange={(item) => onChange(String(item))}>
          <Picker.Item label="Selecione um proprietário" value="" />
          {proprietarios.map((item) => (
            <Picker.Item key={item.id_proprietario} label={`${item.nome} - ${item.cpf}`} value={String(item.id_proprietario)} />
          ))}
        </Picker>
      </View>
    </>
  );
}
