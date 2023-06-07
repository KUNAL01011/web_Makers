import styled from "styled-components"
import Card from "../../components/Card"
import img1 from '../../assest/images/2-PERSONAL PNG 3D.png'
import img2 from '../../assest/images/ALPHA 3D 2.png'
import img3 from '../../assest/images/DIDI S PNG 3D.png'

function CardSection() {
  return (
    <Container>
        <CardTextSection>
          <h1>WE ARE ON A MISSION TO EDUCATE <br/>THE WORLD</h1>
          <span>Our Courses</span>
        </CardTextSection>
        <Cards>
          <Card src={img1}></Card>
          <Card src= {img2}></Card>
          <Card src = {img3}></Card>
          <Card src = {img2}></Card>
        </Cards>
    </Container>
  )
}
const Container = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
`
const CardTextSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 76px;
  h1{
    text-align: center;
  }
  span{
    font-weight: 600;
    font-size: 1rem;
  }

`
const Cards = styled.div`
  display: flex;
    flex-wrap: wrap;
    gap: 34px;
    grid-row-gap: 71px;
  
`
export default CardSection
