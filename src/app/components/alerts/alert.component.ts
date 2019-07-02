import { Component, OnInit } from '@angular/core';

// @Component
@Component({
  selector: 'app-alerts',
  templateUrl: './alert.component.html',
})
// Export
export class AlertComponent implements OnInit {
  public warning: boolean;
  public success: boolean;

  ngOnInit(): void {
    this.success = true;
    this.warning = true;
  }
}
