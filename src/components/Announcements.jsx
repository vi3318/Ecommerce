import styled from "styled-components"

const Container = styled.marquee`
    height: 30px;
    background-color: teal;
    color: white;
    padding: none;
`

const Announcements = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders above Rs.1000!
    </Container>
  )
}

export default Announcements