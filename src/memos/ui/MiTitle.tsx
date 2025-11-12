import React from "react"

interface Props {
    title: string
}

export const MiTitle = React.memo(({title} : Props) => {
    console.log('Mi Title re-render')
    return (
        <h1>{title}</h1>
    )
});