import { ICliente } from './ICliente';
import { IItemOrcamento } from './IItemOrcamento';
import { IVeiculo } from './IVeiculo';

export interface IOrcamento {
  id: number;
  cliente: ICliente;
  veiculo: IVeiculo;
  itens: IItemOrcamento[];
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
