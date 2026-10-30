import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import Field from '../../components/Field';
import Screen from '../../components/Screen';
import styles from '../../constants/styles';
import { useProprietarios } from '../../hooks/useProprietarios';

// Formulário de edição de proprietário (PUT)
export default function ProprietarioEdit() {
  const params = useLocalSearchParams<{ id_proprietario?: string; nome?: string; cpf?: string }>();
  const [proprietario, setProprietario] = useState({
    id_proprietario: params.id_proprietario ?? '',
    nome: params.nome ?? '',
    cpf: params.cpf ?? '',
  });
  const router = useRouter();
  const { alterar } = useProprietarios();

  const handleSubmit = async () => {
    try {
      await alterar(proprietario.id_proprietario, { nome: proprietario.nome, cpf: proprietario.cpf });
      router.replace(`/proprietario?refresh=${Date.now()}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen title="Editar Proprietário">
      <View style={styles.section}>
        <Field label="Identificação" editable={false} value={String(proprietario.id_proprietario)} />
        <Field label="Nome" value={proprietario.nome} onChangeText={(nome) => setProprietario((prev) => ({ ...prev, nome }))} />
        <Field
          label="CPF"
          value={proprietario.cpf}
          onChangeText={(cpf) => setProprietario((prev) => ({ ...prev, cpf }))}
          keyboardType="numeric"
        />

        <View style={{ marginTop: 22 }}>
          <Button title="Alterar" onPress={handleSubmit} />
        </View>
      </View>
    </Screen>
  );
}
