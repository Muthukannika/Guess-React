import React from "react";
import { useState } from "react";
function Result({ term , num }){

    const [result,setResult] = useState("");
    function handleClick(){

        if(term){
            if(term > num)
                setResult("I am smaller than you guessed :)");
            else if(term < num)
                setResult("I am higher than you guessed :)");
            else
                setResult("(: You guessed me :)");
        }
        else
            setResult("*** Enter the value ***");
    }
    return(
        <>
            <button onClick = {handleClick}>Click Me !</button>
            <p>{result}</p>
        </>
    )
}
export default Result;