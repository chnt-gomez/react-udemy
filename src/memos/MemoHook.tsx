import { useCallback, useState } from 'react';
import { MiTitle } from "./ui/MiTitle"
import { MiSubtitle } from './ui/MiSubtitle';

export const MemoHook = () => {

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');

    

    const handleCallAPI = useCallback( () => {
        console.log('calling api... ()')
    },[]);
    return (
        <div className="bg-gradient flex flex-col gap-4">
            <h1 className="text-2xl font-thin text-white">MemoApp</h1>

            <MiTitle title={title} />
            <MiSubtitle subtitle={subtitle} callAPI={handleCallAPI}/>

            <button 
            onClick = {() => setTitle('hello, '+ new Date().getTime())}
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Cambiar titulo
            </button>

            <button 
            onClick = {() => setSubtitle('world')}
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
                Cambiar subtitulo
            </button>
        </div>
    )
}