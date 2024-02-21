import { City } from "../models/city-data";

export class FetchCurrentConditions {
    static readonly type = '[App] FetchCurrentConditions';

    constructor(public key: number) { }
}

export class FetchCities {
    static readonly type = '[App] FetchCities';

    constructor(public city: string) { }
}

export class SaveCityToFavorites {
    static readonly type = '[App] SaveCityToFavorites';

    constructor(public city: City) { }
}

export class ClearCities {
    static readonly type = '[App] ClearCities';
}
