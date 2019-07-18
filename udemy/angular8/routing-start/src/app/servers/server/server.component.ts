import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

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
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // const sid = +this.route.snapshot.params['id'];
    // if (sid){
    //   this.server = this.serversService.getServer(sid);
    //   console.log('Server: ' + JSON.stringify(this.server));
    // } else {
    //   this.server = this.serversService.getServer(1);
    // }

    // this.route.params  
    //   .subscribe(
    //     (params: Params) => {
    //       this.server = this.serversService.getServer(+params['id']);
    //       console.log('Server changed: ' + JSON.stringify(this.server));
    //     }
    //   );

    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      )
  }

  onEdit(){
    // let id = +this.route.params['id']
    // this.router.navigate([id, 'edit'], {relativeTo: this.route});
    this.router.navigate(['edit'], 
      {relativeTo: this.route,
        queryParamsHandling: 'preserve'
      });
  }
}
