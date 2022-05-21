import React from "react";

export default function HoverDisplayName(props){
    return(
        <div className="absolute">
            <div className="bg-white relative bottom-10 text-base px-2 rounded">
            {props.Title}
            </div>
        </div>
    )
}