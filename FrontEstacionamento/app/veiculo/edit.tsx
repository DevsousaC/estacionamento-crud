import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import Field from '../../components/Field';
import ProprietarioPicker from '../../components/ProprietarioPicker';
import Screen from '../../components/Screen';
import styles from '../../constants/styles';
import { useProprietarios } from '../../hooks/useProprietarios';
import { useVeiculos } from '../../hooks/useVeiculos';

// Formulário de edição de veículo (PUT), permitindo trocar o proprietário
export default function VeiculoEdit() {
  const params = useLocalSearchParams<{
    id_veiculo?: string;
    placa?: string;
    ano?: string;
    mensalidade?: string;
    fk_proprietario?: string;
  }>();
  const [veiculo, setVeiculo] = useState({
    id_veiculo: params.id_veiculo ?? '',
    placa: params.placa ?? '',
    ano: params.ano ?? '',
    mensalidade: params.mensalidade ?? '',
    fk_proprietario: params.fk_proprietario ?? '',
  });
  const router = useRouter();
  const { proprietarios } = useProprietarios();
  const { alterar } = useVeiculos();

  const handleSubmit = async () => {
    try {
      await alterar(veiculo.id_veiculo, {
        placa: veiculo.placa,
        ano: Number(veiculo.ano),
        mensalidade: Number(veiculo.mensalidade),
        fk_proprietario: Number(veiculo.fk_proprietario),
      });
      router.replace(`/veiculo?refresh=${Date.now()}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen title="Editar Veículo">
      <View style={styles.section}>
        <Field label="Identificação" editable={false} value={String(veiculo.id_veiculo)} />
        <Field label="Placa" value={veiculo.placa} onChangeText={(placa) => setVeiculo((prev) => ({ ...prev, placa }))} />
        <Field
          label="Ano"
          value={veiculo.ano}
          onChangeText={(ano) => setVeiculo((prev) => ({ ...prev, ano }))}
          keyboardType="numeric"
        />
        <Field
          label="Mensalidade"
          value={veiculo.mensalidade}
          onChangeText={(mensalidade) => setVeiculo((prev) => ({ ...prev, mensalidade }))}
          keyboardType="numeric"
        />
        <ProprietarioPicker
          proprietarios={proprietarios}
          value={veiculo.fk_proprietario}
          onChange={(fk_proprietario) => setVeiculo((prev) => ({ ...prev, fk_proprietario }))}
        />

        <View style={{ marginTop: 22 }}>
          <Button title="Alterar" onPress={handleSubmit} />
        </View>
      </View>
    </Screen>
  );
}
