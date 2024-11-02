import { useState } from 'react';

const Count = ()=> {
    const [count, setCount] = useState(0);

    return(
        <div>
            <h3>Contador React</h3>
            <button onClick={()=>setCount(count + 1)}>+</button>
            <h6>{count}</h6>
            <button onClick={()=>setCount(count - 1)}>-</button>
        </div>
    )
}

export default Count;