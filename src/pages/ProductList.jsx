import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Products from "../components/Products";
import Footer from "../components/Footer";


const Container = styled.div`

`

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between
`

const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`
const Select = styled.select`
`;

const Option = styled.option`
`

const ProductList = () => {
  return (
     <Container>
        <Announcements/>
        <Navbar/>
        <Title>Shopping</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>
                    Color
                </Option>
                <Option>White</Option>
                <Option>White</Option>
                <Option>White</Option>
                <Option>White</Option>
                <Option>White</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>L</Option>
            </Select>
            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
            <Select>
                <Option selected>Newest</Option>
                <Option>Lowest to Highest</Option>
                <Option>Highest to Lowest</Option>
                <Option>Rating</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Footer/>
     </Container>
     
  )
}

export default ProductList