
export type Book = {
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
    title: string;
  }

export type BookListItem = {
  book: Book;
  quantity: number
}

