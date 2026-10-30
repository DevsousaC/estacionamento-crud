import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Screen from '../../components/Screen';
import styles from '../../constants/styles';
import { useProprietarios } from '../../hooks/useProprietarios';

// Lista de proprietários (GET) com opções de editar e excluir (DELETE)
export default function ProprietarioList() {
  const router = useRouter();
  const { refresh } = useLocalSearchParams<{ refresh?: string }>();
  const { proprietarios, excluir } = useProprietarios(refresh);

  return (
    <Screen title="Lista de Proprietários">
      <FlatList
        data={proprietarios}
        keyExtractor={(item) => String(item.id_proprietario)}
        renderItem={({ item }) => (
          <Card
            title={item.nome}
            lines={[`CPF: ${item.cpf}`]}
            onEdit={() =>
              router.push({
                pathname: '/proprietario/edit',
                params: { id_proprietario: String(item.id_proprietario), nome: item.nome, cpf: item.cpf },
              })
            }
            onDelete={() => excluir(item.id_proprietario)}
          />
        )}
        ListEmptyComponent={<Text style={styles.empty}>Nenhum proprietário cadastrado.</Text>}
      />

      <View style={styles.footer}>
        <Button title="Novo Proprietário" onPress={() => router.push('/proprietario/form')} />
      </View>
    </Screen>
  );
}
