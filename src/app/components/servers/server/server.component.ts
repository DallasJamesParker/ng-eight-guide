import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit {

  private serverName: string;
  private serverStatus: string;
  private isStringEmpty: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.getServerStatus();
    this.isStringEmpty = false;
  }

  getServerStatus() {
    this.serverName = 'Default Server Name';
    this.serverStatus = '200';
  }

  onKeystroke() {
    if (this.serverName === '' || this.serverStatus === '') {
      this.isStringEmpty = true;
    } else {
      this.isStringEmpty = false;
    }
  }

  onCreateServer() {
    alert('Server Created!');
  }
}
