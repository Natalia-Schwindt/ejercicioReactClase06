import './App.css';
import Accordion from './components/Accordion';
import Count from './components/Count';
import List from './components/List';
import { tasks } from './dataBase/data';
import  Title from './components/Title';
import Quiz from './components/Quiz';
import CarrouselImage from './components/CarrouselImage';
import TrafficLight from './components/TrafficLight';

function App() {

  return (
      <div>
        <List tasks={tasks}/>
        <Title />
        <Count />
        <Accordion/>
        <Quiz />
        <CarrouselImage />
        <TrafficLight />
      </div>
  )
}

export default App