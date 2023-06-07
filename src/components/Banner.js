import styled from "styled-components"

export default function Banner() {
  return (
    <B>
        <Container>
            <Wrraper>
                <Follower>
                  <span>700K+</span>
                </Follower>
                <Platform>
                  <span>Subcribers</span>
                  <br />
                  on Youtube
                </Platform>
            </Wrraper>
            <Wrraper>
                <Follower>
                  <span>700K+</span>
                </Follower>
                <Platform>
                  <span>Follower</span>
                  <br />
                  on Twiter
                </Platform>
            </Wrraper>
            <Wrraper>
                <Follower>
                  <span>700K+</span>
                </Follower>
                <Platform>
                  <span>Follower</span>
                  <br />
                  on Instagram
                </Platform>
            </Wrraper>
            <Wrraper>
                <Follower>
                  <span>700K+</span>
                </Follower>
                <Platform>
                  <span>Follower</span>
                  <br />
                  on Linkedin
                </Platform>
            </Wrraper>
        </Container>
    </B>
  )
}

const B = styled.div`
    background-color: #6674cc;
    padding-top: 60px;
    padding-bottom: 60px;

`
const Container = styled.div`
    max-width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    z-index: -1;

`
const Wrraper = styled.div`
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Follower = styled.div`
    font-size: 2.5rem;
    color: white;
`
const Platform = styled.div`
    color: white;

`