//import styled from 'styled-components'
import Jumbotron from './components/jumbotron'
import jumboData from './fixtures/jumbo'

function App() {
  return (
 <Jumbotron.Container>
   {jumboData.map((item) => (
     <Jumbotron key = {item.id} direction = {item.direction}>
       <p>Hello</p>
     </Jumbotron>
   ) )}
 </Jumbotron.Container>
  );
}

export default App;
