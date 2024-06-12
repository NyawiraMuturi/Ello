import { useState, useEffect } from 'react';
import { Autocomplete, TextField, Box, Typography, Button } from "@mui/material";
import { Book } from '../lib/types';
import { fetchAllBooks } from '../lib/constants';
import { useBookList } from '../lib/context/bookList-context';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [bookMap, setBookMap] = useState<{ [key: string]: Book }>({});
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const { increaseBookQuantity, getBookQuantity } = useBookList();

  useEffect(() => {

    fetchAllBooks().then(books => {
      const map = books.reduce((acc, book) => {

        const key = `${book.title.toLowerCase()} ${book.author.toLowerCase()}`;
        acc[key] = book;
        return acc;
      }, {});
      setBookMap(map);
    });
  }, []);

  useEffect(() => {

    if (inputValue) {
      const searchKey = inputValue.toLowerCase();
      const filtered = Object.keys(bookMap)
        .filter(key => key.includes(searchKey))
        .map(key => bookMap[key]);
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks([]);
    }
  }, [inputValue, bookMap]);

  return (
    <Autocomplete
      freeSolo
      disableClearable
      inputValue={inputValue}
      onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
      options={filteredBooks}
      getOptionLabel={(option) => option.title}
      noOptionsText="Book not found"
      renderOption={(props, option) => (
        <Box component="li" {...props} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>
            {option.title} - {option.author}
          </Typography>
          <Button
            onClick={() => {
              if (getBookQuantity(option.title, option.author) === 0) {
                increaseBookQuantity(option);}
            }}
            disabled={getBookQuantity(option.title, option.author) > 0}
            sx={{
              backgroundColor: 'transparent',
              border: '1px solid', 
              borderColor: 'primary.main', 
              color: 'primary.main',
              '&:hover': {
                backgroundColor:'primary.main',
                color: 'white',
              }
            }}
          >
            Add
          </Button>
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Books"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
      sx={{
        width: 500,
        height: 50,
        '& .MuiOutlinedInput-root': {
          height: '100%',
          borderRadius: '2em',
          '& fieldset': {
            borderColor: '#28b8b8',
            borderWidth: '1px',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#28b8b8',
          },
        },
        '& .MuiInputBase-input': {
          height: '50%',
          padding: '10px',
        },
      }}
    />
  );
};

export default SearchBar;
