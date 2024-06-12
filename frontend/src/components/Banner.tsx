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
        flexGrow: { xs: 1, md: 0 }, 
        width:"50%",
        alignItems: 'center',
        display: { xs: 'flex', md: 'flex' },
        justifyContent: 'center',
        color:"info.main"
      }}
      >
        <Typography
        sx={{fontSize:'34px', fontWeight:'bold'}} 
        >
          Assign a <span style={{color: "#FAAD00", fontSize:"38px"}}>wonderful</span> book to
          <br />  your young readers <span style={{color: "#FAAD00", fontSize:"38px"}}>today</span> !!
        </Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, width:"50%" }}>
      <img 
        src={logo} 
        style={{width:"90%", objectFit:'cover'}}/>
      </Box>

    </Box>
  )
}

export default Banner