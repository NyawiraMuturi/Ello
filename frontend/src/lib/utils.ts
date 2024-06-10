import {Book} from './types'

type ReadingLevelMap = {
    [readingLevel: string]: Book[];
  };
export function aggregateBooksByLevel(books: Book[]): ReadingLevelMap {
    const readingLevels: ReadingLevelMap = {'All Books': [...books]};
    books.forEach(book => {
      if (readingLevels[book.readingLevel]) {
        readingLevels[book.readingLevel].push(book);
      } else {
        readingLevels[book.readingLevel] = [book];
      }
    });
    return readingLevels;
  }