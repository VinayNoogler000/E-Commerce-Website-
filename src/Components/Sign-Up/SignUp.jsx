import Form from "./Form";
import LoginIfExistingUser from "./LoginIfExistingUser";
import Verification from './Account Verification/Verification'
import { useState } from "react";

export default function SignUp() {
    let [nav, setNav] = useState(false);
    /*Above👆 stateVar 'nav' stores either true or false. And it is created to 
    decide that when will the 'Verification' component gets render after 'SignUp'
    component. Basically, when the button will be clicked in the SignUp component,
    then the 'nav' stateVar will be updated to 'true', and the below ternary operator
    will render the Verification component.*/

    let [email, setEmail] = useState(""); /*👈This State contains the 'email' entered by the user in
    the Form of the SignUp component, and it is created to pass the user email to the 'Verification' 
    component. */

    return (
        <>
            {nav ?
                <Verification userInfo={email}/> 
                :
                <div className="w-[576px] h-[691px] border-[1px] rounded-[20px] border-[#C1C1C1] absolute top-[176px] left-1/3">
                    < h1 className="text-[32px] leading-[38.73px] font-semibold mt-12 ml-32" > Create Your Account</h1 >
                    <Form isNav={setNav} updEmail={setEmail}/>
                    <LoginIfExistingUser />
                </div >
            }
        </>
    );
}