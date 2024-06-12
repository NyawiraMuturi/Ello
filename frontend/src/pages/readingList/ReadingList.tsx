import { Box, Button, Typography, Card, CardContent, CardActions, IconButton, Snackbar, Alert } from "@mui/material";
import { useBookList } from "../../lib/context/bookList-context";
import ello from '../../assets/assign.png';
import { DeleteOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ReadingList = () => {
  const imagePath = "src/";
  const { listItems, removeBook, clearBooks } = useBookList();
  const navigate = useNavigate();
  const [snackOpen, setSnackOpen] = useState(false);

  const handleAssignBooks = () => {
    setSnackOpen(true); 
    clearBooks(); 
    setTimeout(() => {
      navigate('/'); 
    }, 3000);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackOpen(false);
  };
 

  const handleNewBook = () => {
    navigate('/');
  };


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      height: '100vh',
      padding: 2,
      gap: 4
    }}>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        width: '50%',
        padding: 4,
        border: (theme) => `1px solid ${theme.palette.primary.main}`,
        borderRadius: '10px',
        height: '100%',
      }}>
        <Typography color='info.main' fontSize={24} fontWeight={700} gutterBottom>
          Reading List
        </Typography>
        {listItems.length > 0 ? listItems.map((item, index) => (
          <Card key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src={`${imagePath}${item.book.coverPhotoURL}`} alt={`Cover of ${item.book.title}`} style={{ width: "20%" }} />
              <CardContent>
                <Typography color='info.main' fontSize={18} fontWeight={700}>{item.book.title}</Typography>
                <Typography variant="body2">by {item.book.author}</Typography>
              </CardContent>
            </div>
            <CardActions>
              <IconButton
                sx={{ color: 'error.main' }}
                onClick={() => removeBook(item.book.title, item.book.author)}>
                <DeleteOutline />
              </IconButton>
            </CardActions>
          </Card>
        )) : <Typography color='warning.main' fontSize={20} fontWeight={700}>No books added.</Typography>}
        <Button
          sx={{
            marginY:4,
            width: '100%',
            backgroundColor: 'primary.main',
            color: 'white',
            '&:hover': {
              backgroundColor: 'transparent',
              border: '1px solid',
              borderColor: 'primary.main',
              color: 'primary.main',
            }
          }}
          onClick={handleNewBook}>
          ADD NEW BOOK
        </Button>
      </Box>

      <Box sx={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        alignItems: 'center',
        height: '100vh'
      }}>
        <img src={ello} alt="Assigned Books" style={{ width: '80%', objectFit: 'cover' }} />
        <Button
        onClick={handleAssignBooks}
        sx={{
          width: '100%',
          backgroundColor: 'transparent',
          border: '1px solid',
          borderColor: 'primary.main',
          color: 'primary.main',
          '&:hover': {
            backgroundColor: 'primary.main',
            color: 'white',
          }
        }}>
        ASSIGN SELECTED BOOKS
      </Button>
      <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }} 
      open={snackOpen} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Books successfully assigned
        </Alert>
      </Snackbar>
      </Box>
    </Box>
  );
};

export default ReadingList;