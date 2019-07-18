import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server {
    id: number, 
    name: string, 
    status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server>{
    resolve(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): 
            Server | Observable<Server> | Promise<Server> {
        // throw new Error("Method not implemented.");
        return this.serverService.getServer(+route.params['id']);
    }

    constructor(private serverService: ServersService) {}
}