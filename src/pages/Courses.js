import styled from 'styled-components'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import SearchBar from '../components/SearchBar'

function Courses() {
  return (
    <>
      <Header></Header>
      <Container>
        <Side/>
        <Search></Search>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  margin-top: 90px;
`
const Side = styled(Sidebar)`
    width: 10%;
    border: 1px solid black;
`
const Search = styled(SearchBar)`
  width: fit-content;
`
export default Courses
