import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  // Sera inicializado con un valor 0, el cual sera solo en este documento
  private count: BehaviorSubject<number> = new BehaviorSubject<number>(10);
  // El valor de count sera asignado a count$ el cual sera publico y  observable
  count$: Observable<number> = this.count.asObservable();

  constructor() { }

  setCount(countValue: number) {
    this.count.next(countValue);
  }
}
