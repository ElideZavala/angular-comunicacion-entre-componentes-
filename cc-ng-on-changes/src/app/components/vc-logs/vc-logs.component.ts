import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnInit, OnChanges {
  @Input() vName;
  logs: string[] = [];
  constructor() { }

  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void {

    // Actual valor de vName
    const currValue = changes.vName.currentValue;

    // si este es el primer cambio obtenemos un true. Si no, obtenemos un false
    // si este es el primer cambio mostramos el mensaje.
    if (changes.vName.isFirstChange()) {
      this.logs.push(`initial version is ${currValue.trim()}`);
    } else {
      // si vName es cambiado, se obtiene el valor actual
      // Se actualiza cada que ha cambiado.
      this.logs.push(`changed to ${currValue.trim()}`);
    }
  }

}
