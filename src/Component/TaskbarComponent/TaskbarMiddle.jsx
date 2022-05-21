import React from "react";
import HoverDisplayName from "./HoverDisplayName";
import NotepadIcon from "./NotepadIcon";
import RecentTab from "./RecentTab";
import SearchIcon from "./SearchIcon";
import WindowIcon from "./WindowIcon";


export default function TaskbarMiddle(props){
    
    return(
        <div className="justify-center flex items-center">
            <WindowIcon
                windowTask1 = {props.windowTask2}
                activeW = {props.activeW1}
            />
            <SearchIcon/>
            <RecentTab/>
            <NotepadIcon
                notepadDisplay2 = {props.notepadDisplay3}
                active1 = {props.active2}
            />
        </div>
    )
}