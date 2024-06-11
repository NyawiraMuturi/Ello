import { Box, Card, CardContent, Typography } from "@mui/material"
import { Book } from "../../lib/types"
import AddIcon from '@mui/icons-material/Add';


type BookCardProps = {
    book: Book
}
const BookCard = ({ book }: BookCardProps) => {

    const imagePath = "src/"

    return (
        <Box 
        sx={{
            position: "relative"
        }}>
            <Card
             key={book.author} >
                <img src={book ? `${imagePath}${book.coverPhotoURL}` : undefined} style={{height:"20%", width:"100%"}}/>
                <CardContent>
                    <Typography>{book.title}</Typography>
                    <span>by: {book.author}</span>
                </CardContent>
            </Card>
            <Box
            sx={{
                position: 'absolute',
                top:-10,
                right:-8,
                backgroundColor: 'custom.turquoiseLight',
                color: 'secondary.main',
                width:40,
                height: 40,
                borderRadius: '50%',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center',
                border: (theme) => `2px solid ${theme.palette.secondary.main}`
            }}>
                <AddIcon

                />
            </Box>
        </Box>

    )
}

export default BookCard