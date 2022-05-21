import React from "react";

export default function TimeData(){
    const [data,setdata] = React.useState({
        Time : "15:37",
        Date : "20-05-2022"
    })
    React.useEffect(()=>{
        setdata((preveData)=> {
            let time = new Date();
            let hour = time.getHours();
            let minu = time.getMinutes();
                minu = checksome(minu)
                hour = checksome(hour)
            let date = time.getDate();
            let month = time.getMonth();
            console.log(month)
            let year = time.getFullYear();
                date  = checksome(date)
            //multiple time calll
             function checksome(i){
                 if(i < 10){
                    return "0" + i;
                 }
                 return i;
             }
             
            return{
                ...preveData,
                Time : `${hour}:${minu}`,
                Date : `${month}-${date}-${year}`
            }
     })
    },[0])
    
        
    

    return(
        <div className="flex flex-col ml-3  w-18 text-current">
            <p className="w-18 flex justify-end text-sm">{data.Time}</p>
            <p className="w-18 flex justify-end text-sm">{data.Date}</p>
        </div>
    )
}