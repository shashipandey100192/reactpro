import React, { useState } from "react";
import { DiAndroid } from "react-icons/di";
function About()
{

const a = 500;

const [xyz,abc]=useState("this is text");

const myfunc = ()=>{
    abc("pppppppppppppppppppppppppppppppp")
}

const mycurrentdata = (b)=>{
    console.log(b.target.value);
}

   return(
    <div className="container">
    <div className="row">
        <div className="col-12">
            <h1>This is Home page {a}</h1>
            <h2> <DiAndroid/></h2>
            <p>sdfsjdfhjksdfh sdjkhfsdhf sddjfhsjkdfh sdjfhsjfh </p>
            <input type="text" value={a}/>
            <h2>{xyz}</h2>
            <input type="button" value="change content" onClick={myfunc}/>
<input type="text" onInput={mycurrentdata}/>

        </div>
    </div>
   </div>
   )
}

export default About


function Contact()
{
    return <div>this is<h1>thi</h1> web page</div>
}

export {Contact}

const xyz="two";
export function Service()
{
    if(xyz==="one")
    {
        return <h1>this is first page</h1>
    }
    else if(xyz==="two")
    {
        return <h2>this is second page</h2>
    }
    else
    {
        return( <h3>this is third page</h3>)
    }
}
