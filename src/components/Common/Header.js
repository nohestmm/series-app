import React from 'react';
import { AppBar, Toolbar, styled } from '@material-ui/core';
import Logo  from "./../../assets/logos/Logo.png"
import { Link } from 'react-router-dom';

const HeaderBar = styled(AppBar)({
      boxShadow:"none",
      backgroundColor: "#064854"
  
    });

const Header = () => {
    return (
      <HeaderBar position='sticky'>
          <Toolbar>
              <Link to={"/"}>
              <img src={Logo} alt="Logo" width="260" height="50"/>
              </Link>
           
          </Toolbar>

      </HeaderBar>
    )
}

export default Header
