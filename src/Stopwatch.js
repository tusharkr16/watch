import React, { useState, useEffect, useRef } from 'react';
import './App.css'

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [running]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const handleStartStop = () => {
        setRunning(!running);
    };

    const handleReset = () => {
        setRunning(false);
        setTime(0);
    };

    return (
        <div className="stopwatch">
            <h1>Stopwatch</h1>
            <div className="time-display">Time: {formatTime(time)}</div>
            <button onClick={handleStartStop}>
                {running ? 'Stop' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Stopwatch;
