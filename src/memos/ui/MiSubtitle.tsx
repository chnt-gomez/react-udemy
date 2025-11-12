import { memo } from 'react'

interface Props {
    subtitle: string
    callAPI: () => void;
}

export const MiSubtitle = memo(({subtitle} : Props) => {
    console.log('Mi Subtitle re-render')
    return (
        <>
            <h6>{subtitle}</h6>
            <button className="bg-indigo-500">Llamar a funcion</button>
        </>
    )
});