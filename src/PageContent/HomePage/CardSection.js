import styled from "styled-components";
import Card from "../../components/Card";
import cardData from "../../Data/CardData";
function CardSection() {
  return (
    <Container>
      <CardTextSection>
        <h1>
          WE ARE ON A MISSION TO EDUCATE <br />
          THE WORLD
        </h1>
        <span>Our Courses</span>
      </CardTextSection>
      <Cards>
        {cardData.map((card) => (
          <Card name={card.name} subtitle={card.subtitle} src={card.src} heading={card.heading}></Card>
        ))}
      </Cards>
    </Container>
  );
}
const Container = styled.div`
  max-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
`;
const CardTextSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 76px;
  h1 {
    text-align: center;
  }
  span {
    font-weight: 600;
    font-size: 1rem;
  }
`;
const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 76px;
  margin: 0px 45px;
`;
export default CardSection;
