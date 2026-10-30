import { useCallback, useEffect, useState } from 'react';
import { api } from '../constants/api';

export type Proprietario = {
  id_proprietario: number;
  nome: string;
  cpf: string;
};

export type ProprietarioInput = Omit<Proprietario, 'id_proprietario'>;

// Lógica reutilizável do CRUD de proprietários (consultar, cadastrar, alterar e excluir)
export function useProprietarios(refresh?: string) {
  const [proprietarios, setProprietarios] = useState<Proprietario[]>([]);

  // GET /proprietario
  const carregar = useCallback(async () => {
    try {
      const response = await api.get<Proprietario[]>('/proprietario');
      setProprietarios(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    carregar();
  }, [carregar, refresh]);

  // POST /proprietario
  const cadastrar = async (dados: ProprietarioInput) => {
    await api.post('/proprietario', dados);
  };

  // PUT /proprietario/:id
  const alterar = async (id: number | string, dados: ProprietarioInput) => {
    await api.put(`/proprietario/${id}`, dados);
  };

  // DELETE /proprietario/:id
  const excluir = async (id: number) => {
    try {
      await api.delete(`/proprietario/${id}`);
      carregar();
    } catch (error) {
      console.log(error);
    }
  };

  return { proprietarios, carregar, cadastrar, alterar, excluir };
}
