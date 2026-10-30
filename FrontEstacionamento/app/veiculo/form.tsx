import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
import Button from '../../components/Button';
import Field from '../../components/Field';
import ProprietarioPicker from '../../components/ProprietarioPicker';
import Screen from '../../components/Screen';
import styles from '../../constants/styles';
import { useProprietarios } from '../../hooks/useProprietarios';
import { useVeiculos } from '../../hooks/useVeiculos';

// Formulário de cadastro de veículo (POST), associado a um proprietário
export default function VeiculoForm() {
  const [placa, setPlaca] = useState('');
  const [ano, setAno] = useState('');
  const [mensalidade, setMensalidade] = useState('');
  const [fkProprietario, setFkProprietario] = useState('');
  const router = useRouter();
  const { proprietarios } = useProprietarios();
  const { cadastrar } = useVeiculos();

  const handleSubmit = async () => {
    try {
      await cadastrar({
        placa,
        ano: Number(ano),
        mensalidade: Number(mensalidade),
        fk_proprietario: Number(fkProprietario),
      });
      router.replace(`/veiculo?refresh=${Date.now()}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen title="Cadastrar Veículo">
      <View style={styles.section}>
        <Field label="Placa" placeholder="Digite a placa" value={placa} onChangeText={setPlaca} />
        <Field label="Ano" placeholder="Digite o ano" value={ano} onChangeText={setAno} keyboardType="numeric" />
        <Field
          label="Mensalidade"
          placeholder="Digite a mensalidade"
          value={mensalidade}
          onChangeText={setMensalidade}
          keyboardType="numeric"
        />
        <ProprietarioPicker proprietarios={proprietarios} value={fkProprietario} onChange={setFkProprietario} />

        <View style={{ marginTop: 22 }}>
          <Button title="Salvar" onPress={handleSubmit} />
        </View>
      </View>
    </Screen>
  );
}
