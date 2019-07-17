import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  idParam: number;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const sid = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(sid);
    console.log('Server: ' + JSON.stringify(this.server));

    this.route.params  
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(+params['id']);
          console.log('Server changed: ' + JSON.stringify(this.server));
        }
      );

    // console.log(this.route.params['id']);
    // console.log(this.route.params);
    // this.server = this.serversService.getServer(1);
  }

}
