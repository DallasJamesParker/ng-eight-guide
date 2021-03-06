import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../../services/alerts/alerts.service';
import { AlertMessageType } from '../../../variables/enums/alertTypes';


@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  public warningMessage: string;

  constructor(private alert: AlertsService) { }

  ngOnInit() {
    this.alert.currentMessage.subscribe(alert => {
      if (alert.type === AlertMessageType.WARNING) {
        this.warningMessage = alert.message;
      } else {
        this.warningMessage = '';
      }
    });
  }

}
