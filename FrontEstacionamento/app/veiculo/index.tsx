import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Screen from '../../components/Screen';
import styles from '../../constants/styles';
import { useProprietarios } from '../../hooks/useProprietarios';
import { useVeiculos } from '../../hooks/useVeiculos';

// Lista de veículos (GET) com opções de editar e excluir (DELETE)
export default function VeiculoList() {
  const router = useRouter();
  const { refresh } = useLocalSearchParams<{ refresh?: string }>();
  const { veiculos, excluir } = useVeiculos(refresh);
  const { proprietarios } = useProprietarios(refresh);

  // Mostra o nome do proprietário associado ao veículo
  const nomeProprietario = (id: number) =>
    proprietarios.find((p) => p.id_proprietario === id)?.nome ?? String(id);

  return (
    <Screen title="Lista de Veículos">
      <FlatList
        data={veiculos}
        keyExtractor={(item) => String(item.id_veiculo)}
        renderItem={({ item }) => (
          <Card
            title={item.placa}
            lines={[
              `Ano: ${item.ano}`,
              `Mensalidade: ${item.mensalidade}`,
              `Proprietário: ${nomeProprietario(item.fk_proprietario)}`,
            ]}
            onEdit={() =>
              router.push({
                pathname: '/veiculo/edit',
                params: {
                  id_veiculo: String(item.id_veiculo),
                  placa: item.placa,
                  ano: String(item.ano),
                  mensalidade: String(item.mensalidade),
                  fk_proprietario: String(item.fk_proprietario),
                },
              })
            }
            onDelete={() => excluir(item.id_veiculo)}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum veículo cadastrado.</Text>}
      />

      <View style={styles.footer}>
        <Button title="Novo Veículo" onPress={() => router.push('/veiculo/form')} />
      </View>
    </Screen>
  );
}
