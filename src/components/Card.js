import styled from "styled-components"
import { Link , useNavigate } from "react-router-dom"



function Card({src, heading, subtitle,url}) {

  const navigate = useNavigate();
  function handlClick(e){
    e.stopPropagation();
    navigate("/courses/singlevideo")
  }
  return (
    <Container onClick={()=>{
      navigate("/courses/singlevideo")
    }}>
      <ContantWarrper>
        <img src={src} alt="" />
        <p>{heading}</p>
        <span><p>{subtitle}</p></span>
        <Wrraper>
          <p onClick={handlClick}><Link>Learn</Link></p>
          <span onClick={(e)=>{
            e.stopPropagation();
          }}><Link to={url}>Play</Link></span>
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
  >P{
    border : 1px solid black;
    margin: 0;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-right: 20px;
  }
  span{
        border: 1px solid grey;
        font-size: 1rem;
        padding: 7px 13px;
    }

`
export default Card


