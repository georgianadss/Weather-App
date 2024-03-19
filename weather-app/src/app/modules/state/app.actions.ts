import { City } from "../models/city-data";
import { Login } from "../models/login-data";

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

export class RemoveFavoriteCity {
    static readonly type = '[App] RemoveFavoriteCity';

    constructor(public key: string) { };
}

export class ClearCities {
    static readonly type = '[App] ClearCities';
}

export class FetchLocation {
    static readonly type = '[App] FetchLocation';

    constructor(public key: string) { };
}

export class FetchLoginData {
    static readonly type = '[App] FetchFormData';

    constructor(public loginData: Login) { }
}