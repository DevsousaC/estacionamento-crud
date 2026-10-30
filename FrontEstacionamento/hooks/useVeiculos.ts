import { useCallback, useEffect, useState } from 'react';
import { api } from '../constants/api';

export type Veiculo = {
  id_veiculo: number;
  placa: string;
  ano: number;
  mensalidade: string | number;
  fk_proprietario: number;
};

export type VeiculoInput = Omit<Veiculo, 'id_veiculo'>;

// Lógica reutilizável do CRUD de veículos (consultar, cadastrar, alterar e excluir)
export function useVeiculos(refresh?: string) {
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);

  // GET /veiculo
  const carregar = useCallback(async () => {
    try {
      const response = await api.get<Veiculo[]>('/veiculo');
      setVeiculos(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    carregar();
  }, [carregar, refresh]);

  // POST /veiculo
  const cadastrar = async (dados: VeiculoInput) => {
    await api.post('/veiculo', dados);
  };

  // PUT /veiculo/:id
  const alterar = async (id: number | string, dados: VeiculoInput) => {
    await api.put(`/veiculo/${id}`, dados);
  };

  // DELETE /veiculo/:id
  const excluir = async (id: number) => {
    try {
      await api.delete(`/veiculo/${id}`);
      carregar();
    } catch (error) {
      console.log(error);
    }
  };

  return { veiculos, carregar, cadastrar, alterar, excluir };
}
