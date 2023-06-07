import styled from "styled-components"
import Photo from "../../assest/images/kunal_logo.jpg"
import Amazon from '../../assest/images/kisspng_amazon_com_logo_retail_brand_publishing_chat_room_logo_5ae868f5383535_1_a6b41bc3a9.png'
import Google from '../../assest/images/pngegg_1_1_51b5432954.png'
import Microsoft from '../../assest/images/microsoft_logo_png_2398_1_6587a84ffc.png'

function InstructorSection() {
  return (
    <Container>
      <TextSection>
        <h1>Meet your <span>Instructor</span></h1>
        <button>Kwon More</button>
      </TextSection>
      <hr />

      <ImageSection>
        <img src={Photo} alt="" />
        <h4>Kunal Kumar</h4>
        <span>Founder , Web Makers</span>
      </ImageSection>

      <Companies>
        <Comp1>
            <img src={Amazon}alt="" />
            <p>Ex-Amazon, SWE</p>
        </Comp1>
        <Comp1>
            <img src={Microsoft}alt="" />
            <p>Ex-Amazon, SWE</p>
        </Comp1>
        <Comp1>
            <img src={Google}alt="" />
            <p>Ex-Amazon, SWE</p>
        </Comp1>
      </Companies>

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
  hr{
    border: 1px solid gray;
    width: 100%;
  }
`

const TextSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    span{
        color: #6674cc;
    }
    button{
        width: 120px;
        height: 40px;
        background-color: #6674cc;
        border: none;
        outline: none;
        font-size: 1rem;
        border-radius: 5px;
    }
`
const ImageSection = styled.div`
    margin-top: 80px;
    
    img{
        width: 256px;
        border-radius: 50%;
    }
    h4{
        font-size: 2rem;
        text-align: center;
        margin-top: 0px ;
        margin-bottom: 0px ;
    }
    span{
        font-size: 1.5rem;
        text-align: center;
        color: #777c85;
    }
`
const Companies = styled.div`
    margin-top: 80px;
    width: 100%;
    
    display: flex;
    gap: 281px;
    justify-content: center;

`
const Comp1 = styled.div`

    p{
        margin: 0;
        text-align: center;
    }

`
export default InstructorSection
