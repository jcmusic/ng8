import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.queryParams);
    // console.log(this.route.snapshot.fragment);
    // const allowEdit = this.route.params['allowEdit'];
    // console.log('allowEdit: ' + allowEdit);
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.allowEdit = params['allowEdit'] === '1' ? true : false;
      }
    );
    this.route.fragment.subscribe();
    const id = +this.route.snapshot.params['id'];
    console.log('Init id: '+ id);

  // subsrcibe route params to update the id if params change
    this.server = this.serversService.getServer(id);
    console.log(JSON.stringify(this.server));
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], 
      {
        relativeTo: this.route, 
        queryParamsHandling: 'preserve'
      }
    );
  }

  canDeactivate() : Observable<boolean> | Promise<boolean> | boolean {
    if(!this.allowEdit){
      return true;
    }
    if((this.serverName !== this.server.name || this.serverStatus !== this.server.status) &&
      !this.changesSaved) {
        return confirm('Do you want to discard the changes?')
      } else {
        return true;
      }
  }
}
