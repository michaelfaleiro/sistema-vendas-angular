export interface IItemOrcamento {
  id: number;
  produtoId: number;
  sku: string;
  nome: string;
  quantidade: number;
  precoUnitario: number;
  createdAt: Date;
  updatedAt: Date;
}
