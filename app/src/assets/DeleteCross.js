import * as React from "react";
import { useState } from "react";

const DeleteCross = (props) => {

    const [isShown, setIsShown] = useState(false)
    return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 32 32" fill={isShown ? 'red' : "#000"}{...props} onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>


        <g id="trash">

            <path d="M22.68,29H9.32a3,3,0,0,1-3-2.56l-3-20A3,3,0,0,1,6.32,3H25.68a3,3,0,0,1,3,3.45l-3,20A3,3,0,0,1,22.68,29ZM6.32,5a1,1,0,0,0-.76.35,1,1,0,0,0-.23.8l3,20a1,1,0,0,0,1,.85H22.68a1,1,0,0,0,1-.85l3-20a1,1,0,0,0-.23-.8A1,1,0,0,0,25.68,5Z" />

            <path d="M12.61,20.39a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41l6.79-6.79a1,1,0,1,1,1.41,1.41L13.31,20.1A1,1,0,0,1,12.61,20.39Z" />

            <path d="M19.39,20.39a1,1,0,0,1-.7-.29L11.9,13.31a1,1,0,0,1,1.41-1.41l6.79,6.79a1,1,0,0,1,0,1.41A1,1,0,0,1,19.39,20.39Z" />

        </g>

    </svg>)
}

export default DeleteCross;
