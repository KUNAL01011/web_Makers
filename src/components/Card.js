import styled from "styled-components"
import Img1 from "../assest/images/cardsimg1.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function Card() {
  return (
    <Container>
      <ContantWarrper>
      <img src={Img1} alt="" />
      <p>Become a Front End Developer</p>
      <span><p>Go from complete beginner to creating interactive websites using HTML, CSS, and JavaScript.</p></span>
      <Wrraper>
        <p>4 Modules</p>
        <span>
        <Wrraper1>
            Pythan
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </Wrraper1>
      </span>
      </Wrraper>
      </ContantWarrper>

    </Container>
  )
}

const Container = styled.div`
    display: flex;
    height: fit-content;
    padding: 0px 0px 0px 0px;
    flex-direction: column;
`
const ContantWarrper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  box-shadow: 1px 2px 9px grey;
  width: 300px;
  img{
    width: 300px;

  }
  p{
    padding-left: 15px;
    padding-bottom: 15px;
    display: inline-block;
    font-size: 1.2rem;
    margin-bottom: 0;
    font-weight: 400;
  }
  span{
    display: flex;
    flex-wrap: wrap;
    P{
      font-size: 1rem;
    }
  }
`
const Wrraper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 15px 30px 15px;
  P{
    margin: 0;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  span{
        border: 1px solid grey;
        font-size: 1rem;
        padding: 7px 13px;
    }

`
const Wrraper1 = styled.div`
  display: flex;
`
export default Card


