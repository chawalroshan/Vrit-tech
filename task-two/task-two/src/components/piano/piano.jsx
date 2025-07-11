import React, { useEffect, useState } from 'react';
import './style.css';

const Piano = () => {
    const rows = 9;
    const cols = 26;
    const totalCells = rows * cols;

    const [purpleIndices, setPurpleIndices] = useState([]);


    const generateRandomIndices = (count, max) => {
        const indices = new Set();
        while (indices.size < count) {
            indices.add(Math.floor(Math.random() * max));
        }
        return [...indices];
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndices = generateRandomIndices(10, totalCells);
            setPurpleIndices(newIndices);
        }, 1000);

        return () => clearInterval(interval);
    }, [totalCells]);

    return (
        <div
            className="grid-container"
            style={{
                gridTemplateRows: `repeat(${rows}, 1fr)`,
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
            }}
        >
            {Array.from({ length: totalCells }, (_, i) => (
                <div
                    key={i}
                    className={`grid-cell ${purpleIndices.includes(i) ? 'purple' : ''}`}
                />
            ))}
        </div>
    );
};

export default Piano;
