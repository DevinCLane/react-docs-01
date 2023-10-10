"use client";
import { useState } from "react";

export default function IndependentStateButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button
            onClick={handleClick}
            className="bg-blue-500 hover:bg-blue-700 rounded text-white font-bold py-2 px-4"
        >
            I have been clicked {count} times
        </button>
    );
}
