import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import Field from '../../components/Field';
import Screen from '../../components/Screen';
import styles from '../../constants/styles';
import { useProprietarios } from '../../hooks/useProprietarios';

// Formulário de cadastro de proprietário (POST)
export default function ProprietarioForm() {
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const router = useRouter();
  const { cadastrar } = useProprietarios();

  const handleSubmit = async () => {
    try {
      await cadastrar({ nome, cpf });
      router.replace(`/proprietario?refresh=${Date.now()}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen title="Cadastrar Proprietário">
      <View style={styles.section}>
        <Field label="Nome" placeholder="Digite o nome" value={nome} onChangeText={setNome} />
        <Field label="CPF" placeholder="Digite o CPF" value={cpf} onChangeText={setCPF} keyboardType="numeric" />

        <View style={{ marginTop: 22 }}>
          <Button title="Salvar" onPress={handleSubmit} />
        </View>
      </View>
    </Screen>
  );
}
