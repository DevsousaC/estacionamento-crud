import { Stack } from 'expo-router';
import React from 'react';
import HeaderAdd from '../components/HeaderAdd';
import { colors } from '../constants/colors';

// Controle de layout e navegação entre as telas (pilha de telas)
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.header },
        headerTintColor: colors.white,
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Menu de Opções' }} />
      <Stack.Screen
        name="proprietario/index"
        options={{ title: 'Lista de Proprietários', headerRight: () => <HeaderAdd href="/proprietario/form" /> }}
      />
      <Stack.Screen name="proprietario/form" options={{ title: 'Formulário de Proprietários' }} />
      <Stack.Screen name="proprietario/edit" options={{ title: 'Formulário de Edição' }} />
      <Stack.Screen
        name="veiculo/index"
        options={{ title: 'Lista de Veículos', headerRight: () => <HeaderAdd href="/veiculo/form" /> }}
      />
      <Stack.Screen name="veiculo/form" options={{ title: 'Formulário de Veículos' }} />
      <Stack.Screen name="veiculo/edit" options={{ title: 'Formulário de Edição' }} />
    </Stack>
  );
}
