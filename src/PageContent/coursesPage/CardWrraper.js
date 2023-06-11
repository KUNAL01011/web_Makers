import React, { useState } from "react";
import styled from "styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Card from "../../components/Card";
import CoursesData from "../../Data/CoursesData";


function CardWrapper() {
  const [cardsToShow, setCardsToShow] = useState(9);
  


  const handleShowMore = () => {
    setCardsToShow(cardsToShow + 9);
  };
  
  return (
    <>
      <CardWrap >
        {CoursesData.slice(0, cardsToShow).map((card) => (
          <Card
            subtitle={card.subtitle}
            src={card.src}
            heading={card.heading}
            url={card.url}
          ></Card>
        ))}
      </CardWrap>
      {cardsToShow < CoursesData.length && (
        <Button>
          <span onClick={handleShowMore}>
            <Wrraper3>
              More
              <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </Wrraper3>
          </span>
        </Button>
      )}
    </>
  );
}
const CardWrap = styled.div`
  display: flex;
  padding: 50px 238px 50px 216px;
  gap: 18px;
  flex-wrap: wrap;
  grid-row-gap: 40px;
`;
const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 12px 166px;
    border-radius: 20px;
  }
`;
const Wrraper3 = styled.div`
  display: flex;
`;
export default CardWrapper;