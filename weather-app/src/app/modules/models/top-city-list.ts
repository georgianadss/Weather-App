export interface TopCityList {
    Key: number,
    Region: {
     ID: string,
     LocalizedName: string,
    },
    Country: {
     ID: string,
     LocalizedName: string,
    },
    TimeZone: {
     Code: string,
     Name: string,
     GmtOffset: number,
   },
   GeoPosition: {
     Latitude: number,
     Longitude: number,
   }
 }