import { useState } from 'react'
import '../styles/output.css'

export let connectCompany;

function Company()
{
    const [currentInput,setInputsS]=useState([["","","","",""]]);
    connectCompany=(e)=>{
        let arr=[];
        for(let i=0;i<e.length;i+=5)
        {
            arr.push([e[i][2],e[i+1][2],e[i+2][2],e[i+3][2],e[i+4][2]]);
        }
        setInputsS(arr);
    };

    const isOk = (e)=>{
        if(e==undefined)
            return false;
        if(e==null)
            return false;
        if(e=="")
            return false;
        return true;
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
        <h2 className="company">Experience</h2>
    <ul>
    {currentInput.map((i) => {
        return (<div key={crypto.randomUUID()} className={"companyOutput"}>
            <div className="companyUp"><div className="left"><h4>{i[0]}</h4>
            <h4>{i[1]}</h4></div>
            {(!isOk(i[3]||!isOk(i[4])))?null:<span className="date">{i[3]+" - "+i[4]}</span>}</div>
            <Roles input={i[2]}/>
        </div>);
      })}
    </ul>
        </>
    );
}

function Roles(props)
{
    const format =(e)=>{
        return e.split(",")
    }
    return (<>
    <h6>Responsibilities</h6>
    <ul className="respons">
        {
        format(props.input).map((i)=>{
            return (<li key={crypto.randomUUID()}>{i}</li>)
        }
        )}
    </ul>
    </>);
}

export default Company;