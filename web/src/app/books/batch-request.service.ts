import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from 'rxjs';
import { takeWhile, map, flatMap, tap } from 'rxjs/operators';
import { CollectionPageResponse } from './collection-page.response';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BatchRequestService {

    constructor(
        private http: HttpClient
    ) { }

    fetchResources<T>( baseUrl: string ): any {
        const nextUrl: ( page?: number ) => string = ( page: number = 0 ) => `${baseUrl}?page=${page + 1}`;
        const requests: Subject<string> = new BehaviorSubject<string>( nextUrl() );
        return requests.pipe(
            flatMap( ( url: string ) => this.http.get<CollectionPageResponse<T>>( url ) ),
            takeWhile( ( response: CollectionPageResponse<T> ) => response.records.length > 0 ),
            tap( ( response: CollectionPageResponse<T> ) => requests.next( nextUrl( response.pageNumber ) ) ),
            map( ( response: CollectionPageResponse<T> ) => response.records )
        );
    }

}