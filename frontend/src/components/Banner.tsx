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
      my: 6
    }}
    >
      <Box
      sx={{
        width:"50%",
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        color:"info.main"
      }}
      >
        <Typography
        sx={{fontSize:'34px', fontWeight:'bold'}} 
        >
          Assign a <span style={{color: "#FAAD00", fontSize:"38px"}}>wonderful</span> book 
          <br /> to your young readers <span style={{color: "#FAAD00", fontSize:"38px"}}>today</span> !!
        </Typography>
      </Box>

        <img 
        src={logo} 
        style={{width:"50%", objectFit:'cover'}}/>
    </Box>
  )
}

export default Banner