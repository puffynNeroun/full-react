import React, {useState} from 'react';

const WorkingWithStates = () => {
    const [likes, setLikes] = useState(5)
    const [value, setValue] = useState('Текст в Инпуте')
    // console.log(likes)
    // console.log(setLikes)

    function increment() {
        setLikes(likes + 1)
    }

    function decrement() {
        setLikes(likes - 1)
    }

    return (
        <div>
            <h1>{likes}</h1>
            <h1>{value}</h1>
            <input
                onChange={event => setValue(event.target.value)}
                type="text"
                value={value}/>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
};

export default WorkingWithStates;