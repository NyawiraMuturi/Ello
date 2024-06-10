import { useState, useEffect } from "react"
import { Grid, Container, Box, Typography, Tabs, Tab, Button} from "@mui/material"
import { fetchAllBooks } from "../../lib/constants"
import BookCard from "../../components/cards/BookCard"
import { Book } from "../../lib/types"
import { aggregateBooksByLevel } from "../../lib/utils"

const INITIAL_BOOKS_PER_PAGE = 9;
const ADDITIONAL_BOOKS_PER_LOAD = 3;




const BookList = () => {

  const [books, setBooks] = useState<Book[]>([])
  const [groupedBooks, setGroupedBooks] = useState<{ [level: string]: Book[] }>({});
  const [selectedTab, setSelectedTab] = useState("All Books");
  const [booksPerPage, setBooksPerPage] = useState<{[key: string]: number}>({});

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await fetchAllBooks();
        setBooks(booksData);

        const grouped = aggregateBooksByLevel(booksData);
        setGroupedBooks(grouped);
        setGroupedBooks(grouped);
        const initialBooksPerPage = Object.keys(grouped).reduce((acc, key) => {
          acc[key] = INITIAL_BOOKS_PER_PAGE;
          return acc;
        }, {} as {[key: string]: number});
        setBooksPerPage(initialBooksPerPage);
        
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  const handleLoadMore = (level: string) => {
    setBooksPerPage(prev => ({
      ...prev,
      [level]: prev[level] + ADDITIONAL_BOOKS_PER_LOAD,
    }));
  };


  return (
    <Container>
      <Tabs value={selectedTab} onChange={handleChange} aria-label="Reading levels" variant="scrollable" scrollButtons="auto">
        <Tab key="All Books" label="All Books" value="All Books" />
        {Object.keys(groupedBooks).map((level) => (
          level !== "All Books" && <Tab key={level} label={`Reading Level: ${level}`} value={level} />
        ))}
      </Tabs>
      {Object.entries(groupedBooks).map(([level, books]) => (
        <TabPanel key={level} value={level} selectedTab={selectedTab}>
          <Grid container spacing={2}>
            {books.slice(0, booksPerPage[level]).map((book, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <BookCard book={book} />
              </Grid>
            ))}
          </Grid>
          {books.length > booksPerPage[level] && (
            <Box textAlign="center" marginTop={2}>
              <Button variant="contained" onClick={() => handleLoadMore(level)}>
                Load More
              </Button>
            </Box>
          )}
        </TabPanel>
      ))}
    </Container>
  )
}

interface TabPanelProps {
  children?: React.ReactNode;
  value: string;
  selectedTab: string;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, selectedTab }) => {
  return selectedTab === value ? <Box sx={{ pt: 3 }}>{children}</Box> : null;
};



export default BookList