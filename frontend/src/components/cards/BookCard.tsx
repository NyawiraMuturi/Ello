import { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import AddOutlined from '@mui/icons-material/AddOutlined';
import CheckOutlined from '@mui/icons-material/CheckOutlined';
import { useBookList } from "../../lib/context/bookList-context";
import { Book } from "../../lib/types";

type BookCardProps = {
    book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
    const imagePath = "src/";
    const { increaseBookQuantity, removeBook, getBookQuantity } = useBookList();
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        const initialQuantity = getBookQuantity(book.title, book.author);
        setIsAdded(initialQuantity > 0);
    }, [book.title, book.author, getBookQuantity]);

    const handleAddClick = () => {
        if (!isAdded) {
            increaseBookQuantity(book);
            setIsAdded(true);
        } else {
            alert("Book has already been added.");
        }
    };

    const handleRemoveClick = () => {
        removeBook(book.title, book.author);
        setIsAdded(false);
    };

    return (
        <Box sx={{ position: "relative" }}>
            <Card>
                <img src={book ? `${imagePath}${book.coverPhotoURL}` : undefined} alt={`Cover of ${book.title}`} style={{ height: "20%", width: "100%" }}/>
                <CardContent>
                    <Typography fontSize={16} fontWeight={600}>{book.title}</Typography>
                    <Typography variant="body2" sx={{color: "primary.main"}}>by: {book.author}</Typography>
                    <Box sx={{ marginTop: 2, width: '100%' }}>
                        {isAdded && (
                            <Button 
                                sx={{
                                    backgroundColor: 'transparent',
                                    border: '1px solid',
                                    borderColor: 'error.main',
                                    color: 'error.main',
                                }}
                                onClick={handleRemoveClick}>
                                Remove Book
                            </Button>
                        )}
                    </Box>
                </CardContent>
            </Card>
            <Box
                sx={{
                    position: 'absolute',
                    top: -10,
                    right: -8,
                    backgroundColor: isAdded ? 'custom.orangePastel' : 'custom.turquoiseLight',
                    color: isAdded ? 'warning.main' : 'secondary.main',
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    border: (theme) => `2px solid ${isAdded ? theme.palette.warning.main : theme.palette.secondary.main}`,
                }}
                onClick={handleAddClick}
            >
                {isAdded ? <CheckOutlined /> : <AddOutlined />}
            </Box>
        </Box>
    );
};

export default BookCard;