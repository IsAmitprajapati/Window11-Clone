import React from "react";
import AppIcon from "../AppIcon/AppIcon";



export default function NotepadIcon(props){
   
    return(
        <div>   
       
            <div className={props.active1 ? "h-10 w-10  flex flex-col items-center justify-center m-4 bg-white" 
                         :  "h-10 w-10  flex flex-col items-center justify-center m-4"}
                onClick={props.notepadDisplay2}>
                <img src={AppIcon.Notepad} alt="Notepad" className ="h-8 w-8"/>
                {props.active1 && <div className="h-1 w-2 rounded bg-current  mt-0.5"></div>}
            </div>
            
           
        </div>
    )
}