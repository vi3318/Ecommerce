import React from 'react'
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import logoNoBackground from "../images/logoNoBackground.png"
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { useSelector } from 'react-redux';

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

  const toggleTheme =() => {
    
  }
  
  const quantity = useSelector(state=>state.cart.quantity)
  
  
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
            <MenuItem><Link to='/'>HOME</Link></MenuItem>
            <MenuItem><Link to='/about'>ABOUT</Link></MenuItem>
            <MenuItem><Link to="/register">REGISTER</Link></MenuItem>
            <MenuItem><Link to="/login">SIGN IN</Link></MenuItem>
            <MenuItem><Link to="/signout">SIGN OUT</Link></MenuItem>
            <Link to="/cart">
            <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
            </MenuItem>
            </Link>
            <MenuItem>
            <input type="checkbox" class="checkbox" id="checkbox" onClick={()=>toggleTheme()}/>
              <label for="checkbox" class="label">
                <i class="fas fa-moon"></i>
                <i class='fas fa-sun'></i>
                <span class="ball"></span>
              </label>
            </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar