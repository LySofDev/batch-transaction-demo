import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY, Observer, BehaviorSubject, Subject, OperatorFunction, MonoTypeOperatorFunction, ReplaySubject } from 'rxjs';
import { map, flatMap, tap, takeWhile } from 'rxjs/operators';

import { Book } from './book';
import { GetBooksResponse } from './get-books.response';
import { BatchRequestService } from './batch-request.service';

const GET_BOOKS_URL: string = 'http://localhost:3001/books';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private batchRequests: BatchRequestService
  ) { }

  get books(): Observable<Book[]> {
    return this.batchRequests.fetchResources<Book>( GET_BOOKS_URL );
  }

}
