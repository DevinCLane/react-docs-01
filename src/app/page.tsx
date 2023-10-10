"use client";
import { useState } from "react";
import SharedStateButton from "./_components/SharedStateButton";
import IndependentStateButton from "./_components/IndependentStateButton";
import Footer from "./_components/Footer";

export default function Home() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className="min-h-screen flex flex-col justify-between">
            <main className="flex flex-col items-center p-10 gap-4">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                    Buttons and state
                </h1>
                <h2 className="text-4xl font-extrabold dark:text-white">
                    Buttons with independent state
                </h2>
                <IndependentStateButton />
                <IndependentStateButton />
                <h2 className="text-4xl font-extrabold dark:text-white">
                    Buttons with shared state
                </h2>
                <SharedStateButton count={count} onClick={handleClick} />
                <SharedStateButton count={count} onClick={handleClick} />
            </main>
            <Footer />
        </div>
    );
}
