import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAlertMessage } from '../../interfaces/alertMessages';
import { AlertMessageType } from '../../variables/enums/alertTypes';

@Injectable({ providedIn: 'root' })

export class AlertsService {
  private messageSource = new BehaviorSubject<IAlertMessage>({} as any);
  public currentMessage = this.messageSource.asObservable();
  constructor() {}

  changeMessage(type: AlertMessageType, message: string, priority: number) {
    this.messageSource.next({
      type,
      message,
      priority,
    });




  }
}
