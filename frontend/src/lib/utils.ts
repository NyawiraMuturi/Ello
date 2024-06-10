import {Book} from './types'

type ReadingLevelMap = {
    [readingLevel: string]: Book[];
  };
export function aggregateProductsByCategory(books: Book[]): ReadingLevelMap {
    const readingLevels: ReadingLevelMap = {};
    books.forEach(book => {
      if (readingLevels[book.readingLevel]) {
        readingLevels[book.readingLevel].push(book);
      } else {
        readingLevels[book.readingLevel] = [book];
      }
    });
    return readingLevels;
  }