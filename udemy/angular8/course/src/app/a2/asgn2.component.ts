import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-asgn2',
    templateUrl: './asgn2.component.html',
    styleUrls: []
})

export class Asgn2 implements OnInit {

    username: string;

    constructor(){}

    ngOnInit() {
    }

    nameIsEmpty(){
        return this.username==='' ? true : false;
    }
    resetName(){
        this.username='';
    }
}