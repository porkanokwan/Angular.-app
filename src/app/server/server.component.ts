import { Component } from '@angular/core';

// ใช้กำหนดข้อมูลสำคัญ
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .app-online: {
        color: white;
      }
    `,
  ],
})
export default class ServerComponent {
  serverId = 10;
  serverName = 'online';

  constructor() {
    this.serverName = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverName;
  }

  getColor() {
    return this.serverName === 'online' ? 'green' : 'red';
  }
}
