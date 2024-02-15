export interface CurrentCondition {
    LocalObservationDateTime: string,
    EpochTime: number,
    WeatherText: string,
    WeatherIcon: number,
    HasPrecipitation: boolean,
    PrecipitationType: any,
    IsDayTime: boolean,
    Temperature: {
      Metric: {
        Metric: number,
        Unit: string,
        UnitType: number,
      },
      Imperial: {
        Value: number,
        Unit: string,
        UnitType: number
      }
    }, 
    MobileLink: string,
    Link: string
  }
  