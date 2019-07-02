import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../../services/alerts/alerts.service';
import { AlertMessageType } from '../../../variables/enums/alertTypes';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  public successMessage: string;

  constructor(private alert: AlertsService) { }

  ngOnInit() {
    this.alert.currentMessage.subscribe(alert => {
      if (alert.type === AlertMessageType.SUCCESS) {
        this.successMessage = alert.message;
      } else {
        this.successMessage = '';
      }
    });
  }

}
