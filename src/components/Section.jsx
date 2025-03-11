import { useState } from 'react'
import '../styles/section.css'
import { connectSchool } from './School';
import { connectHeader } from './Header';

function Section(props)
{
    const [inputs,setInput]=useState(props.inputs);
    const [disFlag,changeFlag]=useState(false);
    const [f,disable]=useState(false);
    const inputAdded=(e)=>{
        updateValues(e);
        if(inputs.length==0)
            disable(false);
        const newInputs=inputs.concat((props.ind==1)?[["School","text",""],["Course","text",""],["Year of Graduation","number",""]]:[["Company Name","text",""],["Position Title","text",""],["Responsibilities","text",""],["Start Date","date",""],["End Date","date",""]]);
        setInput(newInputs);
    };
    const inputRemoved=(e)=>{
        updateValues(e);
        if(inputs.length==3)
            disable(true);
        const newInputs=inputs.slice(0,inputs.length-((props.ind==1)?3:5));
        setInput(newInputs);
    };
    const edit =()=>{
        changeFlag(false);
        if(inputs.length>0)
            disable(false);
    };
    const submit =(e)=>{
        updateValues(e);
        changeFlag(true);
        disable(true);
        if(props.title.charAt(0)=="G")
            connectHeader(inputs);
        else if(props.title.charAt(0)=="E")
            connectSchool(inputs);
    };

    const updateValues=(e)=>{
        for(let i=0;i<inputs.length;i++)
        {
            inputs[i][2]=e.children[i].children[1].value;
        }
    };
    return(
    <div className="section">
    <h1>{props.title}</h1>
    <ul>
    {inputs.map((i) => {
        return (<div key={crypto.randomUUID()} className={"answers "+((props.ind==0)?"gen":((props.ind==1)?"school":"company"))}>
        <label>{i[0]}</label>
        <input type={i[1]} disabled={disFlag} defaultValue={i[2]}/>
        </div>);
      })}
    </ul>
    <div className="buttons">
    {props.title=="General Information"?null:(<>
    <button onClick={(event) => inputAdded(event.target.parentElement.parentElement.children[1])} disabled={disFlag}>Add</button>
    <button onClick={(event) => inputRemoved(event.target.parentElement.parentElement.children[1])} disabled={f}>Remove</button>
    </>)}
    <button onClick={edit} disabled={!disFlag}>Edit</button>
    <button onClick={(event) => submit(event.target.parentElement.parentElement.children[1])} disabled={disFlag}>Submit</button>
    </div>
    </div>)
}

export default Section;