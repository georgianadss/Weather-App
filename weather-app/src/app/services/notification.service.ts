import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from "../modules/app/components/snackbar/snackbar.component";

export enum SnackBarType {
    SUCCESS = 'snackbar-success',
    FAIL = 'snackbar-fail',
    WARNING = 'snackbar-warning',
}

@Injectable({
    providedIn: 'root'
})

export class NotificationService {
    readonly DURATION: number = 5000;

    constructor(protected snackBar: MatSnackBar) { }

    success(translationKey: string, params: object = {}) {
        return this.notify(translationKey, SnackBarType.SUCCESS, params);
    }

    fail(translationKey: string, params: object = {}) {
        return this.notify(translationKey, SnackBarType.FAIL, params);
    }

    warning(translationKey: string, params: object = {}) {
        return this.notify(translationKey, SnackBarType.WARNING, params);
    }

    private notify(translationKey: string, snackBarType: SnackBarType, params: object = {}): any {
        const message: string = translationKey;
        return this.snackBar.openFromComponent(SnackbarComponent, {
            data: { message, snackBarType, },
            duration: this.DURATION,
        })
    }
}
