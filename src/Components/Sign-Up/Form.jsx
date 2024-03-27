import InputBox from "./InputBox";
import { useState } from "react";

export default function Form({ isNav, updEmail}) {
    let [inpVal, setInpVal] = useState({name: "", email: "", password: ""});

    let handleSubmit = event => {
        event.preventDefault();
        setInpVal({name: "", email: "", password: ""});
        isNav(true);
        updEmail(inpVal.email);
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputBox fieldName={"Name"} inpObj={inpVal} updateInpObj={setInpVal}/>
            <InputBox fieldName={"Email"} inpObj={inpVal} updateInpObj={setInpVal}/>
            <InputBox fieldName={"Password"} inpObj={inpVal} updateInpObj={setInpVal}/>
            <button type="submit" className="w-[456px] h-14 border-[1px] rounded-md border-black py-[18px] px-[148px] ml-14 bg-black text-white font-medium text-center leading-5 hover:opacity-75">CREATE ACCOUNT</button>
        </form>
    );
}