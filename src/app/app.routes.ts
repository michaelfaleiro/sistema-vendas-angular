import { Routes } from '@angular/router';
import { HomeOrcamentoComponent } from './pages/orcamento/home-orcamento/home-orcamento.component';
import { NovoOrcamentoComponent } from './pages/orcamento/novo-orcamento/novo-orcamento.component';

export const routes: Routes = [
  {
    path: 'orcamentos',
    component: HomeOrcamentoComponent,
    title: 'Orçamentos',
  },
  {
    path: 'novo-orcamento',
    component: NovoOrcamentoComponent,
    title: 'Novo Orçamento',
  },
];
