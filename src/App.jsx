import './App.css';
import Accordion from './components/Accordion';
import Count from './components/Count';
import List from './components/List';
import { tasks } from './dataBase/data';
import  Title from './components/Title';
import Quiz from './components/Quiz';

function App() {

  return (
      <div>
        <List tasks={tasks}/>
        <Title />
        <Count />
        <Accordion/>
        <Quiz />
      </div>
  )
}

export default App