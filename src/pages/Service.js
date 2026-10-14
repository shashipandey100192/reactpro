import { Fragment } from "react/jsx-runtime"
import myimg from '../images/10.jpg';
const xyz="https://uswalldecor.com/cdn/shop/files/us-wall-decor-wallpaper-home-hero_1.png?v=1769640965&width=3840";

function Service10() {
    const name="ravi singh";
    const working= true;
    const salary=14000;
  return (
    <Fragment>
        <h1>heading</h1>
            <div>Service</div>
            <div>heading one: {name}</div>
            <h1>{"this is text"}</h1>
            <h1>{900}</h1>
            <h1>Total:{90+60}</h1>
            <h1>working:{working===true? "true" : "false"}</h1>
            <h1>salary:{salary>=20000? "good salary" : salary>=10000? "average salary" : salary>=5000? "poor salary" : "salary update karo"}</h1>
            
            <img src={myimg} alt="profile pic" width={200}/>
            <img src={xyz} alt="online image" width="200"/>
     </Fragment>
  )
}

export default Service10