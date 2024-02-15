import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { authInterceptor } from "./app.interceptor";

export const httpInterceptorProviders = [
    {
        provide: HTTP_INTERCEPTORS, 
        useClass: authInterceptor, 
        multi: true,
    }
]
