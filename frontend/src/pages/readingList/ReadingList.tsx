import { Box, Button, Typography, Card, CardContent, CardActions, IconButton, Snackbar, Alert, Grid } from "@mui/material";
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} paddingX={4} marginY={2} height='100vh'>
        <Grid item xs={12} md={6}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            padding: 4,
            border: (theme) => `1px solid ${theme.palette.primary.main}`,
            borderRadius: '10px',
            height: '100vh',
          }}>
            <Typography
              variant="h4" fontWeight={700} color='info.main' gutterBottom>
              Reading List
            </Typography>
            {listItems.length > 0 ? listItems.map((item, index) => (
              <Card key={index}
                sx={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2
                }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img src={`${imagePath}${item.book.coverPhotoURL}`} alt={`Cover of ${item.book.title}`} style={{ width: "20%" }} />
                  <CardContent>
                    <Typography color='info.main'
                      sx={{
                        fontSize: { xs: '14px', md: '18px' }
                      }}
                      fontWeight={700}>{item.book.title}</Typography>
                    <Typography
                    color='custom.turquoiseDark2'
                      sx={{
                        fontSize: { xs: '12px', md: '14px' }
                      }}>by: {item.book.author}</Typography>
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
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', gap: 2 }}>
              <Button
                sx={{
                  flexGrow: 1,
                  marginY: 4,
                  backgroundColor: 'primary.main',
                  fontSize: { xs: '0.55rem', md: '0.875rem' },
                  color: 'white',
                  width: '50%',
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
              <Button
                sx={{
                  flexGrow: 1,
                  marginY: 4,
                  width: '50%',
                  fontSize: { xs: '0.55rem', md: '0.875rem'},
                  backgroundColor: 'transparent',
                  border: '1px solid',
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    color: 'white',
                  }
                }}
                onClick={handleAssignBooks}>
                ASSIGN SELECTED BOOKS
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={0} md={6} sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100vh',
          }}>
            <img src={ello} alt="Assigned Books" style={{ width: '80%', objectFit: 'cover' }} />
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={snackOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          severity="success"
          sx={{
            width: '100%',
            borderColor: 'primary.main',
            borderWidth: '1px',
            borderStyle: 'solid'
          }}
        >
          Books successfully assigned
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ReadingList;