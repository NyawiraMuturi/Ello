import { Box } from "@mui/material"
import Navbar from "../../components/layout/Navbar"
import Banner from "../../components/Banner"


const Landing = () => {
  return (
    <Box
    sx={{
      my: 4,
      mx:6
    }}
    >
      <Navbar/>
      <Banner/>
    </Box>
  )
}

export default Landing
