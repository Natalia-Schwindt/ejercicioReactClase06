import { useState } from "react";
import { questions } from "../dataBase/question";

const Quiz = () => {

    const [answerValue, setAnswerValue] = useState('');
    const [current, setCurrent] = useState(0);
    const data = questions[current];

    const validateAnswer = (e) => {
        e.preventDefault();
        if (!answerValue){
            alert('Debe elegir una opción')
            return
        }
        const answer = data.answers.find((answer) => answerValue === answer.id)
        if (answer.correct) {
            alert('Es correcto!')
            if(current + 1 < data.answers.length){
                setCurrent((prev) => prev + 1)
            }
        } else {
            alert('Es incorrecto!')
        }
        console.log(answer);
    }
  return (
    <div>
        <p>{data.question}</p>
      <form onSubmit={validateAnswer}>
        <select onChange={(e)=> setAnswerValue(e.target.value)} name="" id="">
            {data.answers.map((answer)=> <option value={answer.id} key={answer.id}>{answer.text}</option>)}
        </select>
        {/* {!answerValue ? <p>Correcto!</p> : <p>Incorrecto!</p>} */}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Quiz;
