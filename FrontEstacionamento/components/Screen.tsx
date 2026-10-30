import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../constants/styles';

type Props = {
  title: string;
  children: React.ReactNode;
};

// Estrutura base das telas: área segura + título da página
export default function Screen({ title, children }: Props) {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <View style={styles.section}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </SafeAreaView>
  );
}
