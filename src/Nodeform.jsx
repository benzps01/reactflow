import React, { useState } from "react";

function NodeForm({onAddNode}) {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            onAddNode(inputValue);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Node label" value={inputValue} onChange={handleInputChange} />
            <button type="submit">Add Node</button>
        </form>
    )
}

export default NodeForm;