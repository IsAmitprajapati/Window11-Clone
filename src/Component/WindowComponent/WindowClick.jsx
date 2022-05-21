import React from "react";

export default function WindowClick(){
    return(
        <div className="absolute w-screen h-screen flex justify-center items-center bottom-2">
                <div className=" w-6/12 h-5/6 windowclickBackgroundClor rounded p-7 shadow-2xl z-30 animationTrasformlate">
                    <div className=" bg-white h-9 border-b-4 border-sky-500 p-1">
                        <i className="fa-solid fa-search rotate-90 px-2"/>
                        <input 
                            type="text" 
                            placeholder="Type here to Search"
                            className="border-0 outline-0 w-11/12"
                             />
                    </div>
                </div>
        </div>
    )
}