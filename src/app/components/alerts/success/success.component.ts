import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../../services/alerts/alerts.service';
import { AlertMessageType } from '../../../variables/enums/alertTypes';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  public successMessage: string;

  constructor(private alert: AlertsService) { }

  ngOnInit() {
    this.alert.currentMessage.pipe(filter((alert) => alert.type === AlertMessageType.SUCCESS)).subscribe(alert => {
      this.successMessage = alert.message;
    });
  }

}
