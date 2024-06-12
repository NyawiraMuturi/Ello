import { createContext, ReactNode, useContext } from "react";
import { Book, BookListItem } from "../types";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type BookListProviderProps = {
    children: ReactNode;
};

type BookListContext = {
    getBookQuantity: (title: string, author: string) => number;
    increaseBookQuantity: (book: Book) => void;
    removeBook: (title: string, author: string) => void;
    clearBooks: () => void;
    totalQuantity: number;
    listItems: BookListItem[];
};

const BookListContext = createContext({} as BookListContext);

export const useBookList = () => useContext(BookListContext);

export const BookListProvider = ({ children }: BookListProviderProps) => {
    const [listItems, setListItems] = useLocalStorage<BookListItem[]>("book-list", []);

    const findBookKey = (title: string, author: string) => `${title}-${author}`;

    const getBookQuantity = (title: string, author: string) => {
        const key = findBookKey(title, author);
        return listItems.find(item => findBookKey(item.book.title, item.book.author) === key)?.quantity || 0;
    };

    const increaseBookQuantity = (book: Book) => {
        setListItems(currentItems => {
            const key = findBookKey(book.title, book.author);
            const existingItem = currentItems.find(item => findBookKey(item.book.title, item.book.author) === key);
            if (!existingItem) {
               
                return [...currentItems, { book, quantity: 1 }];
            } else {
                return currentItems;
            }
        });
    };


    const removeBook = (title: string, author: string) => {
        const key = findBookKey(title, author);
        setListItems(currentItems => currentItems.filter(item => findBookKey(item.book.title, item.book.author) !== key));
    };

    const clearBooks = () => {
        setListItems([]);  
    };

    const totalQuantity = listItems.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <BookListContext.Provider value={{
            getBookQuantity,
            increaseBookQuantity,
            removeBook,
            clearBooks,
            totalQuantity,
            listItems
        }}>
            {children}
        </BookListContext.Provider>
    );
};