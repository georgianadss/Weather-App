import { HttpInterceptorFn } from "@angular/common/http";
import { tap } from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
    
    const apiUrl = 'http://dataservice.accuweather.com';

    // if (req.url.startsWith(apiUrl)) {
    //     const headers = req.headers.set('Authorization', 'Bearer Auth-1234567');

    //     req = req.clone({
    //         headers
    //     });

    // }

    return next(req).pipe(
        tap(resp => resp.type)
    );
}
