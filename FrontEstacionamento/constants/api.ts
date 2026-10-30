import axios from 'axios';

// Endereço da API (Back-End Node.js + Express rodando na porta 8081).
// Navegador / emulador iOS: http://localhost:8081
// Emulador Android: http://10.0.2.2:8081
// Celular físico: IP do computador na rede (ex.: http://192.168.0.10:8081)
export const apiBaseUrl = 'http://localhost:8081';

// Instância do Axios já configurada com o endereço base da API
export const api = axios.create({
  baseURL: apiBaseUrl,
  headers: { 'Content-Type': 'application/json' },
});
