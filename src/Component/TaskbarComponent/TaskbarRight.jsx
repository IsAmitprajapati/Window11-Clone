import React from "react";
import TimeData from "./TaskbarTime";

export default function TaskbarRight(){
    return(
        <>
            <div className="flex items-center justify-center">
            <p>Taskbar Right</p>
                <TimeData/>
            </div>
        </>
    )
}