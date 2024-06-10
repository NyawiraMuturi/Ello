import { Autocomplete, TextField } from "@mui/material"

const SearchBar = () => {
  return (
    <Autocomplete
    freeSolo
    id="free-solo-2-demo"
    disableClearable
    sx={{
        width: 400,
        height: 50,
        '& .MuiOutlinedInput-root': {
          height: '100%',
          borderRadius: '2em',
          '& fieldset': {
            borderColor: '#28b8b8',
            borderWidth: '1px',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#28b8b8',
          },
        },
        '& .MuiInputBase-input': {
          height: '50%',
          padding: '10px',
        },
      }}
    options={['The Godfather', 'Pulp Fiction']}
    renderInput={(params) => (
      <TextField
        {...params}
        label="Search Books"
        color="success"
        InputProps={{
          ...params.InputProps,
          type: 'search',
        }}
        
      />
    )}
  />
  )
}

export default SearchBar