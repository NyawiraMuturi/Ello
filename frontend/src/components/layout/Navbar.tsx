import { useState } from 'react';
import { SearchOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import shelf from '../../assets/books.png'
import logo from '../../assets/logo.png'
import SearchBar from '../SearchBar';
import { useBookList } from '../../lib/context/bookList-context';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { totalQuantity } = useBookList()
  const navigate = useNavigate()

  const handleSearchClick = () => {
    setShowSearchBar(true);
  };
  const handleNavigation =()=>{
    navigate('/reading-list')
  }


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
          style={{ height: 50, width: 100, objectFit: 'cover' }} />
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
        ) : (
          <SearchOutlined onClick={handleSearchClick} />
        )}
        <Box position="relative">
          <img src={shelf} style={{ height: 40, width: 40 }} />
          <div 
          onClick={handleNavigation}
          style={{position:'absolute',
          top:-12,
          right:-10,
          cursor:'pointer',
          borderRadius:"50%",
           backgroundColor:"#CFFAFA", 
           border:"2px solid #4AAA88", 
           color:"#4AAA88", 
           height:30, 
           width:30,
          display:"flex", 
          alignItems:"center", 
          justifyContent:"center"}}>
            <span>{totalQuantity}</span>
          </div>
        </Box>

      </Box>

    </Box>
  )
}

export default Navbar