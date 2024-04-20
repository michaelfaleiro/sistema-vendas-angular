import { Component } from '@angular/core';
import { ICliente } from '../../../Interfaces/ICliente';
import {
  Observable,
  catchError,
  debounceTime,
  distinctUntilChanged,
  of,
  switchMap,
} from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from '../../../services/clientes/cliente.service';
import { CommonModule } from '@angular/common';
import { IVeiculo } from '../../../Interfaces/IVeiculo';

@Component({
  selector: 'app-novo-orcamento',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './novo-orcamento.component.html',
  styleUrl: './novo-orcamento.component.css',
})
export class NovoOrcamentoComponent {
  isModalBuscarCliente: boolean = false;
  clienteSearch = new FormControl();
  clientes$ = new Observable<ICliente[]>();
  carros$ = new Observable<IVeiculo[]>();
  carroSelecionado: string = '';

  nome = new FormControl();
  telefone = new FormControl();
  carro = new FormControl();
  placa = new FormControl();
  chassi = new FormControl();

  constructor(private clienteService: ClienteService) {}

  showModal() {
    this.isModalBuscarCliente = !this.isModalBuscarCliente;
  }

  ngOnInit() {
    this.searchCliente();
    this.nome.disable();
    this.telefone.disable();
  }

  searchCliente() {
    this.clientes$ = this.clienteSearch.valueChanges.pipe(
      debounceTime(600),
      distinctUntilChanged(),
      switchMap((searchTerm) => {
        if (searchTerm.trim() === '') {
          return of([]);
        } else {
          return this.clienteService
            .getByTelefone(searchTerm)
            .pipe(
              catchError(() =>
                of([{ nome: 'Não encontrado', telefone: '' }] as ICliente[])
              )
            );
        }
      })
    );
  }

  selecionarCliente(cliente: ICliente) {
    this.clienteService.getById(cliente.id.toString()).subscribe((response) => {
      this.clientes$ = new Observable<ICliente[]>();
      this.clienteSearch.setValue('');
      this.nome.setValue(response.nome);
      this.telefone.setValue(response.telefone);
      this.carros$ = of([...response.veiculo]);
      this.searchCliente();
    });
  }

  selecionarCarro(event: any) {
    if (event.target) {
      const carroId: string = event.target.value;
      this.carros$.subscribe((carros) => {
        const carroSelecionado = carros.find((carro) => carro.id === carroId);
        if (carroSelecionado) {
          this.placa.setValue(carroSelecionado.placa);
          this.chassi.setValue(carroSelecionado.chassi);
        }
      });
    }
  }
}
