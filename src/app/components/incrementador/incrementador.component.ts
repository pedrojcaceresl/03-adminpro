import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css'],
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso: number = 50;
  @Input() btnClass: string = 'btn-primary';

  @Output() onChangeProgreso: EventEmitter<number> = new EventEmitter();

    ngOnInit(): void {

      this.btnClass = `btn ${ this.btnClass }`;
    }

  cambiarValor(valor: number): any {
    if (this.progreso >= 100 && valor >= 0) {
      this.onChangeProgreso.emit(100);
      return (this.progreso = 100);
    }

    if (this.progreso <= 0 && valor < 0) {
      this.onChangeProgreso.emit(0);

      return (this.progreso = 0);
    }

    this.progreso = this.progreso + valor;
    this.onChangeProgreso.emit(this.progreso);
  }
}
