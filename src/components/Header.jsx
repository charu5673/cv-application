import { useState } from 'react'
import '../styles/output.css'

export let connectHeader;

function Header()
{
    const [info,updateInfo]=useState(["","",""]);

    connectHeader=(e)=>{
        updateInfo([e[0][2],e[1][2],e[2][2]]);
    }

    return (
        <>
        <h2 className="name">{info[0]}</h2>
        <div className="subInfo">
            <h3 className="email">{info[1]}</h3>
            <h3 className="phone">{info[2]}</h3>
        </div>
        </>
    );
}

export default Header;