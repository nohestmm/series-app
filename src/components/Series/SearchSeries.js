import React from 'react';
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { styled } from '@material-ui/core';
const TextFieldSearch = styled(TextField)({
    borderRadius: "20px",
    color: "#ffffff",
    border: "2px solid #ffffff",
    
 
   });
   const IconButtonSearch = styled(IconButton)({
    color: "#ffffff",
    width: "40px",
    height:"40px"
   
    
 
   });
const SearchSeries = ({validateTerm}) =>  (
    <div className="search-box">
    
    <TextFieldSearch
      id="terms"
      label="Buscar serie..."
      margin="normal"
      variant="outlined"
      onKeyPress={(e) => validateTerm(e)}
    />
    <IconButtonSearch onClick={(e) => 
        validateTerm(e) 
        
        }>
      <SearchIcon />
    </IconButtonSearch>
  </div>
    )


export default SearchSeries
