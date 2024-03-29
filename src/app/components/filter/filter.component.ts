import { Component } from '@angular/core';

interface Actives {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  actives: Actives[] = [
    {value: 'Ativo', viewValue: 'ativo'},
    {value: 'Inativo', viewValue: 'inativo'},
  ];
}
