import React from "react";

const Card = ({title ,id, userId, body, heading}) => {
    return(
        <>
        <div className="card">
           <u> {heading} </u><br/><br/>
            title: {title} <br/>
            id: {id} <br/>
            userId:{userId} <br/>
            body: {body}</div>
        </>
    )
}

export default Card