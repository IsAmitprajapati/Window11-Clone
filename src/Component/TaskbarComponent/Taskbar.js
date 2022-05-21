import React from "react"
import TaskbarLeft from "./TaskbarLeft"
import TaskbarMiddle from "./TaskbarMiddle"
import TaskbarRight from "./TaskbarRight"
import "./TaskbarLeft.css"



export default function TaskbarCompenent(props){
    return(
        <div className='TaskbarCompenent-Container flex justify-between items-center px-3 z-50'
        onContextMenu={(e)=>{e.preventDefault()}}>
            <TaskbarLeft/>
            <TaskbarMiddle
                windowTask2 = {props.windowTask3}
                notepadDisplay3 = {props.notepadDisplay4}
                active2 = {props.active3}
                activeW1 = {props.activeW2}
            />
            <TaskbarRight/>
        </div>
        
    )
}