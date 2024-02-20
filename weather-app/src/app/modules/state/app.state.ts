import { Action, Selector, State, StateContext } from "@ngxs/store";
import { LocationsService } from "../../services/locations.service";
import { Injectable } from "@angular/core";
import { CurrentCondition } from "../models/current-conditions";
import { FetchCities, FetchCurrentConditions } from "./app.actions";
import { tap } from "rxjs";
import { TopCityList } from "../models/top-city-list";
import { CityData, CityDetails } from "../models/city-data";

export interface AppStateModel {
    topCitiesList?: TopCityList[];
    currentConditions?: CurrentCondition[];
    cities?: CityDetails[];

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

@Selector()
static cities(state: AppStateModel) {
    return state.cities;
}

@Action(FetchCurrentConditions) 
fetchCurrentConditions(
    {patchState}: StateContext<AppStateModel>,
    {key}: FetchCurrentConditions,
) {
    return this.locationService.getCurrentCondition(key).pipe(tap({
        next: (currentConditions) => {
            patchState({
                currentConditions
            })
        },
        error: (e) => {console.error(e)}
    }))
}

@Action(FetchCities) 
    fetchCities(
    {patchState}: StateContext<AppStateModel>,
    {city}: FetchCities,
) {
    return this.locationService.getCityData(city).pipe(tap({
        next: (cities) => {
            patchState({
                cities,
            })
        },
        error: (e) => {console.error(e)}
    }))
}
}
