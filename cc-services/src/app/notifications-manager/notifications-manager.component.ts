import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.scss']
})
export class NotificationsManagerComponent implements OnInit {

  notificationsCount$: Observable<number>;
  constructor(private notificationsService: NotificationsService) { }

  ngOnInit(): void {
    this.notificationsCount$ = this.notificationsService.count$;
  }

  getCountValue(callback) { // <-- callback es una funcion que se ejecuta cuando se llama a esta funcion
    this.notificationsCount$
      .pipe(
        first() // <-- Aqui se usa el operador first() para obtener el primer valor del observable
      ).subscribe(callback);
  }

  addNotification() {
    this.getCountValue((countValue) => {
      this.notificationsService.setCount(++countValue);
    })
  }

  removeNotification() {
    this.getCountValue((countValue) => {
      if (countValue === 0) {
        return
      }

      this.notificationsService.setCount(--countValue);
    })
  }

  resetCount() {
    this.notificationsService.setCount(0);
  }

}
