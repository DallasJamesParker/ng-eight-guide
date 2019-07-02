import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../../services/alerts/alerts.service';
import { AlertMessageType } from '../../../variables/enums/alertTypes';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

  private serverName: string;
  private serverStatus: number;
  private isStringEmpty: boolean;

  constructor(private alertService: AlertsService) {
  }

  ngOnInit(): void {
    this.getServerStatus();
    this.isStringEmpty = false;
  }

  getServerStatus() {
    this.serverName = 'Default Server Name';
    this.serverStatus = 200;
  }

  onKeystroke() {
    if (this.serverName === '' || !this.serverStatus) {
      this.isStringEmpty = true;
    } else {
      this.isStringEmpty = false;
    }
  }

  onCreateServer() {
    alert('Server Created!');
  }

  onButtonClick() {
    switch (this.serverStatus) {
      case 200: {
        const priority = 4;
        const message = 'Status 200: Online';
        const messageType = AlertMessageType.SUCCESS;
        this.alertService.changeMessage(messageType, message, priority);
        break;
      }
      case 400: {
        const priority = 3;
        const message = 'Status 400: Forbidden';
        const messageType = AlertMessageType.WARNING;
        this.alertService.changeMessage(messageType, message, priority);
        break;
      }
      case 404: {
        const priority = 3;
        const message = 'Status 404: Not Found';
        const messageType = AlertMessageType.WARNING;
        this.alertService.changeMessage(messageType, message, priority);
        break;
      }
      case 500: {
        const priority = 2;
        const message = 'Status 200: Internal Server Error';
        const messageType = AlertMessageType.FAILURE;
        this.alertService.changeMessage(messageType, message, priority);
        break;
      }
      default: {
        const priority = 1;
        const message = 'FATAL ERROR - A VIRUS HAS BEEN DETECTED IN YOUR SYSTEM TRAY - EXPORTING ALL PERSONAL DATA OFFSHORES';
        const messageType = AlertMessageType.FAILURE;
        this.alertService.changeMessage(messageType, message, priority);
      }
    }
  }
}
