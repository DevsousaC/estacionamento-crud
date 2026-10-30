import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';
import { colors } from '../constants/colors';

// Botão "+" do cabeçalho que abre o formulário de cadastro
export default function HeaderAdd({ href }: { href: '/proprietario/form' | '/veiculo/form' }) {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push(href)} style={{ paddingHorizontal: 12 }}>
      <MaterialIcons name="add" size={26} color={colors.white} />
    </Pressable>
  );
}
