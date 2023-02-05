import React from 'react'
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logoNoBackground from "../images/logoNoBackground.png"
import Badge from '@mui/material/Badge';

const Container = styled.div`
    height: 60px;
    padding: none;
    margin: none;
    
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  
`;

const Left = styled.div`
  flex: 1;
  {/*This is making them one unit*/} 
  display: flex;
  align-items: center;

`

const Logo = styled.img`
    width: 100px;
    height: 45px;
    padding: 0px 15px;
`


const SearchContainer = styled.div`
  display: flex;
  border: none;
  align-items: center;
  margin-left: 35px;
  padding: 5px;

`



const Right = styled.div`
  flex: 2;
  display: flex;
  align-items:center;
  justify-content: flex-end;
`
const MenuItem =styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 65px;

`





const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Logo
             src={logoNoBackground} alt="Logo">
            </Logo>
            <SearchContainer>
              <input type="text" placeholder="Search..."/>
              <SearchIcon style={{color:"gray",fontSize:16}}/>
            </SearchContainer>
          </Left>
          <Right>
            <MenuItem>HOME</MenuItem>
            <MenuItem>ABOUT</MenuItem>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
            </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar