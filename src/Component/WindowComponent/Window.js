import React from "react"
import Notepadclick from "./NotepadcClick";
import RightClickDisplay from "./RightClickDisplay";
import WindowClick from "./WindowClick";
import "./AllWindowStyle.css"


export default function Window(props){
    const[right,setRight] = React.useState(false)
    const[NotepadFile1,setNotepadFile1] = React.useState(false)
    const[NotepadEdit1,setNotepadEdit1] = React.useState(false)
    const[Notepadsetting,setNotepadsettingclick] = React.useState(false)
    
    const[X,setX] = React.useState(0)
    const[Y,setY] = React.useState(0)

    

    const background = {
        height:window.innerHeight,
        width: window.innerWidth,
        background:'url("./Background-image/windows-11.jpg")',
        backgroundRepeat : "no-repeat",
        backgroundSize : "cover",
      }
      
    const RightClick =function(e){
        e.preventDefault()
            // let x = e.clientX;
            // let y = e.clientY;
        setX(e.clientX)
        setY(e.clientY)    
        setRight(preve => !preve)    
    }
      //reload this page
    window.addEventListener("resize",()=>{
        window.location.reload()
    })

    const [maximizeclick,setmaximizeclick] = React.useState(
        "w-9/12 h-5/6 bg-white rounded resize overflow-hidden shadow-lg notepadTranslate"
    )
    const [FullHeightWidth,setFullHeightWidth] = React.useState(false)
    
    const maximize = function(event){
        event.preventDefault()
        setmaximizeclick((preve)=>{
            if(FullHeightWidth === true){
                setFullHeightWidth(false)
                return preve = "FullHeightWidth bg-white rounded resize overflow-hidden shadow-lg "
            }
            else if(FullHeightWidth === false){
                setFullHeightWidth(true)
                return preve = "w-9/12 h-5/6 bg-white rounded resize overflow-hidden shadow-lg notepadTranslate";
            }
        })
    }

    
    
    return(
        <div className='Window-Container' 
             style = {background} 
             onContextMenu={RightClick}
        >
            {right && 
            <RightClickDisplay
                x = {X}
                y = {Y}
                refresh = {()=> window.location.reload()}
            />}

        {props.windowclick1 && <WindowClick/>}
        {
            props.notepadDisplay1&&
            <Notepadclick
                classNOte = {maximizeclick}
                CallMaximize = {maximize}
                close1 = {props.close2}
                NotepadFile1 = {NotepadFile1}
                NotepadFileclick ={()=>setNotepadFile1((preve)=>!preve)}
                NotepadEdit1 = {NotepadEdit1}
                NotepadEditclick1 ={()=>setNotepadEdit1((preve)=>!preve)}
                setting1 = {Notepadsetting}
                Notepadsettingclick1 ={()=>setNotepadsettingclick((preve)=>!preve)}
                
            />
        }
        </div>
    )
}