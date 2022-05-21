import React from "react";



export default function RightClickDisplay(props){
    const RightClickStyle = {
        position:"relative",
        top:props.y,
        left:props.x,
        width:"250px",
        height: "auto",
        background:"white",
        padding:"10px",
        borderRadius:"10px",
        zIndex : "40"
    }

    return(
        <div style = {RightClickStyle}  className="shadow-2xl ">
            <div className="flex cursor-pointer items-center p-0.5 rounded hover:bg-sky-400 hover:text-white "><div className="w-5 h-5 p-0.5 flex flex-wrap">
                {/* <div className="dot"> */}
                    <div className="h-2 w-2 border-2 border-current rounded"></div>
                    <div className="h-2 w-2 border-2 border-current rounded"></div>
                    <div className="h-2 w-2 border-2 border-current rounded"></div>
                    <div className="h-2 w-2 border-2 border-current rounded"></div>
                {/* </div> */}
            </div><p className=" px-2">View</p><i className="fa-solid fa-angle-right pl-36"></i></div>
            <div className="flex cursor-pointer items-center p-0.5 rounded hover:bg-sky-400 hover:text-white"><div className="w-5 h-5 p-0.5 flex text-xs">
                <i className="fa-solid fa-arrow-up"></i>
                <i className="fa-solid fa-arrow-down text-sky-500"></i>
            </div> <p className=" px-2">Sort by</p><i className="fa-solid fa-angle-right pl-32"></i></div>
            <div className="flex cursor-pointer items-center p-0.5 rounded hover:bg-sky-400 hover:text-white" onClick={props.refresh}><div className="w-5 h-5 p-0.5 flex justify-center items-center">
                <i className="fa-solid fa-arrow-rotate-right"></i>
            </div><p className=" px-2">Refresh</p></div>
            <hr/>
            <div className="flex cursor-pointer items-center p-0.5 rounded hover:bg-sky-400 hover:text-white  hover:border-white"><div className="w-5 h-5 p-0.5 flex justify-center items-center">
                <div className="border-2  border-black rounded-full w-4 h-4 flex justify-center items-center  hover:text-white hover:border-white"> + </div>
            </div><p className=" px-2">New</p><i className="fa-solid fa-angle-right pl-36"></i></div>
            <hr/>
            <div className="flex cursor-pointer items-center p-0.5 rounded hover:bg-sky-400 hover:text-white"><div className="w-5 h-5 p-0.5"></div><p className=" px-2">Display setting</p></div>
            <div className="flex cursor-pointer items-center p-0.5 rounded hover:bg-sky-400 hover:text-white"><div className="w-5 h-5 p-0.5"></div><p className=" px-2">Personalize</p></div>
            <div className="flex cursor-pointer items-center p-0.5 rounded hover:bg-sky-400 hover:text-white"><div className="w-5 h-5 p-0.5"></div><p className=" px-2">Open in Terminal</p></div>
            <hr/>
            <div className="flex cursor-pointer items-center p-0.5 rounded hover:bg-sky-400 hover:text-white"><div className="w-5 h-5 p-0.5"></div><p className=" px-2">Show more options</p></div>
            
        </div>
    )
}