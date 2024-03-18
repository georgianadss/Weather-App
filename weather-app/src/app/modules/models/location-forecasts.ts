
export interface LocationForecastData {
  DailyForecasts: DailyForecasts[] | [] | undefined;
  Headline: HeadLine | undefined;
}

interface DailyForecasts {
    Date: string
    Temperature: {
        Minimum: {
            Value: number,
            Unit: string,
            UnitType: number,
        }
        Maximum: {
            Value: number,
            Unit: string,
            UnitType: number, 
        }
    },
    Day: {
        Icon: number,
        IconPhrase: string,
        HasPrecipitation: boolean,
        PrecipitationType: string,
        PrecipitationIntensity: string,
    },
    Night: {
        Icon: number,
        IconPhrase: string,
        HasPrecipitation: boolean,
    } 
}

interface HeadLine {
        EffectiveDate: string,
        Severity: number,
        Text: string,
        Category: string,
        EndDate: string,   

}