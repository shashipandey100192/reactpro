import React from "react";
import { DiAndroid } from "react-icons/di";
function About()
{
   return(
    <div className="container">
    <div className="row">
        <div className="col-12">
            <h1>This is Home page</h1>
            <h2> <DiAndroid/></h2>
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
