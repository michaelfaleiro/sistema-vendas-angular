import { Component } from '@angular/core';
import { OrcamentoService } from '../../../services/orcamentos/orcamento.service';
import { Observable } from 'rxjs';
import { IOrcamento } from '../../../Interfaces/IOrcamento';
import { MessageService } from '../../../services/messages/message.service';
import { CardOrcamentoComponent } from '../card-orcamento/card-orcamento.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-orcamento',
  standalone: true,
  imports: [CardOrcamentoComponent, CommonModule],
  templateUrl: './home-orcamento.component.html',
  styleUrl: './home-orcamento.component.css',
})
export class HomeOrcamentoComponent {
  orcamentos$ = new Observable<IOrcamento[]>();

  constructor(
    private orcamentoService: OrcamentoService,
    private message: MessageService
  ) {}

  ngOnInit(): void {
    try {
      this.getOrcamentos();
    } catch (error) {
      this.message.add('Falha ao carregar os orçamentos.', 'danger');
    }
  }
  getOrcamentos() {
    this.orcamentos$ = this.orcamentoService.getAll();
  }
}
