import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Book } from "../../lib/types"

type BookCardProps = {
    book: Book
}
const BookCard = ({ book }: BookCardProps) => {
    return (
        <>
            <Card key={book.author}>
                <CardMedia src={book.coverPhotoURL} />
                <CardContent>
                    <Typography>{book.title}</Typography>
                </CardContent>
            </Card>
        </>

    )
}

export default BookCard