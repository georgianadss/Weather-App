import { Action, Selector, State, StateContext } from "@ngxs/store";
import { LocationsService, TopCityList } from "../../services/locations.service";
import { Injectable } from "@angular/core";
import { CurrentCondition } from "../models/current-conditions";
import { FetchCurrentConditions } from "./app.actions";
import { tap } from "rxjs";

export interface AppStateModel {
    topCitiesList?: TopCityList[];
    currentConditions?: CurrentCondition[];
};

@State<AppStateModel>({
    defaults: {
        topCitiesList: [],
    },
    name: "AppState",
})

@Injectable()
export class AppState {
    constructor(private locationService: LocationsService,) {}

@Selector()
static currentConditions(state: AppStateModel) {
    return state.currentConditions;
}

@Action(FetchCurrentConditions) 
fetchCurrentConditions(
    {patchState}: StateContext<AppStateModel>,
    {key}: FetchCurrentConditions,
) {
    return this.locationService.getCurrentCondition(key).pipe(tap({
        next: (response) => {
            patchState({
                currentConditions: response,
            }) 
        },
        error: (e) => {console.error(e)}
    }))
}

}