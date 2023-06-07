import styled from 'styled-components'


export default function Card({src}) {
  return (
    <Container>
      <Wrraper>
        <CardImage>
          <img src={src} alt="" />
        </CardImage>
        <CardText>
          <h1>Alpha</h1>
          <br />
          <span>1 Courses</span>
          <p><s>₹5600</s> - ₹4500 </p>
          <button>Buy Now</button>
        </CardText>
      </Wrraper>
      
    </Container>
  )
}
const Container = styled.div`
    width: 382px;
    height: 568px;
    /* border: 1px sokid black; */
    /* border: 2px solid black; */
    border-radius: 33px;
    overflow: hidden;
    box-shadow: 1px 2px 9px grey;
`
const Wrraper = styled.div`
  
`
const CardImage = styled.div`
  background-color: pink;
  img{
    width: 350px;
  }

`
const CardText= styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 h1{
  margin-bottom: 0px ;
 }
 button{
  width: 107px;
    height: 40px;
    background-color: blue;
    font-size: 1rem;
    clear: white;
    border-radius: 15px;
    color: white;
 }

`

