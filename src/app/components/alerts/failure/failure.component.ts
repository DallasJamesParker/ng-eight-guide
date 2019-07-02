import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../../services/alerts/alerts.service';
import { AlertMessageType } from '../../../variables/enums/alertTypes';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.css']
})
export class FailureComponent implements OnInit {

  public failureMessage: string;

  constructor(private alert: AlertsService) { }

  ngOnInit() {
    this.alert.currentMessage.pipe(filter((alert) => alert.type === AlertMessageType.FAILURE)).subscribe(alert => {
      this.failureMessage = alert.message;
    });
  }

}
