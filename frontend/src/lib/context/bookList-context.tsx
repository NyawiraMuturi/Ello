import { createContext, ReactNode, useContext } from "react"
import { BookListItem } from "../types";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type BookListProviderProps = {
    children: ReactNode
  }
  
  type BookListContext = {
    getListQuantity: (id: number) => number
    increaseListQuantity: (id: number) => void
    decreaseListQuantity: (id: number) => void
    removeBook: (id: number) => void
    listQuantity: number
    listItems: BookListItem[]
  }
  
  const BookListContext = createContext({} as BookListContext)
  
  export const useCart = () => useContext(BookListContext)
  
  export const BookListProvider = ({ children }: BookListProviderProps) => {
    const [listItems, setListItems] = useLocalStorage<BookListItem[]>(
      "shopping-cart", [])
  
    const getListQuantity = (id: number) => {
      return listItems.find(item => item.id === id)?.quantity || 0
    }
  
    const increaseListQuantity = (id: number) => {
        setListItems(currItems => {
        if (currItems.find(item => item.id === id) == null) {
          return [...currItems, { id, quantity: 1 }]
        } else {
          return currItems.map(item => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity + 1 }
            } else {
              return item
            }
          })
        }
      })
    }
  
    const decreaseListQuantity = (id: number) => {
        setListItems(currItems => {
        if (currItems.find(item => item.id === id)?.quantity === 1) {
          return currItems.filter(item => item.id !== id)
        } else {
          return currItems.map(item => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 }
            } else {
              return item
            }
          })
        }
      })
    }
  
    const removeBook =(id: number)=>{
        setListItems(currItems => {
        return currItems.filter(item => item.id !== id)
      })
    }
  
    const listQuantity = listItems.reduce(
      (quantity, item) => item.quantity + quantity,0
    )
  
  
    return (
      <BookListContext.Provider value={{
        getListQuantity,
        increaseListQuantity,
        decreaseListQuantity,
        removeBook,
        listQuantity,
        listItems
      }}>
        {children}
      </BookListContext.Provider>
    )
  }