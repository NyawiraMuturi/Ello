import { useState } from 'react';
import { SearchOutlined, WbSunnyOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import shelf from '../../assets/books.png'
import logo from '../../assets/logo.png'
import SearchBar from '../SearchBar';

const Navbar = () => {
    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleSearchClick = () => {
        setShowSearchBar(true);
      };


  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      padding={2}
      sx={{
        
        margin: '0 auto',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Box>
       <img src={logo}
        style={{height:50, width:100, objectFit:'cover'}} /> 
      </Box>
      <Box      
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      gap={2}
      >
        {showSearchBar ? (
            <SearchBar />
        ):(
            <SearchOutlined onClick={handleSearchClick}/>
        )}
        
        
        {/* <WbSunnyOutlined/> */}
        <img src={shelf} style={{height:40, width:40}} /> 
      </Box>
    </Box>
  )
}

export default Navbar