import { Action, Selector, State, StateContext } from "@ngxs/store";
import { LocationsService } from "../../services/locations.service";
import { Injectable } from "@angular/core";
import { CurrentCondition } from "../models/current-conditions";
import { ClearCities, FetchCities, FetchCurrentConditions, FetchLocation, FetchLoginData, RemoveFavoriteCity, SaveCityToFavorites } from "./app.actions";
import { catchError, tap, throwError } from "rxjs";
import { TopCityList } from "../models/top-city-list";
import { City, CityDetails } from "../models/city-data";
import { LocationForecastData } from "../models/location-forecasts";
import { LoginResponse } from "../models/login-data";


export interface AppStateModel {
    topCitiesList?: TopCityList[];
    currentConditions?: CurrentCondition[];
    cities?: CityDetails[] | null;
    favoriteCities?: City[];
    location?: LocationForecastData;
    loginResponse?: LoginResponse;
};

@State<AppStateModel>({
    defaults: {
        topCitiesList: [],
        favoriteCities: [],
    },
    name: "AppState",
})

@Injectable()
export class AppState {

    constructor(private locationService: LocationsService,) { }

    @Selector()
    static currentConditions(state: AppStateModel) {
        return state.currentConditions;
    }

    @Selector()
    static cities(state: AppStateModel) {
        return state.cities;
    }

    @Selector()
    static favoriteCities(state: AppStateModel) {
        return state.favoriteCities;
    }

    @Selector()
    static location(state: AppStateModel) {
        return state.location;
    }

    @Selector() 
    static login(state: AppStateModel) {
        return state.loginResponse;
    }


    @Action(FetchLoginData)
    fetchLoginData(
        { patchState }: StateContext<AppStateModel>,
        { loginData }: FetchLoginData,
    ) {
        return this.locationService.getLoginDetails(loginData).pipe(
            tap(response => {
            patchState({
                loginResponse: response,
            })
        }),
        catchError(e => throwError(() => e))
        )
    }

    @Action(FetchCurrentConditions)
    fetchCurrentConditions(
        { patchState }: StateContext<AppStateModel>,
        { key }: FetchCurrentConditions,
    ) {
        return this.locationService.getCurrentCondition(key).pipe(tap({
            next: (currentConditions) => {
                patchState({
                    currentConditions
                })
            },
            error: (e) => console.error(e)
        }))
    }

    @Action(FetchCities)
    fetchCities(
        { patchState }: StateContext<AppStateModel>,
        { city }: FetchCities,
    ) {
        return this.locationService.getCityData(city).pipe(tap({
            next: (cities) => {
                patchState({
                    cities,
                })
            },
            error: (e) => { console.error(e) }
        }))
    }

    @Action(SaveCityToFavorites)
    saveCityToFavorites(
        { patchState, getState }: StateContext<AppStateModel>,
        { city }: SaveCityToFavorites,
    ) {
        const saveCityToFavorites: City[] = getState().favoriteCities || [];
        saveCityToFavorites.push(city);
        return patchState({ favoriteCities: saveCityToFavorites })
    }

    @Action(RemoveFavoriteCity)
    removeFavoriteCity(
        { patchState, getState }: StateContext<AppStateModel>,
        { key }: RemoveFavoriteCity,
    ) {
       const {favoriteCities} = getState();
       const newList = favoriteCities?.filter(city => city.key !== key);
        return patchState({ favoriteCities: newList });
    }

    @Action(ClearCities)
    clearCities(
        { patchState }: StateContext<AppStateModel>) {
        patchState({ cities: null })
    }

    @Action(FetchLocation)
    fetchLocation(
        { patchState}: StateContext<AppStateModel>,
        { key }: FetchLocation,
    ) {
      return this.locationService.getLocation(key).pipe(tap((data) => {
        patchState({location: data})
      }))
    }
}
