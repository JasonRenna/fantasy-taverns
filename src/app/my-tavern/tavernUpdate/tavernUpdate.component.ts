import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyTavernService, room } from '../my-tavern.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-tavern-update',
    templateUrl: './tavernUpdate.component.html',
})
export class TavernUpdateComponent implements OnInit {
 
    // Dynamic parameters for this component's route: /example-params/:first/:second
    //routeParams: Params;

    // Query parameters found in the URL: /example-params/one/two?query1=one&query2=two
    //queryParams: Params;

    constructor(private TavernService: MyTavernService, private router: Router, private activatedRoute : ActivatedRoute) {
        //this.getRouteParams();
    }

    ngOnInit() {
    }
    
    // Store parameter values on URL changes
    ///getRouteParams() {

        // Route parameters
        //this.activatedRoute.params.subscribe( params => {
        //    this.routeParams = params;
        //});
    
        // URL query parameters
        //this.router.queryParams.subscribe( params => {
        //    this.queryParams = params;
        //});
    //}

    updateRoom(TavernForm: NgForm): void {
        console.log('component');
        if (TavernForm.valid) {
            console.log('comp form valid');
            this.TavernService.updateRoom(TavernForm.value).subscribe((_room) => {
                console.log('comp TServe');
                this.router.navigateByUrl('/my-tavern');
            });
        }
    }
}