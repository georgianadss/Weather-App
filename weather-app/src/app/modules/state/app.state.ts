import { State } from "@ngxs/store";
import { TopCityList } from "../../services/locations.service";
import { Injectable } from "@angular/core";

export interface AppStateModel {
    topCitiesList?: TopCityList[];
};

@State<AppStateModel>({
    defaults: {
        topCitiesList: [],
    },
    name: "AppState",
})

@Injectable()
export class AppState {
    constructor() {};
}