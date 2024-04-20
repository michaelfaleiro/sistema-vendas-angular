import { Component, Input } from '@angular/core';
import { IOrcamento } from '../../../Interfaces/IOrcamento';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-orcamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-orcamento.component.html',
  styleUrl: './card-orcamento.component.css',
})
export class CardOrcamentoComponent {
  @Input() orcamento: IOrcamento = <IOrcamento>{};
}
