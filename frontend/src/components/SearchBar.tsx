import { useState, useEffect } from 'react';
import { Autocomplete, TextField, Box, Typography, Button } from "@mui/material";
import { Book } from '../lib/types';
import { fetchAllBooks } from '../lib/constants';  // Import the function
import { useBookList } from '../lib/context/bookList-context';


const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const [allBooks, setAllBooks] = useState<Book[]>([]);
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const { increaseBookQuantity, getBookQuantity } = useBookList();

    useEffect(() => {
        // Fetch all books when the component mounts
        fetchAllBooks().then(books => {
            setAllBooks(books);
        });
    }, []);

    useEffect(() => {
        // Filter books based on input value
        if (inputValue) {
            const filtered = allBooks.filter(book =>
                book.title.toLowerCase().includes(inputValue.toLowerCase()) ||
                book.author.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredBooks(filtered);
        } else {
            setFilteredBooks([]);
        }
    }, [inputValue, allBooks]);

    return (
        <Autocomplete
        sx={{
          width: 400,
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
            freeSolo
            disableClearable
            inputValue={inputValue}
            onInputChange={(_, newInputValue) => setInputValue(newInputValue)}
            options={filteredBooks}
            getOptionLabel={(option) => option.title}
            renderOption={(props, option) => (
                <Box component="li" {...props} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography>
                        {option.title} - {option.author}
                    </Typography>
                    <Button 
                        onClick={() => {
                            if (getBookQuantity(option.title, option.author) === 0) {
                                increaseBookQuantity(option);
                            } else {
                                alert("Book has already been added.");
                            }
                        }} 
                        disabled={getBookQuantity(option.title, option.author) > 0}
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
        />
    );
};

export default SearchBar;