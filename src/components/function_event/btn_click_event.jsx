import React from "react";

export default function BtnClickEvent(){
    function clickHandle(){
        console.log("Button Clicked!")
    }
    return (
        <button className="btn" onClick={()=>clickHandle()}>Click Me!</button>
    )
}