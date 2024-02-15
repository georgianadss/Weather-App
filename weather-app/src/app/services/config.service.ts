import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngxs/store';



@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    //TODO: Create config type after creating the configJSON
    private appConfig: any;

    constructor(protected http: HttpClient, protected store: Store) { };

    get config(): any {
        return this.appConfig;
    }

    init() {
        // TODO: Create configJSON and replace the null
        this.appConfig = null;
    }
}
