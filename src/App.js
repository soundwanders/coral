import './App.css';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Content from './components/SiteContent';

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
  position: relative;
  width: 100%;
  height: 97vh;
  background: linear-gradient(to bottom right, #eaf5ff 60%, #ffe4ce 100%);
  border: 0px solid transparent;
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 960px) {
    flex-direction: column;
    @media screen and (min-width: 320px) and (max-width 960px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 1rem 0 0 0;
      padding: 0.5rem 0.25rem;
      background: #eaf5ff;
    }
  }
`;

export default App;
