import React from "react";
import AppIcon from "../AppIcon/AppIcon";

export default function Notepadclick(props){
    return(
        <>
            <div className="absolute w-screen h-screen flex justify-center items-center bottom-5">
            <div className={props.classNOte}>
                <div className="h-20 w-9/15 notepadTopBackground ">
                    <div className="h-10 p-3 flex items-center justify-between ">
                        <div className="flex text-sm">
                            <img src={props.setting1 ? AppIcon.arrowleft : AppIcon.Notepad} width="21px" alt="Notepad"  onClick={props.Notepadsettingclick1}/>
                            
                            <p className="ml-3">Untitled - Notepad</p>
                        </div>
                        <div className="">
                            <i className="fa-solid fa-minus p-3" onClick={props.minimize}/>
                            <i className="fa-solid fa-window-maximize p-3" onClick={props.CallMaximize}/>
                            <i className="fa-solid fa-xmark p-3"onClick={props.close1} />
                        </div>
                    </div>
                    <div className="flex h-10 items-center justify-between p-3">
                        <div className="  flex p-3">
                            <div className="p-3 menunotepad">
                                <p className="cursor-pointer" onClick={props.NotepadFileclick}>File</p>
                                {/* {   props.NotepadFile1 && */}
                                    <div className="menu-file bg-white showeffect rounded ">
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>New</p><p className="text-slate-400">Ctrl+N</p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>New window</p> <p className="text-slate-400">Ctrl+Shift+N</p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Open</p><p className="text-slate-400">Ctrl+O</p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Save</p><p className="text-slate-400">Ctrl+S</p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Save as</p><p className="text-slate-400">Ctrl+Shift+S</p></p>
                                        <hr/>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Page setup</p><p className="text-slate-400"></p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Print</p><p className="text-slate-400">Ctrl+P</p></p>
                                        <hr/>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Exit</p><p className="text-slate-400"></p></p>
                                   
                                    </div>
                                {/* } */}
                            </div>
                            <div className="p-3 menunotepad">
                            <p className="cursor-pointer" onClick={props.NotepadEditclick1}>Edit</p>
                            {/* {   props.NotepadEdit1 && */}
                                    <div className="menu-file bg-white showeffect rounded ">
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Undo</p><p className="text-slate-400">Ctrl+Z</p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Cut</p> <p className="text-slate-400">Ctrl+X</p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Copy</p><p className="text-slate-400">Ctrl+C</p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Paste</p><p className="text-slate-400">Ctrl+P</p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Delete</p><p className="text-slate-400">Del</p></p>
                                        <hr/>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Find</p><p className="text-slate-400">Ctrl+F</p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Find next</p><p className="text-slate-400">F3</p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Find preveious</p><p className="text-slate-400">Shift+F3</p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Replace</p><p className="text-slate-400">Ctrl+H</p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Go to</p><p className="text-slate-400">Ctrl+G</p></p>
                                        <hr/>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Select all</p><p className="text-slate-400">Ctrl+A</p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Time/Date</p><p className="text-slate-400">F5</p></p>
                                        <hr/>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Font</p><p className="text-slate-400">F5</p></p>

                                    </div>
                            {/* } */}
                            </div>

                            <div className="p-3 menunotepad">
                            <p className="cursor-pointer" onClick={props.NotepadEditclick1}>View</p>
                            {/* {   props.NotepadEdit1 && */}
                                    <div className="menu-file bg-white showeffect rounded ">
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer notepadzoom"><p>Zoom</p><p className="text-black "><i className="fa-solid fa-angle-right"></i>

                                            <div className="absolute bg-white showeffect p-3 rounded w-60 submenu bottom-0 mt-1 ml-3">
                                                <div className="flex justify-between items-center"><p>Zoom in</p><p className="text-slate-400">Ctrl+Plus</p></div>
                                                <div className="flex justify-between items-center"><p>Zoom out</p><p className="text-slate-400">Ctrl+Minus</p></div>
                                                <div className="flex justify-between items-center"><p>Restore default zoom</p><p className="text-slate-400">Ctrl+0</p></div>
                                                
                                                
                                                
                                            </div>
                                        
                                        
                                        </p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Status bar</p></p>
                                        <p className=" w-60 px-3 py-1 flex justify-between cursor-pointer"><p>Word Wrap</p></p>
                                        <hr/>
                                    </div>
                            {/* } */}
                            </div>

                        </div>
                        <i className="fa-solid fa-gear" onClick={props.Notepadsettingclick1}/>
                    </div>
                </div>


                    <textarea
                    className="w-full h-5/6 resize-none p-3 border-0 outline-0"
                    />
                    
                    {/*setting section notepad */}
                    {
                        props.setting1 &&
                    <div className="notepadTopBackground settingNotepad w-full h-full relative">
                        <div className="p-10 w-4/6 ">
                            <h2 className="text-4xl font-bold mb-8">Settings</h2>
                            <div className="bg-white m-2 rounded p-2 flex items-center">
                                <img src="fdf" height="10px"  className="p-3"/>
                                <div className="content px-2 w-full">
                                    <p>App theme</p>
                                    <p className="text-sm">Select which app theme to display</p>
                                </div>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                            <div className="bg-white m-2 rounded p-2 flex items-center">
                                <img src="fdf" height="10px" className="p-3"/>
                                <div className="content px-2 w-full">Font</div>
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                        <div className=""></div>
                    </div>
                    
                    }

                {/* <div className="notepadTopBackground h-5 relative bottom-5"></div> */}
            
                
            </div>
            </div>
        </>
    )
}