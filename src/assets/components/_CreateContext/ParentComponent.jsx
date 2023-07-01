import React, { useState } from 'react';
import MyContext from './MyContext';
import ChildComponent from "./ChildComponent.jsx";

function ParentComponent() {
    const [value, setValue] = useState('Hello from Context');

    const updateValue = () => {
        setValue('Updated value from Context');
    };

    return (
        <MyContext.Provider value={{ value, updateValue }}>
            <ChildComponent />
        </MyContext.Provider>
    );
}

export default ParentComponent;
