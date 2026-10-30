import { StyleSheet } from 'react-native';
import { colors } from './colors';

// Estilos compartilhados pelas telas e componentes
export default StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  title: { fontSize: 22, fontWeight: '800', color: colors.text },
  section: { padding: 16 },
  card: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 2,
  },
  cardTitle: { fontSize: 18, fontWeight: '700', color: colors.text },
  cardText: { marginTop: 4, color: colors.textMuted },
  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    width: '100%',
    padding: 12,
    fontSize: 16,
  },
  label: { marginTop: 18, marginBottom: 8, fontSize: 16, fontWeight: '700', color: colors.text },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDanger: { backgroundColor: colors.danger },
  buttonGhost: { backgroundColor: colors.warning },
  buttonText: { color: colors.white, fontWeight: '700' },
  row: { flexDirection: 'row', gap: 10, marginTop: 12 },
  pickerContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    backgroundColor: colors.white,
    overflow: 'hidden',
  },  empty: { textAlign: 'center', color: colors.textLight, marginTop: 20 },
  footer: { padding: 16 },
});
