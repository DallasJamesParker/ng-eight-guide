import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../services/alerts/alerts.service';
import { AlertMessageType } from '../../variables/enums/alertTypes';

// @Component
@Component({
  selector: 'app-alerts',
  templateUrl: './alert.component.html',
})
// Export
export class AlertComponent implements OnInit {
  public warning: boolean;
  public success: boolean;
  public failure: boolean;

  constructor(private alert: AlertsService) {}

  ngOnInit(): void {
    this.alert.currentMessage.subscribe(alert => {
      if (alert.type === AlertMessageType.SUCCESS) {
        this.success = true;
        this.warning = false;
        this.failure = false;
      } else if (alert.type === AlertMessageType.WARNING) {
        this.success = false;
        this.warning = true;
        this.failure = false;
      } else if (alert.type === AlertMessageType.FAILURE) {
        this.success = false;
        this.warning = false;
        this.failure = true;
      }
    });

  }
}
