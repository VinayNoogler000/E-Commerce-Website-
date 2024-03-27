/* This component renders an input element in which the user will
enter a sigle digit from the 8-digit code.  */

export default function InputBox({ inpVal, updInpVal, idx }) {
    let handleInput = event => {
        let newVal = event.target.value;
        updInpVal((prevInpArr) => {
            prevInpArr[idx] = newVal;
            return [...prevInpArr];
        });
    }

    return (
        <input
            id="code"
            type="text"
            pattern="[0-9]"
            maxLength={1}
            className="w-[46px] h-12 border-[1px] rounded-md border-[#C1C1C1] text-center"
            value={inpVal[idx]}
            onChange={handleInput}
        >
        </input>
    );
}