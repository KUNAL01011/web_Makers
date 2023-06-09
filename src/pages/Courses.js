import styled from 'styled-components'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/SearchBar'
import Fillters from "../components/Fillters"
import Tags from '../components/Tags'
import Card from '../components/Card'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from '../components/Footer'

function Courses() {
  return (
    <>
      <Header></Header>
      <Side/>
      <BigContainer>
      <Container>
        <Search></Search>
        <Fillters/>
      </Container>
      <Content>
          <Tags></Tags>
          <CardWrraper>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </CardWrraper>
          <CardWrraper>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </CardWrraper>
          <CardWrraper>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </CardWrraper>
          <CardWrraper>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </CardWrraper>
      </Content>
      <Button>
        <span>
        <Wrraper3>
            More
            <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </Wrraper3>
      </span></Button>
      <Footer/>
      </BigContainer>
    </>
  )
}

const BigContainer = styled.div`
    margin-top: 88px;
    margin-left: 121px;

`
const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 1px 2px 9px grey;
`
const Side = styled(Sidebar)`
    border: 1px solid black;
`
const Search = styled(SearchBar)`
`

const Content = styled.div`
`

const CardWrraper = styled.div`
  display: flex;
  padding: 50px 238px 50px 216px;
  gap: 18px;
  
`
const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
span{
    display: flex;
    font-size: 1rem;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 12px 166px;
    border-radius: 20px;

    }

`
const Wrraper3 = styled.div`
  display: flex;
`
export default Courses
