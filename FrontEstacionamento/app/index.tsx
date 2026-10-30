import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import { colors } from '../constants/colors';

// Tela inicial: menu para escolher Proprietários ou Veículos
export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <View style={styles.hero}>
        <Text style={styles.title}>Estacionamento</Text>
        <Text style={styles.subtitle}>Gerencie proprietários e veículos de forma simples.</Text>
      </View>

      <View style={styles.actions}>
        <Button title="Proprietários" onPress={() => router.push('/proprietario')} />
        <Button title="Veículos" onPress={() => router.push('/veiculo')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.backgroundHome,
    justifyContent: 'center',
  },
  hero: { gap: 12, marginBottom: 32 },
  title: { fontSize: 34, fontWeight: '800', color: colors.text },
  subtitle: { fontSize: 16, color: colors.textMuted, lineHeight: 22 },
  actions: { gap: 14 },
});
