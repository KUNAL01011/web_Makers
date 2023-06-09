import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
function SearchBar() {
  return (
    <Container>
      <h1>Learn something new!</h1>
      <Wrraper>  
        <input type="text" name="text" id="search" />
        <Button> 
          <SearchIcon/>
          <button>Search</button>
        </Button>
      </Wrraper>
    </Container>
  )
}
const Container = styled.div`
  /* border: 1px solid black; */
  height: 198px;
  padding: 0px 238px 0px 216px;
  h1{
    margin-top: 40px;
  }
`
const Wrraper = styled.div`
  display: flex;
  input{
    width: 825px;
    height: 37px;
    font-size: 22px;
  }
    
`
const Button = styled.div`
    display: flex;
    border: 1px solid black;
    background-color: #5553ff;
    width: 113px;
    align-items: center;
    padding-left: 10px;
    color: white;
    button{
      border: none;
      outline: none;
      background-color: white;
      background: transparent;
      color: white;
      font-size: 1rem;
    }
    
  
`
export default SearchBar
