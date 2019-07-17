import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  paramSubscription: Subscription;  // Ng does this automatically here - example for other Observables.

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id : this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name']
    };
    this.paramSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }
  ngOnDestroy(){
    this.paramSubscription.unsubscribe();  // Ng does this automatically here - example for other Observables.
  }
}
