import React from "react"

function capitalize(str) {

    const lowerCase = str.toLowerCase()
    return lowerCase[0].toUpperCase() + lowerCase.slice(1)
}

export default function Alert(props){
    return(
        props.alert && <>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props?.alert?.type)}</strong>: {props?.alert?.msg}
            
        </div>
        </>
    )
}