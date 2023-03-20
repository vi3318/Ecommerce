import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Shirts from "../components/Shirts";

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
//use location hook returns the location object from the current url

const ProductList = () => {
  return (
     <Container>
        <Announcements/>
        <Navbar/>
        <Title>Shopping</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
            <Select name="color" >
                <Option disabled >
                    Color
                </Option>
                <Option>White</Option>
                <Option>Red</Option>
                <Option>Orange</Option>
                <Option>Blue</Option>
                <Option>Black</Option>
            </Select>
            <Select name="size" >
                <Option disabled >
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
                <Option value="newest">Newest</Option>
                <Option value="lh">Lowest to Highest</Option>
                <Option value="hl">Highest to Lowest</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Shirts/>
        <Newsletter/>
        <Footer/>
     </Container>
     
  )
}

export default ProductList;