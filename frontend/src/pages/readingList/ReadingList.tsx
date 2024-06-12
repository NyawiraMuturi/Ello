import { Box, Button, Typography, Card, CardContent, CardActions, IconButton } from "@mui/material";
import { useBookList } from "../../lib/context/bookList-context";
import ello from '../../assets/assign.png';
import { DeleteOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const ReadingList = () => {
  const { listItems, removeBook } = useBookList();
  const navigate = useNavigate();
  const imagePath = "src/";

  const handleNewBook = () => {
    navigate('/');
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingX: 2,
      height:'100vh' ,
      gap: 4
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        gap: 2,
        padding: 4,
        width: '100%',
        maxWidth: "50%",
        border: (theme) => `1px solid ${theme.palette.primary.main}`,
        // maxHeight: '100vh', 
        overflowY: 'auto'
      }}>
        <Typography color='info.main' fontSize={24} fontWeight={700} gutterBottom>
          Reading List
        </Typography>
        {listItems.length > 0 ? listItems.map((item, index) => (
          <Card key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
            <div style={{display: 'flex', alignItems: 'center'}}>
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
        )) : <Typography>No books added.</Typography>}
        <Button onClick={handleNewBook}>
          ADD NEW BOOK
        </Button>
      </Box>
      <Box
      sx={{
        height:'100vh'
      }}
      >
        <img src={ello} style={{ width: '100%' }} />
        <Button
          sx={{
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
      </Box>
    </Box>
  );
};

export default ReadingList;