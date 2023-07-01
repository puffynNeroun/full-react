import React, { useState } from 'react';

const FormComponent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Значение из поля ввода:', inputValue);
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">Отправить</button>
        </form>
    );
}

export default FormComponent;
