"use client";

interface Props {
    count: number;
    onClick: () => void;
}

export default function SharedStateButton({ count, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="bg-teal-500 hover:bg-teal-700 rounded text-white font-bold py-2 px-4"
        >
            I have been clicked {count} times
        </button>
    );
}
