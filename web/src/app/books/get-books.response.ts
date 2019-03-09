import { Book } from './book';

export interface GetBooksResponse {
    pageNumber: number;
    books: Book[];
}