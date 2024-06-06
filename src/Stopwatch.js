import React, { useState, useEffect } from 'react';

function Stopwatch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [intervalId]);

    const startStopwatch = () => {
        if (!isRunning) {
            const id = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
            setIntervalId(id);
            setIsRunning(true);
        }
    };

    const stopStopwatch = () => {
        if (isRunning) {
            clearInterval(intervalId);
            setIsRunning(false);
        }
    };

    const resetStopwatch = () => {
        clearInterval(intervalId);
        setTime(0);
        setIsRunning(false);
    };

    const formatTime = (time) => {
        const getSeconds = `0${time % 60}`.slice(-2);
        const minutes = `${Math.floor(time / 60)}`;
        const getMinutes = `0${minutes % 60}`.slice(-2);
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2);
        return `${getHours} : ${getMinutes} : ${getSeconds}`;
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Stopwatch</h1>
            <div style={{ fontSize: '48px', margin: '20px 0' }}>
                {formatTime(time)}
            </div>
            <div>
                {!isRunning ? (
                    <button onClick={startStopwatch} style={buttonStyle}>Start</button>
                ) : (
                    <button onClick={stopStopwatch} style={buttonStyle}>Stop</button>
                )}
                <button onClick={resetStopwatch} style={buttonStyle}>Reset</button>
            </div>
        </div>
    );
}

const buttonStyle = {
    fontSize: '20px',
    margin: '0 10px',
    padding: '10px 20px',
    cursor: 'pointer'
};

export default Stopwatch;
