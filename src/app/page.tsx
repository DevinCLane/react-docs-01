"use client"

import { useState } from "react";

export default function Home() {
  return (
      <main className="min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 gap-4">
          <h1>Button with independent states</h1>
          <Button />
          <Button />
      </main>
  );
}

function Button() {
  const [count, setCount] = useState(0);

  function handleClick() {
      setCount(count + 1);
  }

  return (
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button clicked {count} times
      </button>
  );
}