/*This component renders an element, where the user can enter the
8-digit code, which is sent on his email. */

import InputBox from "./InputBox";
import { useState } from "react";

export default function CodeInput() {
    let [inpValArr, setInpArr] = useState(["", "", "", "", "", "", "", ""]);

    return (
        <div className="mt-10 text-start ml-14">
            <label for="code">Code</label>

            <div className="mt-1.5 flex gap-3.5">
                <InputBox inpVal={inpValArr} updInpVal={setInpArr} idx={0}/>
                <InputBox inpVal={inpValArr} updInpVal={setInpArr} idx={1}/>
                <InputBox inpVal={inpValArr} updInpVal={setInpArr} idx={2}/>
                <InputBox inpVal={inpValArr} updInpVal={setInpArr} idx={3}/>
                <InputBox inpVal={inpValArr} updInpVal={setInpArr} idx={4}/>
                <InputBox inpVal={inpValArr} updInpVal={setInpArr} idx={5}/>
                <InputBox inpVal={inpValArr} updInpVal={setInpArr} idx={6}/>
                <InputBox inpVal={inpValArr} updInpVal={setInpArr} idx={7}/>
            </div>
        </div>
    );
}