import { IVeiculo } from './IVeiculo';

export interface ICliente {
  id: number;
  nome: string;
  telefone: string;
  veiculoid: IVeiculo[];
  veiculo: IVeiculo[];
  createdAt: Date;
  updatedAt: Date;
}
