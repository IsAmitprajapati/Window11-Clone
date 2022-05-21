
import './App.css';
import Window from './Component/WindowComponent/Window';
import TaskbarCompenent from './Component/TaskbarComponent/Taskbar';

import React from "react"

function App() {
  const [windowclick,setwindowclick] = React.useState(false)
  const[notepadDisplay,setnotepadDisplay] = React.useState(false)
  return (
    <div className='Component'>       
          <Window
             windowclick1 = {windowclick}
             notepadDisplay1 = {notepadDisplay}
             close2 = {()=> setnotepadDisplay(preve => !preve)}
          />
          <TaskbarCompenent
             windowTask3 = {()=>setwindowclick(preve => !preve)}
             notepadDisplay4 ={()=> setnotepadDisplay(preve => !preve)}
             active3 = {notepadDisplay}
             activeW2 = {windowclick}
          />
    </div>
  );
}

export default App;
