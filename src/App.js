import "./App.css";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 97vh;
  background-image: linear-gradient(
    0deg,
    rgb(185, 218, 245) 0%,
    rgb(255, 255, 255) 66%,
    rgb(255, 255, 255) 100%
  );
  border: 0px solid transparent;
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;
