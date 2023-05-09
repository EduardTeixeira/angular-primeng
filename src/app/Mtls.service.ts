import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MtlsService {

    constructor(
    ) { }

    applyHeaders(mtls: boolean, mtlsData?: any): Observable<any> {

        console.log('applyHeaders');
        console.log({ mtls, mtlsData });

        let headers: any;

        return new Observable(observer => {

            headers['Access-Id'] = 'accessId';
            headers['Access-Time'] = `ds`;
            headers['Access-Origin'] = 'origin';
            headers['Access-Signature'] = 'sign';

            observer.next(headers);
        })

    }

}
