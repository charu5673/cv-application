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

    const values = ()=>{
        for(let i=0;i<currentInput.length;i++)
        {
            for(let j=0;j<currentInput[i].length;j++)
            {
                if(currentInput[i][j]!=null&&currentInput[i][j]!=undefined&&currentInput[i][j]!="")
                    return true;
            }
        }
        return false;
    };

    if(!values())
        return null;
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