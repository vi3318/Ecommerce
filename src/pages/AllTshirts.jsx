import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcements from "../components/Announcements";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import { useState } from "react";

import Tshirt from "../components/Tshirt";

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
    margin-right:
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option`
`
//use location hook returns the location object from the current url

const ProductList = () => {
   const location = useLocation();
   const cat = location.pathname.split("/")[2]
   const [filters,setFilters] = useState({});
   const [sort,setSort] = useState("newest");

   const handleFilters = (e) =>{
    const value = e.target.value;
    setFilters({
        ...filters,
        [e.target.name]:value,
    });
   };
    
  return (
     <Container>
        <Announcements/>
        <Navbar/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter><FilterText>Filter Products:</FilterText>
            <Select name="color"onChange={handleFilters} >
                <Option disabled >
                    Color
                </Option>
                <Option>White</Option>
                <Option>Red</Option>
                <Option>Gray</Option>
                <Option>Blue</Option>
                <Option>Black</Option>
            </Select>
            <Select name="size"onChange={handleFilters} >
                <Option disabled >
                    Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
            </Filter>
            <Filter><FilterText>Sort Products:</FilterText>
            <Select onChange={e=>setSort(e.target.value)}>
                <Option value="default">Default</Option>
                <Option value="newest">Newest</Option>
                <Option value="lh">Lowest to Highest</Option>
                <Option value="hl">Highest to Lowest</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Tshirt cat={cat} filters={filters} sort={sort}/>
        <Newsletter/>
        <Footer/>
     </Container>
     
  )
}

export default ProductList;