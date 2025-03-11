import { useState } from 'react'
import '../styles/output.css'

export let connectHeader;

function Header()
{
    const [info,updateInfo]=useState(["","",""]);

    connectHeader=(e)=>{
        updateInfo([e[0][2],e[1][2],e[2][2]]);
    }

    const values = ()=>{
            for(let j=0;j<info.length;j++)
            {
                if(info[j]!=null&&info[j]!=undefined&&info[j]!="")
                    return true;
            }
        return false;
    };

    if(!values())
        return null;

    return (
        <>
        <h2 className="name">{info[0]}</h2>
        <div className="subInfo">
            <span className="email">{info[1]}</span>
            <span className="phone">{info[2]}</span>
        </div>
        </>
    );
}

export default Header;