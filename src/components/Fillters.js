import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideocamIcon from '@mui/icons-material/Videocam';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import styled from 'styled-components';

function Filters() {
  return (
    <Container>
      <FilterButton>
        <span>
          <LanguageIcon/>
          <button>Browse All</button>
        </span>
      </FilterButton>
      <FilterButton>
        <span>
          <LiveTvIcon/>
          <button>Live</button>
        </span>
      </FilterButton>
      <FilterButton>
        <span>
          <VideocamIcon/>
          <button>Video toturial</button>
        </span>
      </FilterButton>
      <FilterButton>
        <span>
          <TextSnippetIcon/>
          <button>Text toturial</button>
        </span>
      </FilterButton>
    </Container>
  )
}
const Container = styled.div`
  position: sticky;
    display: flex;
    top: 90px;
    
    height: fit-content;
    padding: 0px 238px 0px 216px;
   
`

const FilterButton = styled.div`
span{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 192px;
  height: 37px;

}

button{
  border: none;
  outline: none;
  background: transparent;
  font-size: 1rem;
}

`


export default Filters
