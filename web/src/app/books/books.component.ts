import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Book } from './book';

@Component({
  selector: 'book-list',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  allBooks: Book[];

  bookCount: number;

  isLoadingBooks: boolean;

  constructor(
    private bookService: BooksService
  ) { }

  ngOnInit() {
    this.retrieveBooks();
  }

  private retrieveBooks(): void {
    this.allBooks = [];
    this.bookCount = 0;
    this.isLoadingBooks = true;
    this.bookService.books.subscribe(
      ( books: Book[] ) => {
        // handle each page of books here.
        books.forEach( ( book: Book ) => this.allBooks.push( book ) );
        this.bookCount += books.length;
      },
      ( error: any ) => {
        // handle errors here.
        console.error( error );
      },
      () => {
        // Finished loading books.
        this.isLoadingBooks = false;
      }
    );
  }

}
