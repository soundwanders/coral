import './App.css';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import SiteContent from './components/SiteContent';

function App() {
  return (
    <Container>
      <Sidebar />
      <SiteContent />
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
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
    background: #eaf5ff;
  }
`;

export default App;
