import styled from "styled-components";
import Product from "./Product";
import {popularProducts} from "../data"

//map is used when we want to perfom an action on each element in a collection 
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products;