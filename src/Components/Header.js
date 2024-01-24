import React, { useContext } from 'react';
import { Container, AppBar, Toolbar, Typography, Select, MenuItem, styled, ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import { useState } from 'react';


const Title = styled(Typography)({
  flex: 1,
  color: 'gold',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  cursor: 'pointer',
});

const Header = () => {
  //import the global state from the context
  const {currency,symbol,setCurrency} = CryptoState();
console.log(currency,symbol)
  
  const navigate = useNavigate();

 const darkTheme=createTheme({
  palette:{
    mode:"dark",
  }
 })

  return (
    <ThemeProvider theme = {darkTheme}>
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Title onClick={() =>{
            navigate("/coins/32")
            console.log("Press enter")
          }}>Crypto Hunter</Title>
          <Select onChange =  {(e)=>setCurrency(e.target.value)} value = {currency} style={{ width: 100, marginLeft: 15 }} variant="outlined">
            <MenuItem value = {"USD"} >USD</MenuItem>
            <MenuItem value = {"INR"} >INR</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}

export default Header;
