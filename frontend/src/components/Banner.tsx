import { Box, Typography } from "@mui/material"
import logo from '../assets/hero.svg'

const Banner = () => {
  return (
    <Box
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    gap={2}
    sx={{
      my: 4
    }}
    >
        <Typography>
        Over 700 decodable books that match your child's reading ability. Help prevent the summer slump, without frustration
        </Typography>
        <img 
        src={logo} 
        style={{width:"50%", objectFit:'cover'}}/>
    </Box>
  )
}

export default Banner