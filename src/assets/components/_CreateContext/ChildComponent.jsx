import React, { useContext } from 'react';
import MyContext from './MyContext';

function ChildComponent() {
    const { value, updateValue } = useContext(MyContext);

    return (
        <div>
            <p>{value}</p>
            <button onClick={updateValue}>Update Value</button>
        </div>
    );
}

export default ChildComponent;
