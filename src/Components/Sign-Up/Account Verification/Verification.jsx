/*This file contains a 'React Component', which gets rendered after
'Creating an Account' from 'SignUp Component', as this component is responsible
for the 'Verification of the provided Account email'. */

import CodeInput from "./CodeInput";

export default function Verification({userInfo}) {
    return (
        <div className="w-[576px] h-[453px] border-[1px] border-[#C1C1C1] rounded-[20px] text-center absolute top-[176px] left-1/3">
            <h1 className="mt-10 text-[32px] leading-10 font-semibold">Verify your Email</h1>
            <p className="mt-10">Enter the 8 digit code you have received on</p>
            <span className="font-medium">{userInfo.slice(0,4) + "***@gmail.com"}</span>
            <CodeInput />
            <button className="w-[456px] h-14 border-[1px] rounded-md border-black py-[18px] px-[148px] mt-16 bg-black text-white font-medium text-center hover:opacity-75">VERIFY</button>
        </div>
    );
}