import { useState } from "react";
import LogIn from "./Login";
import SignUp from "./SignUp";

const Auth = () => {
    const [change, setChange] = useState(false) ; 

    return (
        <div style={{flexDirection:"column", height:"100vh"}}>
            {change == true ? <div style={{backgroundColor:"skyblue", 
                                        display:"inline-flex",
                                        height:"50vh"}}> 
                <SignUp />
                <span onClick={() => setChange(!change)}> LogIn </span>
            </div> : <div style={{backgroundColor:"yellow", 
                                display:"inline-flex",
                                height:"50vh"}}> 
                <LogIn />
                <span onClick={() => setChange(!change)}> SignUp </span>
            </div>}
        </div>
    )
}

export default Auth ; 