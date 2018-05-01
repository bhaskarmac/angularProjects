import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = false;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created and name is ' + this.serverName;
  }

  onUpdateServername(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    console.log(event.target.value);
  }

}
