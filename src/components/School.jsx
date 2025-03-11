import { useState } from 'react'
import '../styles/output.css'
export let connectSchool;

function School()
{
    const [currentInput,setInputsS]=useState([[]]);
    connectSchool=(e)=>{
        let arr=[];
        for(let i=0;i<e.length;i+=3)
        {
            arr.push([e[i][2],e[i+1][2],e[i+2][2]]);
        }
        setInputsS(arr);
    };
    return (
        <>
        <h2 className="education">Education</h2>
    <ul>
    {currentInput.map((i) => {
        return (<div key={crypto.randomUUID()} className={"schoolOutput"}>
        <div className="nameNtime">
            <h4>{i[0]}</h4>
            <h5>{i[2]}</h5>
            </div>
            <p className="courseName">{i[1]}</p>
        </div>);
      })}
    </ul>
        </>
    );
}

export default School;