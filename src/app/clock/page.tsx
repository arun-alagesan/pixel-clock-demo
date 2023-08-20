import React from "react";

export default function Clock(){
    //
    return(
        <main className="flex min-h-screen flex-col  items-center pt-10">
            <div className="flex flex-col items-center  " style={{border : "1px solid green", width:600, height: 600}}>
                <div id="1" className=" bar outlineborders red h-[200px] w-[20px] transform rotate-45" ></div>
                <div id="1" className=" bar outlineborders red h-[200px] w-[20px] transform rotate-90" ></div>
                <div id="1" className=" bar outlineborders red h-[200px] w-[20px] transform rotate-180" ></div>
                <div id="1" className=" bar outlineborders red h-[200px] w-[20px] transform -rotate-90"></div>
                <div id="1" className=" bar outlineborders red h-[200px] w-[20px] transform -rotate-45"></div> 
            </div>
            
        </main>
    )
}