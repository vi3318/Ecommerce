import { Instagram,Facebook, MailOutline,Phone,Pinterest,Room,Twitter,} from "@mui/icons-material";
import styled from "styled-components";
import "../css/footer.css";
import {Link} from "react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: black;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: white;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
  color: white;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  color: white;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  color: white;
`;

const Payment = styled.img`
    width: 50%;
`;



const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>VIBIK.</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <a href="https://www.facebook.com/"><Facebook /></a>
          </SocialIcon>
          <SocialIcon color="E4405F">
          <a href="https://www.instagram.com/"><Instagram /></a>
          </SocialIcon>
          <SocialIcon color="55ACEE">
          <a href="https://www.twitter.com/"><Twitter /></a>
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><Link to="/">Home</Link></ListItem>
          <ListItem><Link to="/cart">Cart</Link></ListItem>
          <ListItem><Link to="/men">Men Fashion</Link></ListItem>
          <ListItem><Link to="/women">Women Fashion</Link></ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 196 Mumbai , Maharahstra 400009
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +91 989891123
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> vibikcreators@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;