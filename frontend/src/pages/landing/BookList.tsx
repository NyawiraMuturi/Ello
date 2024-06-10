import { useState, useEffect } from "react"
import { Box, Grid, Container} from "@mui/material"
import { fetchAllBooks } from "../../lib/constants"
import BookCard from "../../components/cards/BookCard"
import { Book } from "../../lib/types"


const BookList = () => {

  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await fetchAllBooks();
        setBooks(booksData);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);


  return (
    <Container>
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid item key={book.author} xs={12} sm={6} md={4}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default BookList