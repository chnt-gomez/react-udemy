import { use } from 'react';
import { getUserAction }  from '@/api/get-user.action';

const userPromise = getUserAction(1);

export const ClientInformation = () => {
    
    const user = use( userPromise)
    
    console.log(user);
    
    
    return (
        <div className="bg-gradient flex flex-col gap 4">
            
            <h2 className="text4xl font-thin text-white">vmartinez # 2293</h2>

            <p className="text-white text-2xl">Guadalajara, Jalisco</p>
            <p className="text-white text-xl">Un rol del usuario</p>
            
        </div>
    )
}