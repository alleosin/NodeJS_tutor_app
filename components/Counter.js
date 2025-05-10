"use client";

import { useState } from "react";

function Counter({ title, id }) {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    async function handleCounterAction(action) {
        setIsLoading(true);

        try {
            const response = await fetch("/api/counter", {
                method: "POST",
                headers: {
                    "Countent-Type": "application/json",
                },
                body: JSON.stringify({
                    action,
                    counterId: id,
                }),
            });

            if (!response.ok) throw new Error("Failed to update counter");

            // Update local state after successful API call
            setCount((prev) => (action === "increment" ? prev + 1 : prev - 1));
        } catch (error) {
            console.error("Error updating counter:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
            <h2 className="text-xl font-semibold">{title}</h2>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => handleCounterAction("increment")}
                    className="w-10 h-10 flex items-center justify-center text-white bg-blue-500 rounded-full hover:bg-blue-600"
                    disabled={isLoading}
                >
                    +
                </button>

                <span className="text-2xl font-mono min-w-[3ch] text-center">
                   {count}
                </span>
                <button
                    onClick={() => handleCounterAction("decrement")}
                    className="w-10 h-10 flex items-center justify-center text-white bg-red-500 rounded-full hover:bg-red-600"
                    disabled={isLoading}
                >
                    -
                </button>
            </div>
        </div>
    );
}

export default Counter;
