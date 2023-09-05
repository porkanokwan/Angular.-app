import { Component } from '@angular/core';

@Component({
  // selector: 'app-service',
  // selector: '[app-service]', // กำหนด selector แบบ attribute
  selector: '.app-service', // กำหนด selector แบบ Class
  templateUrl: './service.component.html',
  // template:
  //   '<p style="color: blueviolet;">service Component works!</p><hr/><app-server></app-server>',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server creation';
  serverName = 'Test Name';
  isServerCreate = false;
  serverNameArr = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.isServerCreate = true;
    this.serverNameArr.push(this.serverName);
    this.serverCreationStatus =
      'Server was created, Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value; // บอก type html element
  }
}
