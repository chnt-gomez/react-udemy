import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
    gray: 'bg-gray-500'
}

type TrafficLightColors = 'red' | 'yellow' | 'green' | 'gray'

export const useTrafficLight = (initialValue: number = 30) => {

    const [light, setLight] = useState<TrafficLightColors>('red');
    const [countDown, setCountDown] = useState(initialValue)

    useEffect(() => {
        if (countDown <= 0) {
            setCountDown(30);
        }
        const intervalId = setInterval(() => {
            setCountDown(prev => prev - 1)
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [countDown]);

    useEffect(() => {
        if (countDown >= 20) {
            setLight('green')
            return;
        }

        if (countDown >= 15) {
            setLight('yellow')
            return;
        }

        if (countDown >= 10) {
            setLight('red');
        }
    }, [countDown]);

    return {
        countDown,
        initialValue,

        progressBarPerventage: (countDown / initialValue) * 100,
        greenLight: light === 'red' ? colors[light] : colors['gray'],
        yellowLight: light === 'yellow' ? colors[light] : colors['gray'],
        redLight: light === 'green' ? colors[light] : colors['gray']
    };

}