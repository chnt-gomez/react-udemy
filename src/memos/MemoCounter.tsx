import { useMemo } from 'react';
import { useCounter } from '@/useCounter';

const heavyStuff = (iterationNumber: number) => {
    console.time('001');

    for (let index = 0; index < iterationNumber; index++){
        console.log("... ")
    }

    console.timeEnd('001');
    return `${iterationNumber} iteraciones`;
}

export const MemoCounter = () => {


    const { counter, increment } = useCounter (40_000);
    const { counter: counter2, increment: increment2 } = useCounter(40_000);
    const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);
    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Memo - useMemo</h1>
            <hr />

            <h4 className="text-white">
                Counter: {counter}
            </h4>
            <h4 className="text-teal-500">
                Counter: {counter2}
            </h4>

            <button 
            className="bg-blue-500 text-white px-4 rounded-md py-2" 
            onClick={increment}> + 1</button>

                        <button 
            className="bg-teal-500 text-white px-4 rounded-md py-2" 
            onClick={increment2}> + 1</button>

        </div>
    )
}