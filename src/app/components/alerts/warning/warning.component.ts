import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../../services/alerts/alerts.service';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {

  public warningMessage: string;

  constructor(private alert: AlertsService) { }

  ngOnInit() {
    this.alert.currentMessage.subscribe(alert => this.warningMessage = alert.message);
  }

}
