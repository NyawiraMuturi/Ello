import { Box } from "@mui/material"
import Navbar from "../../components/layout/Navbar"
import Banner from "../../components/Banner"
import BookList from "./BookList"


const Landing = () => {
  return (
    <Box
    sx={{
      my: 4,
      mx:{xs:4, md:6}
    }}
    >
      <Navbar/>
      <Banner/>
      <BookList/>
    </Box>
  )
}

export default Landing
