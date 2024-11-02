import { useState } from 'react';

const Title = ()=> {
    const [title, setTitle] = useState('Hola');

    return(
        <div>
            <h3>{title}</h3>
            <button onClick={()=>setTitle('Chau')}>Cambiar título</button>
        </div>
    )
}

export default Title;