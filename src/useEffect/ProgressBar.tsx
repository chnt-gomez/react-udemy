import { useTrafficLight } from "./hooks/useTrafficLight"

export const ProgressBar = () => {

    const { progressBarPerventage } = useTrafficLight()
    return (
        <div className="w-64 bg-gray-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
                style={{ width: `${progressBarPerventage}%` }} ></div>
        </div>
    )
}