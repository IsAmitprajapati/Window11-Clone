import React from "react";

export default function WindowIcon(props){
    return(
        <>
            <div className={props.activeW ?" w-10 h-10 bg-white flex flex-wrap m-2 p-1" 
                            :" w-10 h-10 bg-transparent flex flex-wrap m-2 p-1"}
                             onClick={props.windowTask1}>
                <div className="bg-sky-300 w-3.5 h-3.5 m-px rounded-1px"></div>
                <div className="bg-sky-400 w-3.5 h-3.5 m-px rounded-1px"></div>
                <div className="bg-sky-400 w-3.5 h-3.5 m-px rounded-1px"></div>
                <div className="bg-sky-500 w-3.5 h-3.5 m-px rounded-1px"></div>
                {/* <div className="h-1 w-2 rounded bg-current ml-3 mt-0.5"></div> */}
            </div>
            
        </>
    )
}